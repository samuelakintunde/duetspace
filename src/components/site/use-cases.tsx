import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

const USE_CASES = [
  {
    icon: "book-open",
    title: "Courses",
    body: "Co-create curricula, assign modules and manage the teaching collaboration from outline to enrollment.",
  },
  {
    icon: "file-text",
    title: "Books & Publications",
    body: "Co-author across chapters, track contributions and manage the publication process together.",
  },
  {
    icon: "microscope",
    title: "Research",
    body: "Collaborate across institutions, countries and disciplines on papers, datasets and academic programmes.",
  },
  {
    icon: "music",
    title: "Podcasts",
    body: "Coordinate co-hosts, manage episodes and keep the creative collaboration connected across seasons.",
  },
  {
    icon: "terminal",
    title: "Software & Digital Products",
    body: "Build together with clear responsibilities, ownership and accountability from first commit to launch.",
  },
  {
    icon: "package",
    title: "Services & Programmes",
    body: "Design and deliver consulting, training or workshops with collaborators — and manage the partnership behind the service.",
  },
];

export function UseCases() {
  return (
    <section className="bg-surface px-6 pt-16 pb-20 md:px-12 lg:px-[120px] lg:pt-[63px] lg:pb-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="What can you create?"
          title="Create together. In any format."
          lede="DuetSpace isn't tied to one type of product. If people are bringing different skills, expertise or resources together to create something, DuetSpace can help manage the collaboration behind it."
          id="use-cases"
        />

        <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="flex flex-col items-start gap-4 rounded-[16px] border border-line bg-white p-8 shadow-card"
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
