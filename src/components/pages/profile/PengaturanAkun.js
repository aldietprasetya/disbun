import React from 'react';
import LoginForm from '../auth/components/Login/LoginForm';
import { useFormik } from 'formik';
import axiosInstance from 'src/lib/axios';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';

function PengaturanAkun() {
  const { enqueueSnackbar } = useSnackbar();
  const formEditProfile = useFormik({
    initialValues: {
      username: '',
      email: '',
      namaPengelola: '',
      phoneNumber: '',
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.put('/profile/v1/me', {
          username: values.username,
          email: values.email,
          name: values.namaPengelola,
          phoneNumber: values.phoneNumber,
        });
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
              title="Berhasil Disimpan!"
            />
          ),
        });
      } catch (error) {
        enqueueSnackbar(error.message, {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          content: (key, message) => (
            <CustomComponent
              id={key}
              message={message}
              variant="error"
              title="Error!"
            />
          ),
        });
      }
    },
  });
  const { values, handleChange, handleBlur } = formEditProfile;
  return (
    <>
      <LoginForm
        titleForm={`Username`}
        titleName="username"
        type="text"
        star={true}
        values={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Masukan Username anda"
        className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
      />
      <LoginForm
        titleForm={`Surel`}
        titleName="surel"
        type="email"
        star={true}
        values={values.surel}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Masukan Email anda"
        className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
      />
      <LoginForm
        titleForm={`Nama Perusahaan`}
        titleName="perusahaan"
        type="text"
        star={true}
        values={values.perusahaan}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Masukan Nama Perusahaan anda"
        className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
      />
      {/* <LoginForm
        titleForm={`Kabupaten/Kota`}
        titleName="kota"
        type="select"
        star={true}
        values={values.kota}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Masukan Email anda"
        className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
      /> */}
      <LoginForm titleForm={`Kabupaten/Kota`} star={true} margin="mb-0" />
      <select
        name="kota"
        id="kota"
        className="w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base"
      >
        <option value="bandung">KOTA BANDUNG</option>
        <option value="bogor">KOTA BOGOR</option>
      </select>
      <LoginForm
        titleForm={`Nomor Telepon`}
        titleName="phoneNumber"
        type="text"
        star={true}
        values={values.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Masukan nomor telepon"
        iconEmail={false}
        phoneNumber={true}
        className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-base`}
      />
    </>
  );
}

export default PengaturanAkun;
