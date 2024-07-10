'use client';

// ----------------------------------------------------------------

interface IButtonProps {
  children: React.ReactNode;
}

export const ButtonBorderGradient: React.FC<IButtonProps> = () => {
  return (
    <button className="relative p-[3px]">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div className="bg-black text-white  group relative  rounded-[6px] px-8 py-2 transition duration-200 hover:bg-transparent">
        Lit up borders
      </div>
    </button>
  );
};

export const ButtonMagicBorder: React.FC<IButtonProps> = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="text-white inline-flex size-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium backdrop-blur-3xl">
        Border Magic
      </span>
    </button>
  );
};
