import type { Metadata } from "next";
import { Icon } from "@/components/site/icon";
import { NavBar } from "@/components/site/nav-bar";
import { ResearchCallout, StoryCard } from "@/components/site/post-signup";

export const metadata: Metadata = {
  title: "You're in | DuetSpace Beta",
  description:
    "Thanks for joining the DuetSpace beta. Your experience will help shape what we build next.",
  // Reachable only after signing up; keep it out of search results.
  robots: { index: false, follow: false },
};

export default function BetaSuccessPage() {
  return (
    <>
      <NavBar />
      <main className="flex flex-1 flex-col items-center gap-10 px-6 pt-16 pb-20 md:px-12 lg:px-[120px]">
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          <div className="flex rounded-full border border-brand/30 bg-success-tint p-3">
            <Icon name="success-check" size={24} />
          </div>
          <h1 className="text-center text-[36px] font-extrabold text-ink sm:text-[48px]">
            You&apos;re in.
          </h1>
          <p className="text-center text-[18px] leading-[1.5] text-body">
            Thanks for joining the DuetSpace beta. Your experience will help
            shape what we build next.
          </p>
        </div>

        <StoryCard />
        <ResearchCallout />
      </main>
    </>
  );
}
