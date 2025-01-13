import React from "react";
import Logo from "@/assets/Logo.png"
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="w-full max-w-full min-h-screen bg-white p-4">
      <header className="w-full h-24">
        <nav className="w-full h-full flex justify-between items-center ml-6 mt-4">
          <Link
            to="/"
            className="group flex justify-center items-center gap-0 cursor-pointer animate-pulse"
          >
            <img
              id="logo"
              src={Logo}
              alt="Jamme"
              loading="lazy"
              className="w-20 h-auto"
            />
            <p
              id="logo__text"
              className="text-xl font-bold text-gray-800 select-none opacity-0 transition-all ease-in-out duration-500 invisible group-hover:opacity-100 group-hover:visible"
            >
              JAMME
            </p>
          </Link>
        </nav>
      </header>
      <div className="p-6  text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="mb-4 text-lg">Protecting your private information is our priority.</p>

          <section className="mb-6">
            <p className="text-justify">
              This Privacy Policy governs data collection and usage. For the purposes of this Privacy
              Policy, unless otherwise noted, all references to Voiaxis include Voiaxis's website(s)
              including without limitation, jamme.app and any mobile applications, including without
              limitation, Jamme (collectively the “Site”) and Voiaxis Ltd., its subsidiaries and
              affiliates (“Voiaxis”, “We” or “Us”).
            </p>
            <p className="text-justify">
              The terms “You” or “Your” refer to You, the user(s) of the Site, regardless of whether
              you are a sole natural person, using the Site jointly with another person or people, or
              an entity.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Collection of Personal Information</h2>
            <p className="text-justify">
              Voiaxis may collect personal information, including but not limited to your:
            </p>
            <ul className="list-disc ml-6 text-justify">
              <li>Full Name</li>
              <li>Contact information (e.g., email, address, phone number, profession)</li>
              <li>Information about your devices</li>
              <li>Information about your voice (view, hear, and delete your voice recordings)</li>
              <li>Credit Card/Payment Information</li>
              <li>
                Any other information you voluntarily provide, including information during
                registration.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Sharing Information</h2>
            <p className="text-justify">
              Voiaxis may share data with trusted partners to help perform statistical analysis, send
              you email or postal mail, provide customer support, or optimize your use of the Services.
              All third parties are prohibited from using your personal information except to provide
              these services to Voiaxis, and we will make reasonable efforts to ensure they maintain
              the confidentiality of your information.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Tracking User Behaviour</h2>
            <p className="text-justify">
              Voiaxis may keep track of the websites and pages our users visit within Voiaxis to
              deliver customized content and advertising based on user interests.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Use of Cookies</h2>
            <p className="text-justify">
              The Voiaxis website may use cookies to personalize your online experience. Cookies help
              us remember your preferences and improve your experience. You can disable cookies in
              your browser settings if desired.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Minors</h2>
            <p className="text-justify">
              Our services are not intended for anyone under 13, and we do not knowingly collect
              information from individuals under this age.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">GDPR Rights</h2>
            <p className="text-justify">
              Users in the European Economic Area, United Kingdom, and Switzerland have specific
              rights under GDPR. You may request data access, rectification, portability, or erasure
              in accordance with applicable laws.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Amendments</h2>
            <p className="text-justify">
              We reserve the right to change this Privacy Policy from time to time. Your continued use
              of the Site after changes constitutes agreement to the updated terms.
            </p>
          </section>

          <footer className="mt-6 text-center">
            <p className="text-lg">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a
                href="mailto:privacy@voiaxis.com"
                className="text-blue-500 hover:underline"
              >
                privacy@voiaxis.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </main>

  );
};

export default PrivacyPolicy;
