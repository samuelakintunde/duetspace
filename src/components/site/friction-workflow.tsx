import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

const PROBLEMS = [
  {
    icon: "mail-open",
    title: "Agreements get lost",
    body: "Roles, ownership and responsibilities often live across conversations, documents and memory. There's no single place where everyone can see what was agreed.",
  },
  {
    icon: "users-2",
    title: "Contributions get messy",
    body: "It's difficult to keep track of who created what, what's been approved and what's still outstanding. Without visibility, it's hard to manage contributions fairly.",
  },
  {
    icon: "circle-x",
    title: "Partnerships change",
    body: "People leave. Responsibilities change. Products evolve. But most tools don't help collaborators manage the partnership itself — only the tasks inside it.",
  },
];

const STEPS = [
  {
    phase: "Discover",
    number: "01",
    title: "Find the right collaboration",
    body: "Find the right collaboration opportunity and connect with people who bring complementary skills and expertise.",
  },
  {
    phase: "Agree",
    number: "02",
    title: "Define roles and ownership",
    body: "Define roles, responsibilities and ownership upfront. Create a shared agreement everyone can refer back to.",
  },
  {
    phase: "Build",
    number: "03",
    title: "Create the product together",
    body: "Create content, contribute work and manage responsibilities — all within the context of the collaboration.",
  },
  {
    phase: "Launch",
    number: "04",
    title: "Publish wherever your audience is",
    body: "Sell or publish wherever your audience already is. DuetSpace doesn't lock you into another marketplace.",
  },
];

export function FrictionWorkflow() {
  return (
    <section className="bg-surface px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="The Problem"
          title="Co-creation is happening but nothing's holding it together"
          lede="Collaborations often start with excitement, but agreements, responsibilities, contributions and decisions quickly become scattered across messages, documents and different tools."
          ledeWidth={934}
        />

        <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-col items-start gap-6 rounded-[16px] border border-line bg-white p-8 shadow-card"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[24px] border border-line bg-tint">
                <Icon name={problem.icon} size={24} />
              </div>
              <div className="flex w-full flex-col gap-3">
                <h3 className="text-[20px] leading-[normal] font-extrabold text-ink">
                  {problem.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-body">
                  {problem.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-line" />

        <SectionHeader
          eyebrow="The Journey"
          title="From idea to launch, together"
          lede="DuetSpace guides every collaboration through a clear path — from finding the right partner to managing the venture as it grows."
          id="how-it-works"
        />

        <div className="grid w-full grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-5 rounded-[16px] border border-line bg-surface p-6 shadow-card"
            >
              <div className="flex w-full items-center justify-between">
                <p className="text-[11px] font-bold tracking-[0.01em] text-accent uppercase">
                  {step.phase}
                </p>
                <p className="text-[18px] font-extrabold text-faint">
                  {step.number}
                </p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h3 className="text-[18px] leading-[normal] font-extrabold text-ink">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-body">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 rounded-[12px] border border-line bg-tint px-6 py-3.5 text-center font-bold sm:flex-row sm:text-left">
          <p className="text-[12px] text-accent uppercase">Coming soon</p>
          <p className="text-[13px] text-ink">
            Phase 5. MANAGE: Continue managing the Venture as things change —
            roles, responsibilities, and the product itself.
          </p>
        </div>
      </div>
    </section>
  );
}
