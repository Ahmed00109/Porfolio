import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_sq9qh2u',       // ✅ Replace with your actual EmailJS service ID
        'template_by5j0xi',      // ✅ Replace with your actual EmailJS template ID
        form.current,
        'IFYadAXwLkJ6h7Pl-'      // ✅ Replace with your actual EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setPopupMessage('✅ Message sent successfully!');
          setShowPopup(true);
          form.current.reset();
        },
        () => {
          setLoading(false);
          setPopupMessage('❌ Failed to send message. Please try again.');
          setShowPopup(true);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down">
        Contact Me
      </h2>
      <p className="text-center max-w-xl text-gray-300 mb-8 animate-fade-in">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md space-y-6 animate-fade-in-up"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-5 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-5 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-5 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition duration-300 text-white px-6 py-3 rounded-lg shadow-lg"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          ) : (
            'Send Message 🚀'
          )}
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white text-black px-8 py-6 rounded-xl shadow-xl text-center max-w-sm w-full animate-fade-in">
            <p className="text-lg font-semibold">{popupMessage}</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
