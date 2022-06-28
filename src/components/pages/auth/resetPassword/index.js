import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import CarouselBanner from '../components/CarouselBanner';
import axios from 'axios';
import { appConfig } from 'src/config';
import { login } from '../../../../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';
import InputEmailPage from '../forgotPassword/inputEmailPage';
import SectionSendEmail from '../setPassword/components/SectionSendEmail';
import moment from 'moment';
import LoginLogo from '../components/Login/LoginLogo';
import LoginTitle from '../components/Login/LoginTitle';
import LoginForm from '../components/Login/LoginForm';

const ResetPassPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [typePassword1, setTypePassword1] = useState(false);
  const [typePassword2, setTypePassword2] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [passLowerCaseCheck, setPassLowerCaseCheck] = useState(false);
  const [passUpperCaseCheck, setUpperCaseCheck] = useState(false);
  const [passNumberCheck, setPassNumberCheck] = useState(false);
  const [passCharCheck, setPassCharCheck] = useState(false);
  const [activePage, setActivePage] = useState('LOGIN');
  const [selectedEmail, setSelectedEmail] = useState('');

  const resetSchema = Yup.object().shape({
    password1: Yup.string().required('Required'),
    password2: Yup.string().required('Required'),
  });

  const formReset = useFormik({
    initialValues: {
      password1: '',
      password2: '',
    },
    validationSchema: resetSchema,
    // onSubmit: async (values) => {
    //   try {
    //     setLoading(true);
    //     const res = await axios.post(
    //       `${appConfig.baseUrl}/users`,
    //       {
    //         password1: values.password,
    //         password2: values.passwordConfirm,
    //       },
    //       {
    //         auth: {
    //           password1: appConfig.usernameBasicAuth,
    //           password2: appConfig.passwordBasicAuth,
    //         },
    //       },
    //     );
    //     if (res.data.success) {
    //       setIsError(false);
    //       const result = await axios.get(`${appConfig.baseUrl}/users`, {
    //         headers: {
    //           Authorization: `Bearer ${res.data.data.token}`,
    //         },
    //       });
    //       console.log(result);
    //       if (res.data.data.role.id === 1) {
    //         router.push('/');
    //       } else {
    //         router.push('/auth/login');
    //       }
    //     } else {
    //       setIsError(true);
    //       enqueueSnackbar(res.data.message, {
    //         anchorOrigin: {
    //           vertical: 'top',
    //           horizontal: 'right',
    //         },
    //         content: (key, message) => (
    //           <CustomComponent
    //             id={key}
    //             message="Pasangan Email dan Password anda salah."
    //             variant="error"
    //             title="Gagal Masuk!"
    //           />
    //         ),
    //       });
    //     }
    //     setLoading(false);
    //   } catch (error) {
    //     setLoading(false);
    //     if (error.response.status >= 400) {
    //       setIsError(true);
    //       enqueueSnackbar(error.response.data.message, {
    //         anchorOrigin: {
    //           vertical: 'top',
    //           horizontal: 'right',
    //         },
    //         content: (key, message) => (
    //           <CustomComponent
    //             id={key}
    //             message="Pasangan Email dan Password anda salah."
    //             variant="error"
    //             title="Gagal Masuk!"
    //           />
    //         ),
    //       });
    //     }
    //   }
    // },
  });

  useEffect(() => {
    let valPass1 = values.password1
    let valPass2 = values.password2

    valPass1.length < 9 ? setPassCharCheck(false) : setPassCharCheck(true)

    valPass1.search(/[a-z]/) < 0 ? setPassLowerCaseCheck(false) : setPassLowerCaseCheck(true)

    valPass1.search(/[A-Z]/) < 0 ? setUpperCaseCheck(false) : setUpperCaseCheck(true)

    valPass1.search(/[0-9]/) < 0 ? setPassNumberCheck(false) : setPassNumberCheck(true)

    if ((valPass1 === valPass2) && valPass1 != '' && valPass2 != '') {
      if (passLowerCaseCheck && passUpperCaseCheck && passNumberCheck && passCharCheck) {
        setValid(true)
      }
    } else {
      setValid(false)
    }
  },[formReset])

  const { values, errors, handleChange, handleSubmit, initialValues } =
    formReset;

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <CarouselBanner />
      <div className="mx-32 flex-[0.5] lg:mx-32 lg:mt-32 tall:mt-8">
        <LoginLogo />
        <LoginTitle
          title="Reset Password"
          subTitle="Masukan Kata Sandi baru."
        />
        <LoginForm
          titleForm="Kata Sandi Baru"
          titleName="password1"
          onChange={handleChange}
          type={typePassword1 ? 'text' : 'password'}
          values={values.password1}
          placeholder="Masukan Kata Sandi baru anda"
          className={`${
            isError && 'border-primary-red-1 bg-primary-red-2'
          } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
          classes={`${
            isError && 'border-primary-red-1 bg-primary-red-2'
          } flex items-center justify-between rounded border bg-white-2 pr-3`}
          iconPassword={true}
          iconEmail={false}
          onClick={() => setTypePassword1(!typePassword1)}
          icon={
            typePassword1
              ? 'ant-design:eye-filled'
              : 'ant-design:eye-invisible-filled'
          }
        />
        <div className={'text-sm mt-2'}>
          <p className={'text-[#616161]'}>Kata sandi harus berisi berikut ini:</p>
          <ul className={'list-disc pl-5 text-[#9E9E9E]'}>
            <li className={`${passLowerCaseCheck && 'text-primary-green font-bold'} pt-2 transition`}>Karakter huruf kecil</li>
            <li className={`${passUpperCaseCheck && 'text-primary-green font-bold'} pt-2 transition`}>Karakter huruf besar</li>
            <li className={`${passNumberCheck && 'text-primary-green font-bold'} pt-2 transition`}>Karakter angka</li>
            <li className={`${passCharCheck && 'text-primary-green font-bold'} pt-2 transition`}>Minimal 8 karakter</li>
          </ul>
        </div>
        <LoginForm
          titleForm="Konfirmasi Kata Sandi"
          titleName="password2"
          onChange={handleChange}
          type={typePassword2 ? 'text' : 'password'}
          values={values.password2}
          placeholder="Konfirmasi kata sandi anda"
          className={`${
            isError && 'bg-primary-red-2'
          } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
          classes={`${
            isError && 'border-primary-red-1 bg-primary-red-2'
          } flex items-center justify-between rounded border bg-white-2 pr-3`}
          iconPassword={true}
          iconEmail={false}
          onClick={() => setTypePassword2(!typePassword2)}
          icon={
            typePassword2
              ? 'ant-design:eye-filled'
              : 'ant-design:eye-invisible-filled'
          }
        />
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            className="rounded-md bg-primary-green p-4 w-32 text-sm font-bold float-right text-white disabled:bg-[#D5DBDA]"
            disabled={!valid}
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
              'Simpan'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassPage;
