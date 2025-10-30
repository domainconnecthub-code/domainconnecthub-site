import React from 'react';
import { Helmet } from 'react-helmet';

const PlaceholderPage = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title} - DomainConnectHub</title>
        <meta name="description" content={`Information about ${title} at DomainConnectHub.`} />
      </Helmet>
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">🚧 {title} Page</h1>
          <p className="mt-4 text-lg text-gray-600">
            This page is under construction. Check back soon!
          </p>
          <a href="/" className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-semibold">
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
};

export default PlaceholderPage;