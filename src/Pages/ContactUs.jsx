import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; // Import toastify
import useDocumentTitle from '../Hook/useDocumentTitle';

const ContactUs = () => {
  useDocumentTitle('Contact Us - ToyPark');
    // auto scroll to top of this page
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Show success toast
      toast.success('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });  // Clear the form
    } else {
      // Show error toast
      toast.error('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-linear-to-r from-teal-400 via-green-500 to-yellow-600 text-white p-8 mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">Contact Us</h2>
        <p className="text-lg text-white mb-6">
          We'd love to hear from you! If you have any questions or feedback, <br/> please fill out the form below and we will get back to you shortly.
        </p>

        {/* Success Message, using toast */}
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-4 mb-4 rounded-lg">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2 w-full max-w-md p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-2 w-full max-w-md p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-2 w-full max-w-md p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full max-w-md bg-blue-500 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
