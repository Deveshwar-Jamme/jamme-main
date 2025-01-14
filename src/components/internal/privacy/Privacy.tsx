import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useRef, useState } from "react";
type PrivacyKey =
  | "overview"
  | "dataCollection"
  | "dataUse"
  | "dataSharing"
  | "dataSecurity"
  | "userRights"
  | "cookies"
  | "childrenPrivacy"
  | "dataRetention"
  | "internationalDataTransfers"
  | "securityMeasures"
  | "contactUs";

const privacyContent: Record<PrivacyKey, string> = {
  overview: `At Jamme Ads, owned and operated by Voiaxis Limited, we prioritize your privacy and the responsible use of your data. As part of our commitment to privacy, this policy outlines how we collect, use, store, and share your personal data, as well as the steps we take to ensure compliance with global data protection laws, including GDPR, CCPA, and COPPA.

This policy also addresses concerns regarding the ethical handling of user data, particularly that of minors, and our efforts to adhere to government regulations around privacy and security.

By using Jamme Ads, you agree to this Privacy Policy. If you do not agree, please discontinue your use of our services.`,
  dataCollection: `We collect several types of information to deliver a personalized, secure, and efficient experience on Jamme Ads, operated by Voiaxis Limited.

Personal Information: This includes:
- Contact Information: Name, email address, phone number, business details.
- Account Information: Username, password, and preferences.
- Payment Details: Collected and securely processed by third-party vendors for ad purchases.

Behavioral and Usage Data: We collect data on how you use the platform, such as:
- Device Information: IP addresses, device type, browser type, and OS information.
- Platform Interactions: Pages visited, interactions with ads, uploaded content, and analytics on usage.
- Location Data: Geolocation data based on your IP address or device to deliver relevant ads.

Audio Content: We collect and process the audio ads you create, including associated metadata such as target audience, language preferences, and campaign details.

Cookies and Tracking Technologies: We use cookies and similar tracking technologies to analyze behavior, personalize your experience, and improve our services. See our Cookies Policy for more information.`,
  dataUse: `We use the data we collect from you to:
- Deliver and Improve Services: Ensure smooth functioning of the Jamme Ads platform, including content delivery and translation.
- Payment Processing: Facilitate transactions using trusted third-party providers.
- Personalization and Analytics: Understand how users interact with the platform and provide a tailored experience.
- Marketing Communications: With your consent, we may send newsletters or promotional materials. You can opt out anytime.
- Legal Compliance and Safety: Comply with legal obligations and protect the platform from fraud or misuse.`,
  dataSharing: `Voiaxis Limited and Jamme Ads do not sell your personal information. However, we may share data in these situations:
- Service Providers: We work with third-party vendors (e.g., payment processors, cloud hosting providers) to deliver our services. These vendors are contractually obligated to protect your data.
- Business Transfers: If Voiaxis Limited is involved in a merger, acquisition, or asset sale, your data may be transferred in accordance with applicable laws.
- Legal Requirements: We may disclose your information to comply with legal requirements, governmental inquiries, or to protect our legal rights.
- Parental Controls: We comply with COPPA and other child protection laws, providing tools for parental oversight and data management for users under 16.`,
  dataSecurity: `We use industry-standard security measures to protect your personal data, including encryption, access controls, and secure servers. While we take every step to protect your data, no method of data transmission or storage is completely secure. We encourage you to safeguard your account with strong passwords.`,
  userRights: `You have several rights regarding your data under GDPR, CCPA, and other privacy laws:
- Right to Access: Request a copy of the personal data we hold about you.
- Right to Rectification: Correct inaccurate or incomplete data.
- Right to Deletion: Request the deletion of your personal data, subject to legal requirements.
- Right to Opt-Out (CCPA): California residents may opt out of the sale of their personal data, although Voiaxis Limited does not sell personal information.
- Right to Withdraw Consent: You can withdraw consent for data processing at any time.
- Right to Data Portability: Request your data in a machine-readable format to transfer to another provider.

To exercise any of these rights, contact us at [Insert Contact Information].`,
  cookies: `Jamme Ads, owned by Voiaxis Limited, uses cookies to enhance user experience and track site usage. You can control cookie settings through your browser. For more details, refer to our Cookies Policy [Insert Link].`,
  childrenPrivacy: `Jamme Ads adheres to child protection laws, including COPPA, to ensure the safety and privacy of minors. For children under 13, we do not knowingly collect personal data without parental consent. For children between 13-16, parental controls are available, and targeted advertising is restricted.`,
  dataRetention: `We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. This includes retaining audio ads and campaign data for the duration of the campaign, with longer retention periods for legal or compliance purposes.`,
  internationalDataTransfers: `Voiaxis Limited operates globally, and your data may be transferred internationally. We take appropriate safeguards for these transfers, such as:
- Standard Contractual Clauses (SCCs): For transfers outside the EEA to ensure compliance with European data protection laws.
- Other Safeguards: Similar measures are taken for transfers outside the U.S., ensuring that data remains secure and protected under applicable laws.`,
  securityMeasures: `We use industry-standard security measures to protect your personal data, including encryption, access controls, and secure servers. While we take every step to protect your data, no method of data transmission or storage is completely secure. We encourage you to safeguard your account with strong passwords.`,
  contactUs: `For any questions or concerns regarding this Privacy Policy, or to exercise your data rights, contact us at:

Data Protection Officer (DPO)

Email: info@jamme.app

Address: 25, The Junction, Slough, London, United Kingdom - SL2 5GE.`,
};

