import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

const USE_CASES = [
  {
    icon: "book-open",
    title: "Courses",
    body: "Co-create curricula, assign modules and manage teaching from outline to enrollment.",
  },
  {
    icon: "file-text",
    title: "Books & Publications",
    body: "Co-author across chapters and track contributions through to publication.",
  },
  {
    icon: "microscope",
    title: "Research",
    body: "Collaborate across institutions and disciplines on papers, datasets and programmes.",
  },
  {
    icon: "music",
    title: "Podcasts",
    body: "Coordinate co-hosts and manage episodes across seasons.",
  },
  {
    icon: "terminal",
    title: "Software & Digital Products",
    body: "Build together with clear ownership from first commit to launch.",
  },
  {
    icon: "package",
    title: "Services & Programmes",
    body: "Design and deliver consulting, training or workshops, and manage the partnership behind them.",
  },
];

export function UseCases() {
  return (
    <section className="bg-panel px-6 pt-16 pb-20 md:px-12 lg:px-[120px] lg:pt-[63px] lg:pb-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="What can you create?"
          title="Create together. In any format."
          lede="DuetSpace isn't tied to one type of product. If people bring different skills together to create something, DuetSpace manages the collaboration behind it."
          id="use-cases"
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="flex flex-col items-start gap-4 rounded-[16px] border border-line bg-navy p-8 shadow-card transition-colors duration-200 hover:border-line-strong"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-[20px] border border-line bg-tint">
                <Icon name={useCase.icon} size={20} />
              </div>
              <div className="flex w-full flex-col gap-2">
                <h3 className="text-[18px] leading-[normal] font-bold text-ink">
                  {useCase.title}
                </h3>
                <p className="text-[13px] leading-[1.5] text-body">
                  {useCase.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
