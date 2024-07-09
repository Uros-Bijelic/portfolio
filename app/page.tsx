import Image from 'next/image';

import NavBar from '@/components/NavBar';

// ----------------------------------------------------------------

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div className="flex h-full flex-col border">
      <div className="mx-auto mt-12">
        <NavBar />
      </div>
      <section className="h-full">
        <Image
          src="/assets/images/home-bg.svg"
          alt="cover"
          fill
          // width="928"
          // height="900"
          className="object-cover"
        />
        <h1 className="mt-40">
          Hi! I&apos;m Uroš , a Next.js Developer based in Serbia.
        </h1>
      </section>
    </div>
  );
};

export default Home;
