import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <main className="p-4 text-center">
    <h1 className="text-4xl mb-4">404</h1>
    <p className="mb-4">Page not found.</p>
    <Link to="/" className="text-[#3FC1FF] underline">Go home</Link>
  </main>
);

export default NotFound;