const PrivacyPolicy: React.FC = () => {
  const sectionRefs = useRef<Record<PrivacyKey, HTMLDivElement | null>>({
    overview: null,
    dataCollection: null,
    dataUse: null,
    dataSharing: null,
    dataSecurity: null,
    userRights: null,
    cookies: null,
    childrenPrivacy: null,
    dataRetention: null,
    internationalDataTransfers: null,
    securityMeasures: null,
    contactUs: null,
  });

  const [activeSection, setActiveSection] = useState<PrivacyKey>("overview");

  const handleSectionClick = (section: PrivacyKey) => {
    setActiveSection(section);
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col font-Inter">
      {/* Banner */}
      <div className="lg:mt-10">
        <div className="container mx-auto py-6 px-4 flex flex-col gap-4 md:items-center md:justify-center">
          <h1 className="scroll-m-20 text-6xl font-semibold tracking-wide lg:text-[80px]">
            Privacy Policy
          </h1>
          <span className="text-sm font-normal tracking-wider text-gray-600">
            Last Updated: January 14, 2025
          </span>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex  flex-col-reverse md:flex-row md:mt-10 gap-4 md:px-10 lg:px-40">
        <div className="flex-1 p-4">
          <p className="pb-8 text-2xl font-semibold tracking-wider leading-6">
            This Privacy Policy will help you better understand how we collect, use, and share your personal information.
          </p>
          {Object.keys(privacyContent).map((key) => {
            const privacyKey = key as PrivacyKey;
            return (
              <div
                key={privacyKey}
                ref={(el) => (sectionRefs.current[privacyKey] = el)}
                className="section-content mb-8"
              >
                <h2 className=" capitalize tracking-wider text-lg font-semibold leading-tight  text-left">
                  {privacyKey.replace(/([A-Z])/g, " $1").trim()}
                </h2>
                <p className="mt-4 text-gray-500 tracking-normal text-sm">{privacyContent[privacyKey]}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-72 lg:w-1/4 p-4">
          <CardTitle className="font-bold text-xl mb-2 ml-2 tracking-wider ">Table of contents</CardTitle>
          <Card className="text-sm p-2">
            {Object.keys(privacyContent).map((key) => {
              const privacyKey = key as PrivacyKey;
              return (
                <CardContent
                  key={privacyKey}
                  className="relative cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-2 rounded flex items-center"
                  onClick={() => handleSectionClick(privacyKey)}
                >
                  {/* Active indicator */}
                  {activeSection === privacyKey && (
                    <span
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-1 h-5 "
                      style={{
                        borderRadius: "4px 0 0 4px",
                      }}
                    />
                  )}
                  <span className="text-gray-900 font-semibold tracking-wider">
                    {privacyKey.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </CardContent>
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;