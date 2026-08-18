import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

const INTEGRATIONS = [
  {
    icon: "integration-mark",
    title: "Shopify for commerce",
    body: "Build products together and publish to a storefront. DuetSpace manages the collaboration; your platform handles the selling.",
    note: "Designed to work alongside Shopify and other commerce tools.",
  },
  {
    icon: "integration-youtube",
    title: "YouTube for distribution",
    body: "Publish video content from your collaboration and keep track of each contributor's role and involvement.",
    note: "Designed to work alongside YouTube and other video platforms.",
  },
  {
    icon: "integration-mark",
    title: "Teachable for courses",
    body: "Turn your team's expertise into online courses and manage the collaboration behind the curriculum.",
    note: "Designed to work alongside Teachable and other LMS platforms.",
  },
  {
    icon: "integration-file-text",
    title: "Google Docs for writing",
    body: "Co-write content, briefs and documentation with every contribution tied back to the person who created it.",
    note: "Designed to work alongside Google Workspace.",
  },
  {
    icon: "mortarboard",
    title: "Research & academia",
    body: "Collaborate on research together — every paper, dataset and review is connected to the people who contributed it.",
    note: "Designed to work alongside your existing research tools.",
  },
  {
    icon: "integration-github",
    title: "Your productivity tools",
    body: "Keep using Notion, Trello, Asana or whatever your team prefers. DuetSpace connects the collaboration, not the task list.",
    note: "Integrations will expand as DuetSpace develops.",
  },
];

export function Integrations() {
  return (
    <section className="bg-surface px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="Work Your Way"
          title="Keep the tools you already trust"
          lede="DuetSpace doesn't ask you to replace everything. Keep creating in the tools you already use while DuetSpace keeps the collaboration connected."
          id="integrations"
        />

        <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.title}
              className="flex flex-col items-start gap-4 rounded-[16px] border border-line bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <Icon name={integration.icon} size={20} />
                <h3 className="text-[15px] font-bold text-ink">
                  {integration.title}
                </h3>
              </div>
              <div className="w-full text-[13px] leading-[1.5] text-body">
                <p>{integration.body}</p>
                <p className="mt-[19.5px]">{integration.note}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[15px] font-semibold text-accent">
          Integrations will expand as DuetSpace develops.
        </p>
      </div>
    </section>
  );
}
