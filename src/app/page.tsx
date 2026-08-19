import { Blueprint } from "@/components/site/blueprint";
import { CrossBorder } from "@/components/site/cross-border";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { FrictionWorkflow } from "@/components/site/friction-workflow";
import { Hero } from "@/components/site/hero";
import { Integrations } from "@/components/site/integrations";
import { NavBar } from "@/components/site/nav-bar";
import { Platforms } from "@/components/site/platforms";
import { Reveal } from "@/components/site/reveal";
import { SourceOfTruth } from "@/components/site/source-of-truth";
import { UseCases } from "@/components/site/use-cases";
import { WhoItsFor } from "@/components/site/who-its-for";

const SECTIONS = [
  Hero,
  FrictionWorkflow,
  Blueprint,
  Platforms,
  Integrations,
  SourceOfTruth,
  UseCases,
  WhoItsFor,
  CrossBorder,
  FinalCta,
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        {SECTIONS.map((Section) => (
          <Reveal key={Section.name}>
            <Section />
          </Reveal>
        ))}
      </main>
      <Footer />
    </>
  );
}
