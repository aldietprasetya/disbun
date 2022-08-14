import React, {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import { appConfig } from 'src/config';
import { useSnackbar } from 'notistack';
import InputFileButton from 'src/components/customInput/InputFileButton';
import axios from 'axios';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import LoginForm from '../auth/components/Login/LoginForm';
import InputForm2 from '../admin/infografis/InputForm';


function PengaturanAkun() {
  const [city, setCity] = useState('');
  const [profile, setProfile] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const formEditProfile = useFormik({
    initialValues: {
      username: '',
      email: '',
      perusahaan: '',
      phoneNumber: '',
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        var formData = new FormData();
        formData.append('username', values.username);
        formData.append('email', values.email);
        formData.append('companyname', values.perusahaan);
        formData.append('phonenumber', values.phoneNumber);
        formData.append('city', city.value);
        formData.append('profile', profile);

        const res = await axios.put(
          `${appConfig.baseUrl}/users/profile`,formData
        );
        if (res.data.status == 'success') {
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
        }
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
  const { values, handleChange, handleBlur, handleSubmit } = formEditProfile;
  return (
    <>
      <div className="mt-10 flex items-center gap-5">
        {
          profile ? (
            <img
              key={profile[0].path}
              src={profile[0].preview}
              className="h-[96px] w-[96px] rounded-full	 object-cover"
            />
          ) : (
            <img
              src="/icon/default-profile-picture.svg"
              className="h-20 object-cover"
            />
          )
        }
        <div className="w-64">
          <div className="text-[#9E9E9E] mb-3">
            Gunakan format PNG atau JPG dengan maksimal ukuran 2MB
          </div>
          <InputFileButton
            handleImage={(img) => {
              setProfile(img);
            }}
          />
        </div>
      </div>

      <LoginForm
        titleForm={`Username`}
        titleName="username"
        type="text"
        star={true}
        values={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Masukan Username anda"
        className={`w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
      />
      <LoginForm
        titleForm={`Surel`}
        titleName="email"
        type="email"
        star={true}
        values={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Masukan Email anda"
        className={`w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
        className={`w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
      />

      <div className='mt-6'>
        <InputForm2
          titleForm="Kabupaten/Kota"
          titleName="Kabupaten/Kota"
          onChange={(e) => setCity(e)}
          type="text"
          values={city}
          placeholder="Pilih Kabupaten/Kota"
          selectArea={true}
          selectType='kota'
        />
      </div>

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
        className={`w-full rounded bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
      />

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSubmit}
          type='button'
          disabled={
            !values.username ||
            !values.email ||
            !values.perusahaan ||
            !values.phoneNumber ||
            !profile
          }
          className="w-32 rounded-md bg-gradient-to-b from-[#119F90] to-[#048577] p-2 text-sm text-white"
        >
          Simpan
        </button>
      </div>
    </>
  );
}

export default PengaturanAkun;
