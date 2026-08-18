import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

/** `inset` marks the brand logos, which sit as a 20px leaf inside a 24px box. */
const PLATFORMS = [
  { icon: "shopify", inset: true, name: "Shopify", kind: "Commerce" },
  { icon: "teachable", inset: true, name: "Teachable", kind: "E-Learning" },
  { icon: "udemy", inset: true, name: "Udemy", kind: "Courses" },
  { icon: "amazon", inset: true, name: "Amazon", kind: "Retail & Books" },
  { icon: "youtube-brand", inset: true, name: "YouTube", kind: "Video" },
  { icon: "spotify", inset: true, name: "Spotify", kind: "Podcasting" },
  {
    icon: "globe-platform",
    inset: false,
    name: "Your Website",
    kind: "Self-hosted",
  },
  {
    icon: "plus",
    inset: false,
    name: "Other Platforms",
    kind: "And more",
  },
];

export function Platforms() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <SectionHeader
          eyebrow="Freedom of Distribution"
          title="Launch wherever your audience is"
          lede="DuetSpace doesn't lock you into another marketplace. Build with your collaborators here, then sell or publish wherever your audience already is."
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-4 rounded-[16px] border border-line bg-surface p-5"
            >
              {platform.inset ? (
                <span className="relative size-6 shrink-0 overflow-hidden">
                  <Icon
                    name={platform.icon}
                    size={20}
                    className="absolute top-0.5 left-0.5"
                  />
                </span>
              ) : (
                <Icon name={platform.icon} size={24} className="shrink-0" />
              )}
              <div className="flex flex-col gap-0.5">
                <p className="text-[15px] font-bold whitespace-nowrap text-ink">
                  {platform.name}
                </p>
                <p className="text-[12px] whitespace-nowrap text-body">
                  {platform.kind}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
