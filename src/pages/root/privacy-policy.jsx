import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-lg text-gray-700 mb-6">
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your information.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect personal information that you provide to us, such as your name, email address, phone number, and payment information when you use our services. We also collect information automatically, such as your IP address, browser type, and usage data through cookies and similar technologies.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use your personal information to provide, improve, and maintain our services, to communicate with you, and to process transactions. We may also use your information to comply with legal obligations or to prevent fraud.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h2>
          <p className="text-gray-700 mb-4">
            We do not share your personal information with third parties except as necessary to provide our services, comply with legal requirements, or protect our rights. When we share your information, we ensure that it is safeguarded in accordance with applicable privacy laws.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Data Protection Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data, as well as the right to withdraw consent or object to certain data processing practices.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement security measures designed to protect your information from unauthorized access, disclosure, or destruction. However, please note that no transmission of data over the internet is 100% secure, and we cannot guarantee the absolute security of your data.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on this page and revising the "Last Updated" date at the top. We encourage you to review this policy periodically.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about this Privacy Policy or your personal information, please contact us at:
          </p>
          <ul className="list-none text-gray-700">
            <li>Email: support@yourcompany.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Your Street, Your City, Your State, 12345</li>
          </ul>
        </div>

        <p className="text-sm text-gray-500">
          Last Updated: September 16, 2024
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
