import React from 'react';
import RegisterPage from 'src/components/pages/auth/register';
import Head from 'next/head';

const register = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100 ">
      <Head>
        <title>Dinas Perkebunan | Signup</title>
        <meta
          name="description"
          content="Dinas Pariwisata Provinsi Jawa Barat"
        />
        <link rel="icon" href="/favicondis.ico" />
      </Head>
      <RegisterPage />
    </div>
  );
};

export default register;
