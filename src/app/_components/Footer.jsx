import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 Gouresh Madye. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
