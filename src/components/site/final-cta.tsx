import { BetaSignupButton } from "./beta-signup";

export function FinalCta() {
  return (
    <section
      id="join-the-beta"
      className="scroll-mt-12 bg-panel px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <h2 className="max-w-[800px] text-[32px] leading-[normal] font-extrabold text-ink lg:text-[44px]">
            Help us build DuetSpace
          </h2>
          <p className="max-w-[600px] text-[16px] text-body lg:text-[18px]">
            Join the beta, try the product and tell us what collaboration looks
            like for you.
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-start">
          <BetaSignupButton className="flex h-[56px] items-center justify-center rounded-[12px] bg-brand px-9 text-[16px] font-bold whitespace-nowrap text-navy shadow-brand-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-lg active:translate-y-0">
            Join the Beta
          </BetaSignupButton>
          {/* Same form — its free-text field is the collaboration story. */}
          <BetaSignupButton className="flex h-[56px] items-center justify-center rounded-[12px] border border-line-strong bg-white/5 px-9 text-[16px] font-bold whitespace-nowrap text-ink transition-colors duration-200 hover:bg-white/10">
            Share your collaboration story
          </BetaSignupButton>
        </div>
      </div>
    </section>
  );
}
