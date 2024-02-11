import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="border-t border-gray-700 flex-grow"></div>
        <p className="text-sm">Developed by <span className="text-blue-500">Syed Saboor</span></p>
      </div>
    </footer>
  );
};

export default Footer;
