import { BackgroundBeams } from '@/components/ui/BacgroundBeams';

interface IContactPageProps {}

const ContactPage = () => {
  return (
    <div className="relative -top-10 flex h-screen w-full flex-col items-center justify-center rounded-md  bg-black-800 antialiased">
      {/* <div className="mx-auto max-w-2xl ">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center font-sans text-lg  font-bold text-transparent md:text-7xl">
          Join the waitlist
        </h1>
        <p></p>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="relative z-10 mt-4 w-full rounded-lg  border border-neutral-800 bg-neutral-950 placeholder:text-neutral-700  focus:ring-2 focus:ring-teal-500"
        />
      </div> */}
      <BackgroundBeams />
    </div>
  );
};

export default ContactPage;
