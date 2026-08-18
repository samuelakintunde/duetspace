import { Icon } from "./icon";
import { SectionHeader } from "./section-header";

const COLLABORATIONS = [
  {
    route: "Nigeria ↔ USA",
    pairing: "Professor ↔ Professor",
    outcome: "Research → Publication",
  },
  {
    route: "USA ↔ UK",
    pairing: "Creator ↔ Creator",
    outcome: "Course → Digital product",
  },
];

export function CrossBorder() {
  return (
    <section className="bg-navy px-6 py-20 md:px-12 lg:px-[120px] lg:py-[100px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-16">
        <SectionHeader
          eyebrow="Global collaboration"
          title="Collaborate without the border"
          lede="Your collaborator doesn't need to be in the same city, country or institution."
          ledeWidth={820}
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {COLLABORATIONS.map((collab) => (
            <div
              key={collab.route}
              className="flex flex-col items-start gap-6 rounded-[16px] border border-line bg-panel p-8 shadow-card transition-colors duration-200 hover:border-line-strong"
            >
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 rounded-full border border-line bg-navy px-3.5 py-2">
                  <Icon name="cb-globe" size={16} />
                  <p className="text-[14px] font-bold whitespace-nowrap text-ink">
                    {collab.route}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="-mr-2 flex size-7 items-center justify-center rounded-full border border-line bg-navy">
                    <Icon name="cb-map-pin" size={16} />
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-full border border-line bg-navy">
                    <Icon name="cb-map-pin" size={16} />
                  </span>
                </div>
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-[6px] bg-tint">
                    <Icon name="cb-users" size={14} />
                  </span>
                  <p className="text-[15px] font-semibold text-ink">
                    {collab.pairing}
                  </p>
                </div>

                {/* The designed connector is a 24px hairline rule in the line colour. */}
                <div className="flex w-full items-start pl-[11px]">
                  <div className="h-6 w-px bg-line" />
                </div>

                <div className="flex w-full items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-[6px] bg-tint">
                    <Icon name="cb-arrow-right" size={14} />
                  </span>
                  <p className="text-[15px] font-semibold text-brand">
                    {collab.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-note">
          Future payment infrastructure will make global collaboration even
          easier.
        </p>
      </div>
    </section>
  );
}
