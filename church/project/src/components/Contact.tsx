import React from 'react';
import { MapPin, Phone, Mail, Clock, CreditCard } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to help and answer any questions you might have</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-church-green/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-church-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Church Address</h3>
                <p className="text-gray-600">
                  Hallelujah Assembly Of God<br />
                  #51, Thennanjalai Road<br />
                  Pondicherry – 605013<br />
                  INDIA
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-4">
              <div className="bg-church-green/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-church-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">Office: +91 413 2240097</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-church-green/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-church-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:contact@hagchurch.in" className="text-gray-600 hover:text-church-green">
                  contact@hagchurch.in
                </a>
              </div>
            </div>

            {/* Prayer Line */}
            <div className="flex items-start space-x-4">
              <div className="bg-church-gold/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-church-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">24 Hour Prayer Line</h3>
                <p className="text-gray-600">
                  +91 413 2244496<br />
                  +91 9677 100 110
                </p>
              </div>
            </div>

            {/* Bank Details */}
            <div className="flex items-start space-x-4">
              <div className="bg-church-gold/10 p-3 rounded-lg">
                <CreditCard className="w-6 h-6 text-church-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Bank Details</h3>
                <div className="text-gray-600 space-y-2">
                  <p><span className="font-medium">Account Name:</span> Hallelujah AG Church</p>
                  <p><span className="font-medium">Bank Name:</span> Indian Overseas Bank</p>
                  <p><span className="font-medium">Account Number:</span> 161901000005501</p>
                  <p><span className="font-medium">Branch Name:</span> Orleanpet Branch, Pondicherry</p>
                  <p><span className="font-medium">IFSC Code:</span> IOBA0001619</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-church-green focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-church-green focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-church-green focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-church-green focus:border-transparent"
                ></textarea>
              </div>

              <Button className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-sm h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.1556339547584!2d79.8366!3d11.9340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53636a24873e45%3A0x7f0c25ffa0cfb2a0!2sHallelujah%20Assembly%20of%20God%20Church!5e0!3m2!1sen!2sin!4v1647850721234!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;