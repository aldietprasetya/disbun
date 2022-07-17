import React from 'react';
import SetPasswordPage from 'src/components/pages/auth/setPassword';
import Head from 'next/head';
import ForgotPassword from 'src/components/pages/auth/forgotPassword';

const ForgotPasswordPage = () => {
  return (
    <div className="relative h-screen overflow-x-hidden  bg-gray-100 ">
      <Head>
        <title>Dinas Perkebunan | Forgot Password</title>
        <meta
          name="description"
          content="Dinas Pariwisata Provinsi Jawa Barat"
        />
        <link rel="icon" href="/favicondis.ico" />
      </Head>
      <div>
        <ForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
