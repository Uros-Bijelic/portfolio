'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import RHFInput from '@/components/RHFInputs/RHFInput';
import RHFTextarea from '@/components/RHFInputs/RHFTextarea';
import { Form } from '@/components/ui/form';
import { sendEmail } from '@/lib/actions/send-mail';
import {
  getInTouchFormSchema,
  type IGetInTouchFormSchema,
} from '@/lib/validation';

export default function ContactPage() {
  const form = useForm<IGetInTouchFormSchema>({
    resolver: zodResolver(getInTouchFormSchema),
    defaultValues: {
      name: '',
      email: '',
      description: '',
      contact: '',
    },
  });

  async function onSubmit(data: IGetInTouchFormSchema) {
    const response = await sendEmail(data);

    if (response?.status === 200) {
      toast.success(response.message);
    } else {
      toast.error(response?.message ?? 'Something went wrong.');
    }
  }

  return (
    <section className="min-h-screen bg-[#050506] text-white">
      <div className="bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_26%),linear-gradient(180deg,#0c1113_0%,#050506_100%)]">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-22 sm:pt-30 md:px-6 md:pb-20 md:pt-36">
          <div className="grid gap-5 sm:gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="fade-up rounded-4xl border border-white/10 bg-[#0b1012]/88 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/42">
                Contact
              </p>
              <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:mt-4 sm:text-4xl md:text-5xl">
                Let&apos;s build something thoughtful and production-ready.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/64 sm:mt-5 sm:leading-7 md:text-base">
                I&apos;m open to full stack engineering roles and strong
                frontend opportunities. If you have a product, team, or idea in
                motion, I&apos;d be happy to hear more about it.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
                <div className="rounded-3xl border border-white/8 bg-black/20 p-4 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
                      <IconMail size={22} stroke={1.8} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                        Email
                      </p>
                      <a
                        href="mailto:urosbijelic90@gmail.com"
                        className="mt-2 block break-all text-sm text-white transition hover:text-cyan-300 sm:text-base"
                      >
                        urosbijelic90@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/8 bg-black/20 p-4 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
                      <IconPhone size={22} stroke={1.8} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                        Phone
                      </p>
                      <p className="mt-2 text-base text-white">
                        +381 60 1438 180
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/8 bg-black/20 p-4 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
                      <IconMapPin size={22} stroke={1.8} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                        Location
                      </p>
                      <p className="mt-2 text-base text-white">
                        Belgrade, Serbia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/8 bg-black/20 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                    Socials
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="https://www.linkedin.com/in/uros-bijelic/"
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm chip"
                    >
                      <IconBrandLinkedin size={18} stroke={1.8} />
                      LinkedIn
                    </Link>
                    <Link
                      href="https://github.com/urke90"
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm chip"
                    >
                      <IconBrandGithub size={18} stroke={1.8} />
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up-delay-1 rounded-4xl border border-white/10 bg-[#0b1012]/88 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/42">
                Project Inquiry
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white sm:mt-4 sm:text-3xl md:text-4xl">
                Tell me what you&apos;re building.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62 sm:mt-4 sm:leading-7 md:text-base">
                Share the goals, timeline, and what kind of support you need. A
                short message is enough to get the conversation started.
              </p>

              <Form {...form}>
                <form
                  className="mt-5 flex flex-col gap-3 sm:mt-8 sm:gap-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <RHFInput name="name" label="Your name" />
                  <RHFInput name="email" label="Your email" />
                  <RHFTextarea
                    name="description"
                    label="Project goals and timeframe"
                  />
                  <RHFInput
                    name="contact"
                    label="Best way to reach you back"
                  />

                  <button
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-200 via-cyan-300 to-sky-300 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110 sm:w-auto"
                    type="submit"
                  >
                    Send message
                    <IconSend size={16} stroke={2} />
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
