import Image from 'next/image';
import Link from 'next/link';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3DCard';
import { Spotlight } from '@/components/ui/Spotlight';
import { WobbleCard } from '@/components/ui/WobbleCard';
import { TECH_STACK_ICONS } from '@/constants';

// ----------------------------------------------------------------

interface IProjectPageProps {}

const ProjectPage = () => {
  return (
    <section className="mx-auto flex size-full max-w-screen-lg flex-1 flex-col gap-10 px-4 py-40 md:px-5">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col gap-10">
        <h3 className="h3-bold mb-4">My Tech Stack</h3>
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
      <div className="flex flex-col gap-10">
        <div className="flex shrink-0 flex-col items-baseline self-start">
          <h3 className="h3-bold mb-4">My Work</h3>
          <p className="p-medium">Purposeful Digital Solutions</p>
        </div>
        <div className="flex flex-col gap-16">
          {/* <Link href="/projects/github-note" className=""> */}
          {/* <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] cursor-pointer bg-indigo-800"
              className="flex flex-col gap-6"
            >
              <Image
                src="/assets/images/gitnote-big.svg"
                width={680}
                height={380}
                alt="GitNote Desktop"
                className="shrink-0"
              />
              <div className="flex flex-col gap-4">
                <h4 className="h4-bold">
                  Git Note - Professional note tracking app
                </h4>
                <p className="p4-medium">
                  Git Note is professional note tracking app made for develpers
                  to keep track of their career progress
                </p>
              </div>
            </WobbleCard> */}
          <Link href="/projects/github-note">
            <CardContainer className="inter-var">
              <CardBody className="group/card bg-black border-white/[0.2] relative size-auto rounded-xl border p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]   ">
                <CardItem translateZ="100" className="my-4 w-full">
                  <Image
                    src="/assets/images/gitnote-big.svg"
                    width={900}
                    height={380}
                    alt="GitNote Desktop"
                    className="shrink-0"
                  />
                </CardItem>
                <CardItem translateZ="50" className="h4-bold mb-4">
                  Git Note - Professional note tracking app
                </CardItem>
                <CardItem as="p" translateZ="60" className="p4-medium">
                  Git Note is professional note tracking app made for develpers
                  to keep track of their career progress
                </CardItem>
                {/* <div className="mt-20 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/projects/github-note"
                  className="rounded-xl px-4 py-2 text-xs font-normal text-white-100"
                >
                  Try now →
                </CardItem>
              </div> */}
              </CardBody>
            </CardContainer>
          </Link>
          {/* </Link> */}
          <Link href="/projects/dev-today" className="flex flex-col gap-6">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] cursor-pointer bg-[#005f73]"
              className="flex flex-col gap-6"
            >
              <Image
                src="/assets/images/dev-today-mosaic.svg"
                width={900}
                height={380}
                alt="GitNote Mobile"
              />
              <div className="flex flex-col gap-4">
                <h4 className="h4-bold">
                  Dev Today - Content creation hub for developers
                </h4>
                <p className="p4-medium">
                  DevToday is a content creation platform for developers. It
                  offers a feed of dev news, podcasts, and events, keeping you
                  up-to-date with the latest tech. It has interactive features
                  like podcast audio playback, meetup maps, and more. You can
                  think of it as the go-to developer community hub.
                </p>
              </div>
            </WobbleCard>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
