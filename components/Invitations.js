import React from 'react';
import Head from 'next/head';

const Invitation = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <Head>
        <title>Undangan Digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1 className="text-2xl font-bold mb-4">Undangan Digital</h1>
      <p className="text-lg">Isi undangan digital Anda di sini...</p>
    </div>
  );
};

export default Invitation;
