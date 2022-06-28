import React, { useState } from 'react';
import LoginPage from '../../components/pages/auth/login';
import Head from 'next/head';

const login = () => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Dinas Perkebunan | Signin</title>
        <meta
          name="description"
          content="Dinas Pariwisata Provinsi Jawa Barat"
        />
        <link rel="icon" href="/favicondis.ico" />
      </Head>
      <div>
        <LoginPage />
      </div>
    </div>
  );
};

export default login;
