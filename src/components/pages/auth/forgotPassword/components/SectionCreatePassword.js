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

const SectionCreatePassword = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [typePassword, setTypePassword] = useState({
    mainPassword: false,
    confirmPassword: false,
  });
  const [validateUpperCase, setValidateUpperCase] = useState(false);
  const [validateLowerCase, setValidateLowerCase] = useState(false);
  const [validateMinChar, setValidateMinChar] = useState(false);
  const [validateNumber, setValidateNumber] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password wajib diisi')
      .matches(/(?=.*?[a-z])/, {
        message: 'must be lowercase',
      })
      .matches(/(?=.*?[A-Z])/, {
        message: 'must be uppercase',
      })
      .matches(/.{8,}/, {
        message: 'min 8 char',
      })
      .matches(/(?=.*?[0-9])/, {
        message: 'at least one number',
      }),
    confirmPassword: Yup.string()
      .required('Confirm password wajib diisi')
      .oneOf([Yup.ref('password'), null], 'Pasangan kata sandi tidak sesuai'),
  });

  const formInputPassword = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: inputPasswordSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const token = router.query.token;
        const res = await axios.post(
          `${appConfig.baseUrl}/auth/v1/reset-password`,
          {
            password: values.password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (res.data.success) {
          enqueueSnackbar(res.data.message, {
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            content: (key, message) => (
              <CustomComponent
                id={key}
                message={message}
                variant="success"
                title="Berhasil Reset Sandi"
              />
            ),
          });
          router.push('/auth/login');
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

  const {
    values,
    handleChange,
    errors,
    handleSubmit,
    initialValues,
    touched,
    handleBlur,
  } = formInputPassword;

  useEffect(() => {
    const upperCaseTest = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const minChar = /.{8,}/;
    const number = /(?=.*?[0-9])/;

    if (upperCaseTest.test(values.password)) {
      setValidateUpperCase(true);
    } else {
      setValidateUpperCase(false);
    }

    if (lowerCase.test(values.password)) {
      setValidateLowerCase(true);
    } else {
      setValidateLowerCase(false);
    }

    if (minChar.test(values.password)) {
      setValidateMinChar(true);
    } else {
      setValidateMinChar(false);
    }

    if (number.test(values.password)) {
      setValidateNumber(true);
    } else {
      setValidateNumber(false);
    }
  }, [values]);

  return (
    <div className="flex-[0.6] bg-[url('/images/auth/login-pattern.png')]">
      <div className="p-[120px]">
        <img src="/images/logo-main.svg" className="w-[100px]" />
        <div className="mt-10 flex items-center justify-between border-b py-[15px]">
          <div>
            <div className="text-[26px] font-bold text-[#404040]">
              Lupa Kata Sandi
            </div>
            <div className="text-[16px] text-[#9E9E9E]">
              Atur kata sandi untuk keamanan akun anda.
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="mb-2">
            <div className="mb-2 text-xs font-semibold">
              Buat Kata Sandi<span className="text-red-400">*</span>
            </div>
            <div className="flex items-center justify-between rounded border bg-[#F7F7F7] pr-3 ">
              <input
                name="password"
                onChange={handleChange}
                value={values.password}
                type={typePassword.mainPassword ? 'text' : 'password'}
                placeholder="Masukan password anda"
                className="flex-1 rounded bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
              <Icon
                onClick={() =>
                  setTypePassword({
                    ...typePassword,
                    mainPassword: !typePassword.mainPassword,
                  })
                }
                icon={
                  typePassword.mainPassword
                    ? 'ant-design:eye-filled'
                    : 'ant-design:eye-invisible-filled'
                }
                style={{ fontSize: '24px', color: 'rgba(158, 158, 158, 1)' }}
                className="ml-3 cursor-pointer"
              />
            </div>
          </div>
          <div className="text-sm text-[#616161]">
            <div>Kata sandi harus berisi berikut ini:</div>
            <div className="mt-2 flex flex-col gap-2 font-light text-[#9E9E9E]">
              <div
                className={`${
                  validateLowerCase && 'font-medium text-primary-green'
                } flex items-center gap-1`}
              >
                <Icon icon="ci:dot-04-l" />
                <div>Karakter huruf kecil</div>
              </div>
              <div
                className={`flex items-center gap-1 ${
                  validateUpperCase && 'font-medium text-primary-green'
                }`}
              >
                <Icon icon="ci:dot-04-l" />
                <div>Karakter huruf besar</div>
              </div>
              <div
                className={`flex items-center gap-1 ${
                  validateNumber && 'font-medium text-primary-green'
                }`}
              >
                <Icon icon="ci:dot-04-l" />
                <div>Karakter huruf angka</div>
              </div>
              <div
                className={`flex items-center gap-1 ${
                  validateMinChar && 'font-medium text-primary-green'
                }`}
              >
                <Icon icon="ci:dot-04-l" />
                <div>Minimal 8 karakter</div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mb-2 text-xs font-semibold">
              Konfirmasi Kata Sandi<span className="text-red-400">*</span>
            </div>
            <div
              className={`${
                errors.confirmPassword &&
                touched.confirmPassword &&
                'border-[#CB3A31] bg-[#FFF4F2]'
              } flex items-center justify-between rounded border bg-[#F7F7F7] pr-3 `}
            >
              <input
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                onBlur={handleBlur}
                type={typePassword.confirmPassword ? 'text' : 'password'}
                placeholder="Masukan password anda"
                className={`${
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  'bg-[#FFF4F2]'
                } flex-1 rounded bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm`}
              />

              <Icon
                onClick={() =>
                  setTypePassword({
                    ...typePassword,
                    confirmPassword: !typePassword.confirmPassword,
                  })
                }
                icon={
                  typePassword.confirmPassword
                    ? 'ant-design:eye-filled'
                    : 'ant-design:eye-invisible-filled'
                }
                style={{ fontSize: '24px', color: 'rgba(158, 158, 158, 1)' }}
                className="ml-3 cursor-pointer"
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className="mt-2 text-xs text-[#CB3A31]">
                {errors.confirmPassword}
              </div>
            ) : null}
          </div>
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
                'Simpan'
              )}
            </button>
          </div>
          <div className="mt-10 w-full text-center text-sm text-[#9E9E9E]">
            Sudah memiliki akun?{' '}
            <span
              onClick={() => router.push('/auth/login')}
              className="cursor-pointer text-[#038575]"
            >
              Masuk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCreatePassword;
