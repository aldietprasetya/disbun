import React, { useState } from 'react';
import { signIn, getCsrfToken } from 'next-auth/react';
import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import CarouselBanner from '../components/CarouselBanner';
import axios from 'axios';
import { appConfig } from 'src/config';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';
import InputEmailPage from '../forgotPassword/inputEmailPage';
import SectionSendEmail from '../setPassword/components/SectionSendEmail';
import moment from 'moment';
import LoginLogo from '../components/Login/LoginLogo';
import LoginTitle from '../components/Login/LoginTitle';
import LoginForm from '../components/Login/LoginForm';

const LoginPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [typePassword, setTypePassword] = useState(false);
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState('LOGIN');
  const [selectedEmail, setSelectedEmail] = useState('');

  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const res = await signIn('credentials', {
        redirect: false,
        username: values.email,
        password: values.password,
      });

      if (res?.error) {
        setIsError(true);
        enqueueSnackbar('', {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          content: (key, message) => (
            <CustomComponent
              id={key}
              message="Pasangan Email dan Password anda salah."
              variant="error"
              title="Gagal Masuk!"
            />
          ),
        });
      } else {
        setLoading(true);
        setIsError(false);
      }
      if (res.url) router.push("/");
      setSubmitting(false);
    },
  });

  function login(dt) {
    alert(dt)
  }

  const { values, errors, handleChange, handleSubmit, initialValues } =
    formLogin;

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <CarouselBanner />
      <div className="mx-32 flex-[0.5] lg:mx-32 lg:mt-32 tall:mt-8">
        {activePage === 'INPUT EMAIL' && (
          <InputEmailPage
            handleNextStep={(email) => {
              setSelectedEmail(email);
              setActivePage('SEND EMAIL');
            }}
            handleBackState={() => setActivePage('LOGIN')}
          />
        )}
        {activePage === 'SEND EMAIL' && (
          <SectionSendEmail
            email={selectedEmail}
            title="Lupa Kata Sandi"
            description="Mohon periksa email anda. Instruksi untuk melakukan reset kata sandi telah dikirim ke email anda."
            date={moment().add(3, 'minutes')}
          />
        )}
        {activePage === 'LOGIN' && (
          <>
            <LoginLogo />
            <LoginTitle
              title="Selamat Datang!"
              subTitle="Masukan Username dan Password Anda."
            />
            <LoginForm
              titleForm="Username"
              titleName="email"
              onChange={handleChange}
              type="text"
              values={values.email}
              placeholder="Masukan Username anda"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
            />
            <LoginForm
              titleForm="Password"
              titleName="password"
              onChange={handleChange}
              type={typePassword ? 'text' : 'password'}
              values={values.password}
              placeholder="Masukan Password anda"
              className={`${
                isError && 'bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
              classes={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } flex items-center justify-between rounded border bg-white-2 pr-3`}
              iconPassword={true}
              iconEmail={false}
              onClick={() => setTypePassword(!typePassword)}
              icon={
                typePassword
                  ? 'ant-design:eye-filled'
                  : 'ant-design:eye-invisible-filled'
              }
            />
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="focus:outline-none" />
                <div className="font-light">Remember me</div>
              </div>
              <div
                onClick={() => setActivePage('INPUT EMAIL')}
                className="cursor-pointer text-[#038575]"
              >
                Lupa Kata Sandi?
              </div>
            </div>
            <div className="mt-8 tall:mt-4">
              <button
                disabled={
                  values === initialValues || errors.email || errors.password
                }
                type='button'
                onClick={handleSubmit}
                className="w-full rounded-md bg-primary-green p-4 text-sm font-bold text-white disabled:bg-[#D5DBDA]"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <ReactLoading
                      type="spin"
                      color="#fff"
                      height="20px"
                      width="20px"
                    />
                  </div>
                ) : (
                  'Masuk'
                )}
              </button>
            </div>
            <div className="mt-10 w-full text-center text-base text-[#9E9E9E]">
              Belum memiliki akun?{' '}
              <span
                onClick={() => router.push('/register')}
                className="cursor-pointer text-[#038575]"
              >
                Daftar
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
