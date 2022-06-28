import React from 'react';
import SetPasswordPage from '../../../components/pages/auth/setPassword';
import Head from 'next/head';

const SetPassword = () => {
  return (
    <div className="relative h-screen overflow-x-hidden  bg-gray-100 ">
      <Head>
        <title>Dinas Perkebunan | Signup</title>
        <meta
          name="description"
          content="Dinas Pariwisata Provinsi Jawa Barat"
        />
        <link rel="icon" href="/favicondis.ico" />
      </Head>
      <div>
        <SetPasswordPage />
      </div>
    </div>
  );
};

export default SetPassword;
