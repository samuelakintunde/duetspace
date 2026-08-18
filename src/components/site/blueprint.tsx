import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

const BRANCHES = [
  {
    icon: "users",
    label: "People",
    body: "Roles, responsibilities and contribution records",
  },
  {
    icon: "file",
    label: "Agreements",
    body: "Ownership, responsibilities and shared decisions",
  },
  {
    icon: "archive",
    label: "Product",
    body: "Content, files, structure and progress",
  },
];

const CHANNELS = [
  { icon: "globe-channel", label: "Your Website" },
  { icon: "video", label: "Teachable" },
  { icon: "youtube-channel", label: "Shopify & More" },
];

export function Blueprint() {
  return (
    <section className="bg-surface-strong px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="The Solution"
          title="The operating system for collaborative ventures"
          lede="One shared place to manage the people, agreements, contributions, decisions, products and changes behind what you're building together."
          id="product"
        />

        <div className="flex w-full max-w-[1000px] flex-col items-center gap-10 rounded-[24px] border border-line bg-white p-8 shadow-panel lg:p-14">
          <div className="flex flex-col items-center gap-2 rounded-[18px] bg-brand px-11 py-6 shadow-brand-md">
            <Icon name="logo-mark-hub" size={32} />
            <p className="text-[22px] font-extrabold whitespace-nowrap text-white">
              DuetSpace Venture
            </p>
            <p className="text-[13px] font-semibold whitespace-nowrap text-brand-soft">
              Collaboration Operating System
            </p>
          </div>

          <Icon name="connector-40" width={2} height={40} />

          <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-between">
            {BRANCHES.map((branch) => (
              <div
                key={branch.label}
                className="flex w-full max-w-[240px] flex-1 flex-col items-center gap-3 rounded-[16px] border border-line bg-surface p-5 shadow-card"
              >
                <div className="flex size-8 items-center justify-center rounded-[20px]">
                  <Icon name={branch.icon} size={20} />
                </div>
                <p className="text-[15px] font-bold whitespace-nowrap text-ink uppercase">
                  {branch.label}
                </p>
                <p className="w-full text-center text-[12px] text-body">
                  {branch.body}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-1">
            <Icon name="connector-32" width={2} height={32} />
            <p className="text-[11px] font-bold tracking-[1px] whitespace-nowrap text-accent">
              SELL OR PUBLISH ANYWHERE
            </p>
            <Icon name="chevron-down" size={12} />
          </div>

          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
            {CHANNELS.map((channel) => (
              <div
                key={channel.label}
                className="flex w-full max-w-[220px] flex-1 items-center gap-3 rounded-[12px] border border-line bg-tint p-3.5"
              >
                <Icon name={channel.icon} size={20} />
                <p className="text-[14px] font-bold whitespace-nowrap text-brand">
                  {channel.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
