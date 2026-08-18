import { SectionHeader } from "./section-header";

const ROWS = [
  {
    question: "What are we building?",
    without: "Scattered across messages and docs",
    answer: "AI for African Healthcare",
    with: "One clear product definition in your Venture",
  },
  {
    question: "Who is responsible?",
    without: "Assumed but never documented",
    answer: "Daniel — Research",
    with: "Roles and responsibilities visible to everyone",
  },
  {
    question: "What did they contribute?",
    without: "Invisible unless someone keeps track manually",
    answer: "Healthcare AI Research Framework",
    with: "Every contribution recorded and connected",
  },
  {
    question: "What did we agree?",
    without: "Lost in old emails or chat threads",
    answer: "40% / 40% / 20% ownership",
    with: "Shared agreement everyone can refer back to",
  },
  {
    question: "What needs approval?",
    without: "Nobody knows who should sign off",
    answer: "Module 3 — In review",
    with: "Clear review and approval process",
  },
  {
    question: "What if someone leaves?",
    without: "Panic, conflict, or starting from scratch",
    answer: "Follow the Venture agreement",
    with: "A framework for managing changes together",
  },
];

export function SourceOfTruth() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="Source of Truth"
          title="See the whole collaboration in one place"
          lede="At any point, everyone should be able to answer the same questions about the collaboration — who agreed to what, who contributed what, and what happens next."
        />

        <div className="w-full overflow-hidden rounded-[20px] border border-line shadow-table">
          <div className="flex gap-6 bg-brand p-5">
            <p className="min-w-0 flex-1 text-[14px] font-bold text-white">
              The question
            </p>
            <p className="min-w-0 flex-1 text-[14px] font-bold text-white">
              DuetSpace answers it
            </p>
          </div>

          {ROWS.map((row, index) => (
            <div
              key={row.question}
              className={`flex flex-col gap-6 p-5 sm:flex-row ${
                index % 2 === 0 ? "bg-white" : "bg-surface"
              } ${index === ROWS.length - 1 ? "" : "border-b border-line"}`}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="text-[14px] font-bold text-ink">{row.question}</p>
                <p className="text-[12px] text-body">{row.without}</p>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="text-[14px] font-bold text-accent">
                  {row.answer}
                </p>
                <p className="text-[12px] text-body">{row.with}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
