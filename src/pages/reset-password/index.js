import React, { useState } from 'react';
import ResetPage from 'src/components/pages/auth/resetPassword';
import Head from 'next/head';

const reset = () => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Dinas Perkebunan | Reset Password</title>
        <meta
          name="description"
          content="Dinas Pariwisata Provinsi Jawa Barat"
        />
        <link rel="icon" href="/favicondis.ico" />
      </Head>
      <div>
        <ResetPage />
      </div>
    </div>
  );
};

export default reset;
