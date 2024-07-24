import HomeLinks from '@/components/HomeLinks';
import { TextGenerateSubtitle } from '@/components/ui/TextGenerateSubtitle';
import { TextGenerateTitle } from '@/components/ui/TextGenerateTitle';
import { Vortex } from '@/components/ui/Vortex';

// ----------------------------------------------------------------

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div className="mx-auto flex h-full flex-col">
      <Vortex
        // backgroundColor="#101014"
        rangeY={400}
        particleCount={100}
        // baseHue={120}
        className="flex size-full min-h-screen flex-col items-center justify-center px-4"
      >
        <div className="max-w-screen-lg">
          <section className="flex-center h-screen flex-col ">
            <TextGenerateTitle words="Hi! I'm Uroš, a Next.js Developer based in Serbia." />
            <TextGenerateSubtitle
              words="Web developer creating top-notch digital experiences with passion
              and precision"
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
