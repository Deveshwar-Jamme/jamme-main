import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useRef, useState } from "react";
type CSAEKey =
  | "csaePolicy"
  | "ageVerification"
  | "enforcementAndSafety"
  | "educationalResources"
  | "contextualConsiderations"
  | "visionForSafePlatform";

const csaeContent: Record<CSAEKey, string> = {
  csaePolicy: `Jamme enforces a zero-tolerance policy towards Child Sexual Abuse and Exploitation (CSAE). Our primary goal is to ensure a safe, inclusive, and secure digital environment. We are committed to detecting, preventing, and addressing CSAE content or behavior promptly. Our practices include:
  - Reporting CSAE content to the National Center for Missing and Exploited Children (NCMEC).
  - Removing content involving children, even if shared with good intentions.
  - Collaborating with external experts, including UNICEF and the WeProtect Global Alliance, to review and enhance our policies regularly.`,

  ageVerification: `We are introducing new age verification options to enhance safety on the platform, starting with users in India. These methods ensure secure and accurate age verification while respecting user privacy:
  - Video Selfie: Users upload a video selfie, processed by Yoti to estimate age.
  - Social Vouching: Users can have mutual followers vouch for their age.
  - Upload Your ID: Users can upload a government-issued ID, securely stored and deleted within 30 days.`,

  enforcementAndSafety: `We have implemented strict measures to ensure safety on the platform:
  - AI-Based Moderation: Detects inappropriate content in real-time.
  - Manual Review: Moderators verify flagged content and ensure compliance.
  - Proactive Monitoring: AI monitors interactions to detect violations.
  - Reporting Mechanisms: Users can report offensive content through the “Report” button, and a 24/7 moderation helpline is available for assistance.
  - Cooperation with Authorities: Jamme collaborates with law enforcement and child protection organizations, complying with UNICEF, WeProtect Global Alliance, and IWF guidelines.
  - Preventive Measures: Features like AI-based age verification, content filters, and parental guidance help maintain a secure environment for minors.`,

  educationalResources: `We provide resources and awareness campaigns to educate users about online safety:
  - Safety Guidelines: Tutorials and tips to help users identify and report harmful interactions.
  - Awareness Campaigns: Ongoing initiatives aimed at raising awareness about CSAE prevention.
  - Partner Resources: Jamme collaborates with trusted organizations, providing valuable resources and support.`,

  contextualConsiderations: `While we strictly prohibit CSAE-related content, we recognize that there are sensitive contexts to consider:
  - Imagery of Child Nudity: Certain non-sexual depictions, like those in humanitarian reporting, are carefully evaluated and may be allowed under strict guidelines and sensitive labeling.
  - Private Minors' Content: Content identifying private minors may be removed if it poses safety concerns or is flagged by trusted authorities, parents, or legal guardians.`,

  visionForSafePlatform: `Jamme is dedicated to creating a safe digital space for everyone, with a strong focus on protecting minors from harm, exploitation, and abuse. Through cutting-edge technology, external collaborations, and community engagement, we strive to provide an environment that fosters safety, trust, and respect for all users.`,
};

const PrivacyPolicy: React.FC = () => {
  const sectionRefs = useRef<Record<CSAEKey, HTMLDivElement | null>>({
    csaePolicy: null,
    ageVerification: null,
    enforcementAndSafety: null,
    educationalResources: null,
    contextualConsiderations: null,
    visionForSafePlatform: null,
  });

  const [activeSection, setActiveSection] = useState<CSAEKey>("csaePolicy");

  const handleSectionClick = (section: CSAEKey) => {
    setActiveSection(section);
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col font-Inter">
      {/* Banner */}
      <div className="lg:mt-10">
        <div className="container mx-auto py-6 px-4 flex flex-col gap-4 md:items-center md:justify-center">
          <h1 className="scroll-m-20 text-6xl font-semibold tracking-wide lg:text-[80px]">
            CSAE Policy
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
            Our CSAE policy ensures a safe digital environment by prioritizing child safety and leveraging technology.
          </p>
          {Object.keys(csaeContent).map((key) => {
            const csaeKey = key as CSAEKey;
            return (
              <div
                key={csaeKey}
                ref={(el) => (sectionRefs.current[csaeKey] = el)}
                className="section-content mb-8"
              >
                <h2 className=" capitalize tracking-wider text-lg font-semibold leading-tight  text-left">
                  {csaeKey.replace(/([A-Z])/g, " $1").trim()}
                </h2>
                <p className="mt-4 text-gray-500 tracking-normal text-sm">{csaeContent[csaeKey]}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-72 lg:w-1/4 p-4">
          <CardTitle className="font-bold text-xl mb-2 ml-2 tracking-wider ">Table of contents</CardTitle>
          <Card className="text-sm p-2">
            {Object.keys(csaeContent).map((key) => {
              const csaeKey = key as CSAEKey;
              return (
                <CardContent
                  key={csaeKey}
                  className="relative cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-2 rounded flex items-center"
                  onClick={() => handleSectionClick(csaeKey)}
                >
                  {/* Active indicator */}
                  {activeSection === csaeKey && (
                    <span
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-1 h-5 "
                      style={{
                        borderRadius: "4px 0 0 4px",
                      }}
                    />
                  )}
                  <span className="text-gray-900 font-semibold tracking-wider">
                    {csaeKey.replace(/([A-Z])/g, " $1").trim()}
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