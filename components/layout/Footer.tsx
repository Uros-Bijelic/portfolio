export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2 md:px-6 md:pb-10">
      <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,17,0.88)_0%,rgba(7,8,10,0.94)_100%)] px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-8 md:py-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/42">
              Uros Bijelic
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/64 md:text-base">
              Full stack engineer building thoughtful digital products with a
              strong frontend foundation.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/70 md:items-end">
            <a
              href="mailto:urosbijelic90@gmail.com"
              className="transition hover:text-teal-200"
            >
              urosbijelic90@gmail.com
            </a>
            <p>Belgrade, Serbia</p>
            <p className="text-white/40">© 2026 Uros Bijelic</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
