import Logo from "@/assets/Logo.png"
import { Link } from "react-router-dom";

const CSAE = () => {
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
      <section className=" w-full max-w-[1024px] mx-auto mt-6 flex flex-col justify-center items-center gap-12">
        <article className=" w-full flex flex-col justify-center items-start gap-3">
          <h2 className="text-left w-full text-xl font-medium text-gray-900">
            CSAE Policy: Protecting Children on Our Platform
          </h2>
          <div className=" w-full flex flex-col justify-start items-start mt-4 gap-4">
            <h3 className="text-base font-semibold tracking-wide text-black">
              Policy Rationale
            </h3>
            <p className="text-base font-normal tracking-wide text-black">
              At Jamme, safeguarding children is our highest priority. We uphold
              a zero-tolerance policy towards Child Sexual Abuse and Exploitation
              (CSAE) and are deeply committed to providing a safe, inclusive, and
              secure digital environment. Our policies and practices are designed
              to detect, prevent, and address any form of CSAE content or behavior.
            </p>
            {/* Add remaining sections here with similar Tailwind CSS styles */}
          </div>
        </article>
        <article className=" w-full flex flex-col justify-center items-start gap-3">
          <h2 className="text-left w-full text-xl font-medium text-gray-900">
            Introducing New Age Verification Options on Jamme
          </h2>
          <div className=" w-full flex flex-col justify-start items-start mt-4 gap-4">
            <h3 className="text-base font-semibold tracking-wide text-black">
              Reimagining how we verify age
            </h3>
            <p className="text-base font-normal tracking-wide text-black">
              We’re developing innovative ways to help ensure the right
              experience for every age group on Jamme, starting with users in
              India. If someone tries to update their date of birth from under
              18 to 18 or older, we’ll guide them through a new age verification
              process. Users can now choose options: upload an ID, capture a
              video selfie, or ask mutual friends to vouch for their age.
            </p>
            {/* Add remaining sections here with similar Tailwind CSS styles */}
          </div>
        </article>
      </section>
    </main>
  );
};

export default CSAE;
