import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { appConfig } from 'src/config';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';
import LoginLogo from '../../components/Login/LoginLogo';
import LoginForm from '../../components/Login/LoginForm';
import LoginTitle from '../../components/Login/LoginTitle';
import InputFileButton from 'src/components/customInput/InputFileButton';

const SectionDaftar = ({ margin = 'lg:mt-32 tall:mt-8' }) => {
  const route = useRouter();
  const [isError, setIsError] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [inputFromCookies, setInputFromCookies] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const input = Cookies.get('input-register');
    if (input) {
      const inputObj = JSON.parse(input);
      setInputFromCookies(inputObj);
    }
  }, [route.asPath]);

  const registrationSchema = Yup.object().shape({
    name: Yup.string().required('Nama Perusahaan wajib diisi'),
    manajer: Yup.string().required('Nama Administratur/Manajer wajib diisi'),
    emailManajer: Yup.string()
      .email('Format email salah')
      .required('Email Administratur/Manajer wajib diisi'),
    phoneNumber: Yup.string()
      .required('Nomor telepon wajib diisi')
      .min(8)
      .matches(/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/, {
        message: 'Format nomor telepon salah',
      }),
  });

  const formRegistration = useFormik({
    initialValues: {
      name: '' || inputFromCookies?.name,
      manajer: '' || inputFromCookies?.manajer,
      emailManajer: '' || inputFromCookies?.emailManajer,
      phoneNumber: '' || inputFromCookies?.phoneNumber,
    },
    validationSchema: registrationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await axios.post(
          `http://localhost:5000/users`,
          {
            name: values.name,
            manajer: values.manajer,
            emailManajer: values.emailManajer,
            phoneNumber: values.phoneNumber,
          },
          {
            auth: {
              username: appConfig.usernameBasicAuth,
              password: appConfig.passwordBasicAuth,
            },
          },
        );
        if (res.data.status == 'success') {
          Cookies.set('token-temp', res.data.data.token, {
            expires: 30 / 1440,
          });
          Cookies.set(
            'input-register',
            JSON.stringify({
              name: values.name,
              manajer: values.manajer,
              emailManajer: values.emailManajer,
              phoneNumber: values.phoneNumber,
            }),
            {
              expires: 30 / 1440,
            },
          );
          route.push('/auth/register/set-password');
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
                title="Gagal Masuk!"
              />
            ),
          });
        }
      }
    },
  });

  const { values, handleChange, errors, handleSubmit, touched, handleBlur } =
    formRegistration;

  return (
    <div className={`mx-32 flex-[0.5] lg:mx-32 ${margin}`}>
      <div className="">
        <LoginLogo />
        <LoginTitle
          title="Daftar"
          subTitle="Daftarkan akun perusahaan perkebunan Anda."
        />
        <LoginForm
          titleForm="Nama Perusahaan Perkebunan"
          titleName="name"
          type="text"
          values={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Masukan nama perusahaan perkebunan"
          star={true}
          className={`${
            errors.name &&
            touched.name &&
            'border-primary-red-1 bg-primary-red-2'
          } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
        />
        {errors.name && touched.name && (
          <div className="text-xs text-primary-red-1">{errors.name}</div>
        )}
        <LoginForm
          titleForm={`Nama Lengkap Administratur/Manajer`}
          titleName="manajer"
          type="text"
          values={values.manajer}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Masukan Nama Lengkap Administratur/Manajer"
          star={true}
          className={`${
            errors.manajer &&
            touched.manajer &&
            'border-primary-red-1 bg-primary-red-2'
          } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
        />
        {errors.manajer && touched.manajer && (
          <div className="text-xs text-primary-red-1">{errors.manajer}</div>
        )}
        <LoginForm
          titleForm={`Nama Email Administratur/Manajer`}
          titleName="emailManajer"
          type="email"
          values={values.emailManajer}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Masukan Email Administratur/Manager"
          star={true}
          className={`${
            errors.emailManajer &&
            touched.emailManajer &&
            'border-primary-red-1 bg-primary-red-2'
          } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
        />
        {errors.emailManajer && touched.emailManajer && (
          <div className="text-xs text-primary-red-1">
            {errors.emailManajer}
          </div>
        )}
        <LoginForm
          titleForm={`Nomor Telepon Administratur/Manajer`}
          titleName="phoneNumber"
          type="text"
          values={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Masukan nomor telepon"
          star={true}
          iconEmail={false}
          phoneNumber={true}
          className={`${
            errors.phoneNumber &&
            touched.phoneNumber &&
            'border-primary-red-1 bg-primary-red-2'
          } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <div className="text-xs text-primary-red-1">{errors.phoneNumber}</div>
        )}
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Foto KTP Administratur/Manajer
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png .pdf
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Surat Permohonan Pengajuan Akun
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png .pdf
              </div>
            </div>
            <div className="flex">
              <div className="mx-7 flex items-center">
                <img src="/icon/info-circle.svg" className="mx-1 w-2" />
                <a className="mx-1 cursor-pointer text-xs text-primary-green" href='suratLampionPerkeb.pdf' target="_blank" rel="noopener noreferrer">
                  Lihat Format
                </a>
              </div>
              <InputFileButton />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            disabled={
              !values.emailManajer ||
              !values.manajer ||
              !values.name ||
              !values.phoneNumber ||
              errors.emailManajer ||
              errors.manajer ||
              errors.name ||
              errors.phoneNumber
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
              'Selanjutnya'
            )}
          </button>
        </div>
        <div className="mt-10 w-full text-center text-sm text-[#9E9E9E]">
          Sudah memiliki akun?{' '}
          <span
            onClick={() => route.push('/auth/login')}
            className="cursor-pointer text-[#038575]"
          >
            Masuk
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionDaftar;
