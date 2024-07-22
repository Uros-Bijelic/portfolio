import Image from 'next/image';
import Link from 'next/link';

import { Spotlight } from '@/components/ui/Spotlight';

// ----------------------------------------------------------------

interface IProjectPageProps {}

const ProjectPage = () => {
  return (
    <section className="flex-between w-full  gap-10">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex shrink-0 flex-col items-baseline self-start">
        <h3 className="h3-bold mb-4">My Work</h3>
        <p className="p-medium">Purposeful Digital Solutions</p>
      </div>
      <div className="flex flex-col gap-16">
        <Link href="/projects/github-note" className="flex flex-col gap-6">
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
              Git Note is professional note tracking app made for develpers to
              keep track of their career progress
            </p>
          </div>
        </Link>
        <Link href="/projects/dev-today" className="flex flex-col gap-6">
          <Image
            src="/assets/images/dev-today-mosaic.svg"
            width={900}
            height={380}
            alt="GitNote Mobile"
          />
          <div className="flex flex-col gap-4">
            <h4 className="h4-bold">
              Dev Today ~ Content creation hub for developers
            </h4>
            <p className="p4-medium">
              DevToday is a content creation platform for developers. It offers
              a feed of dev news, podcasts, and events, keeping you up-to-date
              with the latest tech. It has interactive features like podcast
              audio playback, meetup maps, and more. You can think of it as the
              go-to developer community hub.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProjectPage;
