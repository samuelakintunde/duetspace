import { Icon } from "./icon";

/**
 * `flatIcon` cards export the tinted container and glyph as one 40px SVG;
 * the others export a 20px glyph that sits inside a tinted container here.
 */
const AUDIENCES = [
  {
    icon: "whofor-users",
    flatIcon: false,
    title: "Creators",
    body: "You have an audience, expertise or content and want to build something with another creator.",
    tags: ["Courses", "Books", "Podcasts", "Digital products"],
  },
  {
    icon: "whofor-award",
    flatIcon: false,
    title: "Experts",
    body: "You have knowledge or experience and want to collaborate with someone across disciplines or borders.",
    tags: ["Consulting", "Education", "Programmes", "Knowledge products"],
  },
  {
    icon: "whofor-researchers",
    flatIcon: true,
    title: "Researchers",
    body: "You want to collaborate across institutions, countries and disciplines.",
    tags: [
      "Research",
      "Publications",
      "Academic programmes",
      "Innovation projects",
    ],
  },
  {
    icon: "whofor-terminal",
    flatIcon: false,
    title: "Founders & Teams",
    body: "You want to build something together with clear responsibilities, ownership and accountability.",
    tags: ["Software", "Startups", "Digital products", "Services"],
  },
];

export function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="scroll-mt-12 bg-surface px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <p className="text-[13px] font-bold tracking-[0.015em] text-accent uppercase">
            Who is DuetSpace for?
          </p>
          <h2 className="max-w-[960px] text-[32px] leading-[1.2] font-extrabold text-ink lg:text-[44px]">
            If two people bring something valuable to the table, DuetSpace helps
            them build it together.
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col items-start gap-6 rounded-[16px] border border-line bg-white p-8 shadow-card"
            >
              {audience.flatIcon ? (
                <Icon name={audience.icon} size={40} />
              ) : (
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[24px] border border-line bg-tint">
                  <Icon name={audience.icon} size={20} />
                </div>
              )}

              <div className="flex w-full flex-col gap-3">
                <h3 className="text-[20px] leading-[normal] font-extrabold text-ink">
                  {audience.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-body">
                  {audience.body}
                </p>
              </div>

              <div className="flex w-full flex-wrap items-start gap-2">
                {audience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[8px] bg-tint px-3 py-1.5 text-[12px] font-semibold whitespace-nowrap text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
