export function FinalCta() {
  return (
    <section
      id="join-the-beta"
      className="scroll-mt-12 bg-brand px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <h2 className="max-w-[800px] text-[32px] leading-[normal] font-extrabold text-white lg:text-[44px]">
            Help us build DuetSpace
          </h2>
          <p className="max-w-[600px] text-[16px] text-brand-soft lg:text-[18px]">
            We&apos;re building DuetSpace with our first community of creators,
            experts, researchers and teams. Join the beta, try the product and
            tell us what collaboration looks like for you.
          </p>
          <p className="text-[13px] text-note-inverse">
            DuetSpace is currently in early development. We&apos;re inviting a
            small group of early users to help shape the product.
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-start">
          {/* TODO: point at the real signup form / contact destination. */}
          <a
            href="#"
            className="flex h-[56px] items-center justify-center rounded-[12px] bg-white px-9 text-[16px] font-bold whitespace-nowrap text-brand shadow-cta"
          >
            Join the Beta
          </a>
          <a
            href="#"
            className="flex h-[56px] items-center justify-center rounded-[12px] border border-white/25 bg-white/12 px-9 text-[16px] font-bold whitespace-nowrap text-white"
          >
            Share your collaboration story
          </a>
        </div>
      </div>
    </section>
  );
}
