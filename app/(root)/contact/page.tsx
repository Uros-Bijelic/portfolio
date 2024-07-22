'use client';

import { Label } from '@radix-ui/react-label';
import Image from 'next/image';

import { BackgroundBeams } from '@/components/ui/BacgroundBeams';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface IContactPageProps {}

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="flex size-full h-screen flex-1 flex-col items-center justify-center rounded-md bg-black-800 px-4 antialiased md:px-5">
      <div className="md:flex-between z-20 mx-auto flex w-full max-w-xl flex-col  rounded-none bg-[#151E2C] p-4 md:flex-row md:gap-9 md:rounded-2xl">
        <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" type="text" className="bg-[#192333]" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
          </div>
          <button
            className="group/btn from-black text-white relative block h-10 w-full rounded-md bg-gradient-to-br to-neutral-600 font-medium shadow-[0px_1px_0px_0px_#5EAFFF40_inset,0px_-1px_0px_0px_#5EAFFF40_inset]  hover:border hover:border-[#5EAFFF]"
            type="submit"
          >
            Sign up &rarr;
          </button>

          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 md:hidden" />
        </form>
        <div className="flex-2 flex flex-col gap-9">
          <div className="flex flex-col gap-3.5">
            <p>My Socials</p>
            <div className="flex gap-9">
              <Image
                src="/assets/icons/linkedin.svg"
                width={24}
                height={24}
                alt="Linkedin"
              />
              <Image
                src="/assets/icons/github.svg"
                width={24}
                height={24}
                alt="Github"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <p>Phone Number</p>
            <div className="flex gap-3.5">
              <Image
                src="/assets/icons/phone.svg"
                width={24}
                height={24}
                alt="Phone number"
              />
              +381 60 1430-180
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <p>Email Address</p>
            <div className="flex gap-3.5">
              <Image
                src="/assets/icons/email.svg"
                width={24}
                height={24}
                alt="Email"
              />
              urosbijelic90@gmail.com
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
      {/* <div className="mt-40">
        <Footer />
      </div> */}
    </section>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

export default ContactPage;
