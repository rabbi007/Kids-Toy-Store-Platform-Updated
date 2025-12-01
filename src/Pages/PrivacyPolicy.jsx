import React from 'react';
import useDocumentTitle from '../Hook/useDocumentTitle';

const PrivacyPolicy = () => {
  useDocumentTitle ('Privacy Policy - ToyPark');
  return (
    <div className="bg-linear-to-r from-teal-400 via-green-500 to-yellow-600 text-white p-8 mt-24">
      <div className="max-w-4xl mx-auto text-start">
        <h2 className="text-4xl font-extrabold mb-6">Privacy Policy</h2>
        <p className="text-lg mb-6">
          At our Toy Store, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and protect your data.
        </p>

        <h3 className="text-2xl font-semibold mt-6">1. Information We Collect</h3>
        <p className="text-lg mb-4">
          We collect personal information, such as name, email, and payment details when you register, place an order, or interact with our website.
        </p>

        <h3 className="text-2xl font-semibold mt-6">2. Use of Information</h3>
        <p className="text-lg mb-4">
          Your information is used to process orders, provide customer support, and enhance your shopping experience.
        </p>

        <h3 className="text-2xl font-semibold mt-6">3. Sharing of Information</h3>
        <p className="text-lg mb-4">
          We do not share your personal information with third parties, except as necessary to fulfill your orders or comply with legal obligations.
        </p>

        <h3 className="text-2xl font-semibold mt-6">4. Security</h3>
        <p className="text-lg mb-4">
          We employ encryption protocols to protect your personal and payment information from unauthorized access.
        </p>

        <h3 className="text-2xl font-semibold mt-6">5. Changes to Privacy Policy</h3>
        <p className="text-lg">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
