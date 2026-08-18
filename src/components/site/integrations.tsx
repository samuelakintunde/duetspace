import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

const INTEGRATIONS = [
  {
    icon: "package",
    title: "Shopify for commerce",
    body: "Build products together and publish to your storefront. We manage the collaboration; your platform handles selling.",
  },
  {
    icon: "integration-youtube",
    title: "YouTube for distribution",
    body: "Publish video from your collaboration, with every contributor's role tracked.",
  },
  {
    icon: "book-open",
    title: "Teachable for courses",
    body: "Turn your team's expertise into courses and manage the collaboration behind them.",
  },
  {
    icon: "integration-file-text",
    title: "Google Docs for writing",
    body: "Co-write content and briefs, with every contribution tied to its author.",
  },
  {
    icon: "mortarboard",
    title: "Research & academia",
    body: "Collaborate on papers, datasets and reviews, each connected to the people behind it.",
  },
  {
    icon: "integration-github",
    title: "Your productivity tools",
    body: "Keep using Notion, Trello or Asana. DuetSpace connects the collaboration, not the task list.",
  },
];

export function Integrations() {
  return (
    <section className="bg-panel px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="Work Your Way"
          title="Keep the tools you already trust"
          lede="Keep creating in the tools you already use. DuetSpace keeps the collaboration connected."
          id="integrations"
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.title}
              className="flex flex-col items-start gap-4 rounded-[16px] border border-line bg-navy p-6 shadow-card transition-colors duration-200 hover:border-line-strong"
            >
              <div className="flex items-center gap-3">
                <Icon name={integration.icon} size={20} />
                <h3 className="text-[15px] font-bold text-ink">
                  {integration.title}
                </h3>
              </div>
              <p className="w-full text-[13px] leading-[1.5] text-body">
                {integration.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[15px] font-semibold text-brand">
          Integrations will expand as DuetSpace develops.
        </p>
      </div>
    </section>
  );
}
