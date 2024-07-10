// import VortexHome from '@/components/VortexHome';
import { Vortex } from '@/components/ui/Vortex';

// ----------------------------------------------------------------

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    // <div className="flex h-full flex-col border">
    <div className="mx-auto h-screen  overflow-hidden rounded-md">
      <Vortex
        // backgroundColor="#101014"
        rangeY={800}
        particleCount={100}
        // baseHue={120}
        className="flex h-screen w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <div className="max-w-screen-lg border">
          <h2 className="text-center text-2xl font-bold text-white-100 md:text-6xl">
            Hi! I’m Uroš, a Next.js Developer based in Serbia.
          </h2>
          <p className="p-medium text-white mt-6  text-center text-sm md:text-2xl ">
            Web developer creating top-notch digital experiences with passion
            and precision
          </p>
        </div>
      </Vortex>
    </div>

    // </div>
  );
};

export default Home;
