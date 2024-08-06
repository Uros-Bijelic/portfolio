import HomeLinks from '@/components/HomeLinks';
import Header from '@/components/layout/Header';
import HeaderMobile from '@/components/layout/HeaderMobile';
import { TextGenerateSubtitle } from '@/components/ui/TextGenerateSubtitle';
import { TextGenerateTitle } from '@/components/ui/TextGenerateTitle';
import { Vortex } from '@/components/ui/Vortex';

// ----------------------------------------------------------------

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#000000]">
      <Header isAlwaysVisible />
      <HeaderMobile isAlwaysVisible />
      <Vortex
        rangeY={400}
        particleCount={100}
        className="flex h-[95vh] flex-col items-center justify-center overflow-hidden px-4"
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
    </div>
  );
};

export default Home;
