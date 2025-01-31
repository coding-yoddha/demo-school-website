import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing icons

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            Get in Touch with{" "}
            <span className="text-yellow-400">Bright Future School</span>
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-6 text-gray-200">
            Whether you have questions or need assistance, we're here to help.
            Reach out and let's start the conversation!
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-yellow-400 text-gray-800 py-3 px-8 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Address Card */}
            <div className="p-8 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-indigo-600 text-3xl mr-4" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  School Address
                </h2>
              </div>
              <p className="text-gray-600">
                Bright Future School, <br />
                123 Sunshine Road, <br />
                Cityville, State, 456789
              </p>
            </div>
            {/* Call Us Card */}
            <div className="p-8 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-indigo-600 text-3xl mr-4" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Call Us
                </h2>
              </div>
              <p className="text-gray-600">
                Phone:{" "}
                <a
                  href="tel:+911234567890"
                  className="text-indigo-500 hover:underline"
                >
                  +91 12345 67890
                </a>
              </p>
              <p className="text-gray-600">Fax: +91 98765 43210</p>
            </div>
            {/* Email Us Card */}
            <div className="p-8 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-indigo-600 text-3xl mr-4" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Email Us
                </h2>
              </div>
              <p className="text-gray-600">
                <a
                  href="mailto:info@brightfutureschool.com"
                  className="text-indigo-500 hover:underline"
                >
                  info@brightfutureschool.com
                </a>
              </p>
              <p className="text-gray-600">
                <a
                  href="mailto:admissions@brightfutureschool.com"
                  className="text-indigo-500 hover:underline"
                >
                  admissions@brightfutureschool.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Send Us a Message
          </h2>
          <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-600 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter the subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Find Us
          </h2>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509444!2d144.9559281153164!3d-37.817209979751604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0e540a7da3!2sBright%20Future%20School!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              className="w-full h-80 border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
