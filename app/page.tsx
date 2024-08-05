import HomeLinks from '@/components/HomeLinks';
import { TextGenerateSubtitle } from '@/components/ui/TextGenerateSubtitle';
import { TextGenerateTitle } from '@/components/ui/TextGenerateTitle';
import { Vortex } from '@/components/ui/Vortex';

// ----------------------------------------------------------------

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div className="mx-auto flex h-full max-h-screen flex-col bg-[#000000]">
      {/* <Header isAlwaysVisible /> */}
      {/* <HeaderMobile isAlwaysVisible /> */}
      <Vortex
        // backgroundColor="#101014"
        rangeY={400}
        particleCount={100}
        className="flex size-full max-h-screen min-h-screen flex-1 flex-col items-center justify-center border border-red-500 px-4"
      >
        <div className="max-w-screen-lg">
          <section className="flex-center h-screen flex-col ">
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
