import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

const PROBLEMS = [
  {
    icon: "mail-open",
    title: "Agreements get lost",
    body: "Roles and ownership live across conversations, documents and memory. Nowhere shows everyone what was agreed.",
  },
  {
    icon: "users-2",
    title: "Contributions get messy",
    body: "It's hard to see who created what, what's approved and what's outstanding. Without that, contributions can't be managed fairly.",
  },
  {
    icon: "circle-x",
    title: "Partnerships change",
    body: "People leave. Responsibilities change. Most tools manage the tasks inside a partnership, never the partnership itself.",
  },
];

const STEPS = [
  {
    phase: "Invite",
    number: "01",
    title: "Invite your collaborator",
    body: "You already know who you're building with. Send them an invite to start a shared Venture.",
  },
  {
    phase: "Agree",
    number: "02",
    title: "Define roles and ownership",
    body: "Set roles, responsibilities and ownership up front, in one shared agreement.",
  },
  {
    phase: "Build",
    number: "03",
    title: "Create the product together",
    body: "Create content and contribute work inside the collaboration itself.",
  },
  {
    phase: "Launch",
    number: "04",
    title: "Publish wherever your audience is",
    body: "Sell or publish wherever your audience already is. No marketplace lock-in.",
  },
];

export function FrictionWorkflow() {
  return (
    <section className="bg-panel px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="The Problem"
          title="Co-creation is happening but nothing's holding it together"
          lede="Collaborations start with excitement. Agreements, contributions and decisions then scatter across messages, documents and tools."
          ledeWidth={934}
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-col items-start gap-6 rounded-[16px] border border-line bg-navy p-8 shadow-card transition-colors duration-200 hover:border-line-strong"
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
          lede="A clear path from the first invite to managing the venture as it grows."
          id="how-it-works"
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-5 rounded-[16px] border border-line bg-navy p-6 shadow-card transition-colors duration-200 hover:border-line-strong"
            >
              <div className="flex w-full items-center justify-between">
                <p className="eyebrow text-[10px] font-semibold text-brand">
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
          <p className="eyebrow text-[11px] text-brand">Coming soon</p>
          <p className="text-[13px] text-ink">
            Phase 5. MANAGE: Agree how the money is split up front, then track
            that split as contributions and ownership change.
          </p>
        </div>
      </div>
    </section>
  );
}
