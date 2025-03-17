import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex-center min-h-screen">
      <div className="flex flex-col gap-5">
        <h2 className="h4-bold">404 Page Not Found</h2>
        <div>
          <Link
            href="/"
            className="relative min-w-[128px] text-center transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="group relative rounded-[6px] bg-[#000000] bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 uppercase text-[#000000] transition hover:bg-transparent max-md:text-sm md:px-8">
              Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
