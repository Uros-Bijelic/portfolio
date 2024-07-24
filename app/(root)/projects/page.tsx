import Image from 'next/image';
import Link from 'next/link';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3DCard';
import { Spotlight } from '@/components/ui/Spotlight';
import { TECH_STACK_ICONS } from '@/constants';

// ----------------------------------------------------------------

interface IProjectPageProps {}

const ProjectPage = () => {
  return (
    <section className="mx-auto flex size-full max-w-screen-lg flex-1 flex-col px-4 py-40 md:px-5">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="flex flex-col gap-16">
        <div className="flex shrink-0 flex-col items-baseline self-start">
          <h3 className="h3-bold mb-4">My Work</h3>
          <p className="p-medium">Purposeful Digital Solutions</p>
        </div>
        <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          <Link href="/projects/github-note">
            <CardContainer>
              <CardBody className="group/card border-white/[0.2] relative size-auto rounded-xl border p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
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
                  Git Note is professional note tracking app made for developers
                  to keep track of their career progress...
                </CardItem>
              </CardBody>
            </CardContainer>
          </Link>
          <Link href="/projects/dev-today">
            <CardContainer>
              <CardBody className="group/card border-white/[0.2] relative size-auto rounded-xl border p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
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
      </div>
    </section>
  );
};

export default ProjectPage;
