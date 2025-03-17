// ----------------------------------------------------------------

import Image from 'next/image';
import Link from 'next/link';

import HomeLinks from '@/components/HomeLinks';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HeaderMobile from '@/components/layout/HeaderMobile';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3DCard';
import { TextGenerateSubtitle } from '@/components/ui/TextGenerateSubtitle';
import { TextGenerateTitle } from '@/components/ui/TextGenerateTitle';
import { Vortex } from '@/components/ui/Vortex';
import { TECH_STACK_ICONS } from '@/constants';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000000] ">
      <Header isAlwaysVisible />
      <HeaderMobile isAlwaysVisible />
      <Vortex
        rangeY={400}
        particleCount={100}
        className="flex h-screen flex-col items-center justify-center overflow-hidden px-5"
      >
        <div className="max-w-screen-lg">
          <section className="flex-center flex-col">
            <TextGenerateTitle
              words="Hi! I'm Uroš, a Next.js Developer based in Serbia."
              duration={0.2}
            />
            <TextGenerateSubtitle
              words="Web developer creating top-notch digital experiences with passion
              and precision"
              duration={0.2}
            />
            <div className="my-4" />
            <HomeLinks />
          </section>
        </div>
      </Vortex>
      <section id="projects" className="page-wrapper !px-5 !pt-0">
        <div className="flex flex-col gap-16">
          <div className="flex shrink-0 flex-col items-baseline self-start">
            <h3 className="h3-bold mb-4">My Work</h3>
            <p className="p-medium">Purposeful Digital Solutions</p>
          </div>
          <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
            <Link href="/projects/gitnote">
              <CardContainer>
                <CardBody className="group/card relative size-auto rounded-xl border-2 border-black-400 p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
                  <CardItem translateZ="100" className="my-4 w-full">
                    <Image
                      src="/assets/images/git-note-desk-mob.svg"
                      width={300}
                      height={200}
                      alt="GitNote Desktop"
                      className="h-60 w-full rounded-xl object-contain group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <CardItem translateZ="50" className="h4-bold mb-4">
                    Git Note - Professional note tracking app
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="p4-medium line-clamp-2"
                  >
                    Git Note is professional note tracking app made for
                    developers to keep track of their career progress...
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Link>
            <Link href="/projects/dev-today">
              <CardContainer>
                <CardBody className="group/card relative size-auto rounded-xl border-2 border-black-400 p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
                  <CardItem translateZ="100" className="my-4 w-full">
                    <Image
                      src="/assets/images/dev-today-desk-mob.svg"
                      width={300}
                      height={300}
                      alt="Dev Today"
                      className="h-60 w-full rounded-xl object-contain group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <CardItem translateZ="50" className="h4-bold mb-4">
                    Dev Today - Content creation hub for developers
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="p4-medium line-clamp-2"
                  >
                    DevToday is a content creation platform for developers. It
                    offers a feed of dev news, podcasts, and events, keeping you
                    up-to-date with the latest tech.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Link>
          </div>
          <div className="flex flex-col gap-10">
            <h3 className="h3-bold mb-4 max-md:text-center">My Tech Stack</h3>
            <ul className="flex flex-wrap justify-center gap-12">
              {TECH_STACK_ICONS.map((icon) => (
                <li
                  key={icon}
                  className="flex-center size-[93px] rounded-full bg-[#242938]"
                >
                  <Image
                    src={`/assets/icons/tech-stack/${icon}.svg`}
                    width={46}
                    height={46}
                    alt={icon}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
