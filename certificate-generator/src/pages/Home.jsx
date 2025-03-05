import React from 'react';
import CertificateGenerator from '../components/CertificateGenerator';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-lg">
        <h1 className="text-2xl font-bold">Certificate Generator</h1>
      </nav>
      <div className="container mx-auto p-4">
        <CertificateGenerator />
      </div>
    </div>
  );
};

export default Home;