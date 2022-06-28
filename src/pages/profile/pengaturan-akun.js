import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Page from '../../components/Page';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import axiosInstance from 'src/lib/axios';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import { navListSidebarEditProfile } from 'src/components/sidebar/GroupLink';
import PengaturanAkun from 'src/components/pages/profile/PengaturanAkun';

const PengaturanAkunPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useSelector((state) => state.auth);
  const formEditProfile = useFormik({
    initialValues: {
      email: '' || user?.email,
      namaPengelola: '' || user?.name,
      phoneNumber: '' || user?.phoneNumber,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.put('/profile/v1/me', {
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
  const { values, handleChange, handleSubmit } = formEditProfile;

  return (
    <Page sidebar navListSidebar={navListSidebarEditProfile} sidebarWithIcon>
      <div className="w-full">
        <BreadCrumbs
          links={[
            { path: '/profile', title: 'Edit Profile' },
            { path: '/profile/pengaturan-akun', title: 'Pengaturan akun' },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Pengaturan Akun</div>
        <div className="mt-10 flex gap-5">
          <img
            src="/icon/default-profile-picture.svg"
            className="h-20 object-cover"
          />
          <div className="w-64">
            <div className="text-[#9E9E9E]">
              Gunakan format PNG atau JPG dengan maksimal ukuran 2MB
            </div>
            <button className="mt-3 rounded border border-primary-green px-4 py-1 text-xs font-medium text-primary-green">
              Unggah
            </button>
          </div>
        </div>
        <div className="mt-10 w-[50%]">
          <PengaturanAkun />
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSubmit}
              className="w-32 rounded-md bg-gradient-to-b from-[#119F90] to-[#048577] p-2 text-sm text-white"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default PengaturanAkunPage;
