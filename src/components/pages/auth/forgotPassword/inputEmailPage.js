import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { appConfig } from 'src/config';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';
import LoginLogo from '../components/Login/LoginLogo';
import LoginTitle from '../components/Login/LoginTitle';
import LoginForm from '../components/Login/LoginForm';

const InputEmailPage = ({ handleNextStep, handleBackState }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const inputEmailSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email wajib diisi')
      .email('Format email salah'),
  });

  const formInputEmail = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: inputEmailSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post(
          `${appConfig.baseUrl}/auth/v1/forgot-password`,
          {
            email: values.email,
          },
        );
        if (res.data.status == 'success') {
          handleNextStep(values.email);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response.status >= 400) {
          setIsError(true);
          enqueueSnackbar(error.response.data.message, {
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            content: (key, message) => (
              <CustomComponent
                id={key}
                message={message}
                variant="error"
                title="Reset Sandi Gagal"
              />
            ),
          });
        }
      }
    },
  });

  const { values, handleChange, errors, handleSubmit, initialValues } =
    formInputEmail;

  return (
      <div className="">
        <LoginLogo />
        <LoginTitle
        title="Lupa Kata Sandi"
        subTitle="Masukan email yang telah terdaftar"
        />
        <LoginForm
        titleForm="Email"
        titleName="email"
        onChange={handleChange}
        values={values.email}
        type="text"
        placeholder="Masukan email yang terdaftar"
        className="w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base"
        />
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            disabled={
              values === initialValues ||
              errors.confirmPassword ||
              errors.password
            }
            className="w-full rounded-md bg-primary-green  p-2 text-sm text-white disabled:bg-[#D5DBDA]"
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
              'Kirim Email'
            )}
          </button>
        </div>
        <div className="mt-10 w-full text-center text-base text-[#9E9E9E]">
          Sudah memiliki akun?{' '}
          <span
            onClick={() => handleBackState()}
            className="cursor-pointer text-[#038575]"
          >
            Masuk
          </span>
        </div>
      </div>
  );
};

export default InputEmailPage;
