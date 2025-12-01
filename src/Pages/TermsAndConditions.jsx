import React from 'react';
import useDocumentTitle from '../Hook/useDocumentTitle';

const TermsAndConditions = () => {
  useDocumentTitle ('Terms And Conditions - ToyPark');
  return (
    <div className="bg-linear-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-8 mt-24">
      <div className="max-w-4xl mx-auto text-start">
        <h2 className="text-4xl font-extrabold mb-6">Terms and Conditions</h2>
        <p className="text-lg mb-6">
          Please read these terms and conditions carefully before using our website or purchasing products from our store.
        </p>
        <h3 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h3>
        <p className="text-lg mb-4">
          By using this website, you agree to comply with these terms and conditions. If you do not agree to these terms, please refrain from using our services.
        </p>

        <h3 className="text-2xl font-semibold mt-6">2. Use of Products</h3>
        <p className="text-lg mb-4">
          All products are for personal use only. You agree not to resell or distribute the products without our permission.
        </p>

        <h3 className="text-2xl font-semibold mt-6">3. Privacy Policy</h3>
        <p className="text-lg mb-4">
          We are committed to protecting your privacy. Please refer to our Privacy Policy for more information.
        </p>

        <h3 className="text-2xl font-semibold mt-6">4. Limitation of Liability</h3>
        <p className="text-lg">
          We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our products or services.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
