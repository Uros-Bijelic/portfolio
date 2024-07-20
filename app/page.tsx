import Image from 'next/image';
import Link from 'next/link';

import { Vortex } from '@/components/ui/Vortex';

// ----------------------------------------------------------------

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div className="mx-auto flex h-full flex-col ">
      <Vortex
        // backgroundColor="#101014"
        rangeY={400}
        particleCount={100}
        // baseHue={120}
        className="flex size-full min-h-screen flex-col items-center justify-center"
      >
        <div className="max-w-screen-lg">
          <section className="flex-center h-screen flex-col ">
            <h2 className="text-center text-2xl font-bold text-white-100 md:text-6xl">
              Hi! I’m Uroš, a Next.js Developer based in Serbia.
            </h2>
            <p className="p-medium text-white my-6  text-center text-sm md:text-2xl ">
              Web developer creating top-notch digital experiences with passion
              and precision
            </p>
            <div className="flex gap-5">
              <Link href="/projects" className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="bg-black text-white group relative rounded-[6px] bg-[#000000] px-8 py-2 uppercase transition hover:bg-transparent">
                  Projects
                </div>
              </Link>
              <Link href="/contact" className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="bg-black text-white group relative rounded-[6px] bg-[#000000] px-8 py-2 uppercase transition hover:bg-transparent">
                  Contact Me
                </div>
              </Link>
              <a
                href="/assets/resume.pdf"
                className="relative p-[3px]"
                download
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="bg-black text-white group relative flex gap-2 rounded-[6px] bg-[#000000] px-8 py-2 uppercase transition hover:bg-transparent">
                  <Image
                    width={20}
                    height={20}
                    alt="resume"
                    src="/assets/icons/download-icn.svg"
                  />
                  Resume
                </div>
              </a>
            </div>
          </section>
        </div>
      </Vortex>
    </div>
  );
};

export default Home;
