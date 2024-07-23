'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import RHFInput from '@/components/RHFInputs/RHFInput';
import RHFTextarea from '@/components/RHFInputs/RHFTextarea';
import { BackgroundBeams } from '@/components/ui/BacgroundBeams';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { getInTouchFormSchema } from '@/lib/validation';

// https://mydevpa.ge/blog/how-to-send-emails-using-next-14-resend-and-react-email

// ----------------------------------------------------------------

interface IContactPageProps {}

const ContactPage = () => {
  const form = useForm({
    resolver: zodResolver(getInTouchFormSchema),
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center rounded-md bg-black-800 px-4 antialiased md:px-5">
      <div className="md:flex-between z-20 mx-auto flex w-full max-w-2xl flex-col overflow-auto rounded-2xl  bg-[#151E2C] p-4 max-md:mt-20 max-md:max-h-[80vh] md:flex-row md:gap-9">
        <Form {...form}>
          <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col gap-4">
              <RHFInput name="name" label="What is your name?" />
              <RHFInput name="email" label="What is your email?" />
              <RHFTextarea
                name="description"
                label="Write something about your project goals and timeframe"
              />
            </div>
            <button
              className="group/btn from-black text-white relative block h-10 w-full rounded-md bg-gradient-to-br to-neutral-600 font-medium shadow-[0px_1px_0px_0px_#5EAFFF40_inset,0px_-1px_0px_0px_#5EAFFF40_inset] hover:border hover:border-blue-500"
              type="submit"
            >
              Sign up &rarr;
            </button>

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 md:hidden" />
          </form>
        </Form>
        <div className="flex-2 flex flex-col gap-9 self-start">
          <div className="flex flex-col gap-3.5">
            <p>My Socials</p>
            <div className="flex gap-9">
              <Link
                href="https://www.linkedin.com/in/uros-bijelic/"
                target="_blank"
              >
                <Image
                  src="/assets/icons/linkedin.svg"
                  width={24}
                  height={24}
                  alt="Linkedin"
                />
              </Link>
              <Link href="https://github.com/urke90" target="_blank">
                <Image
                  src="/assets/icons/github.svg"
                  width={24}
                  height={24}
                  alt="Github"
                />
              </Link>
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
