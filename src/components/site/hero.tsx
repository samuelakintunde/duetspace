import { Fragment } from "react";
import { Icon } from "./icon";

const PIPELINE_NODES = [
  { title: "Venture", caption: "Agreements & roles" },
  { title: "Product", caption: "Build & review" },
];

export function Hero() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <div className="flex w-full flex-col items-center gap-7">
          <a
            href="#product"
            className="flex items-center gap-2.5 rounded-full border border-line bg-tint px-3.5 py-2"
          >
            <span className="text-[12px] font-bold tracking-[0.01em] text-accent uppercase">
              The Collaboration Operating System
            </span>
            <Icon name="arrow-right-badge" size={12} />
          </a>

          <h1 className="max-w-[960px] text-center text-[40px] leading-[1.05] font-extrabold text-ink sm:text-[56px] lg:text-[72px]">
            Build together. Launch anywhere.
          </h1>

          <p className="max-w-[820px] text-center text-[18px] leading-[1.6] text-body lg:text-[20px]">
            DuetSpace helps creators, experts and teams turn collaborations into
            products — without losing track of who agreed to what, who
            contributed what, or what happens when things change.
          </p>

          <p className="text-center text-[14px] text-note">
            Help us shape DuetSpace before launch.
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-start">
          <a
            href="#join-the-beta"
            className="flex h-[56px] items-center justify-center rounded-[12px] border border-transparent bg-brand px-9 text-[16px] font-bold whitespace-nowrap text-white shadow-brand-lg"
          >
            Join the Beta
          </a>
          <a
            href="#how-it-works"
            className="flex h-[56px] items-center justify-center gap-2.5 rounded-[12px] border border-brand bg-white px-9 text-[16px] font-bold whitespace-nowrap text-brand"
          >
            See how it works
            <Icon name="arrow-right-btn" size={14} />
          </a>
        </div>

        <div className="flex w-full max-w-[1000px] flex-col items-center gap-6 rounded-[20px] border border-line bg-surface p-6 shadow-card lg:p-10">
          <p className="text-[12px] font-bold tracking-[0.012em] text-faint uppercase">
            Collaboration Lifecycle
          </p>

          <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
            <div className="flex w-[160px] flex-col items-center gap-1.5 rounded-[14px] bg-brand p-4 text-center shadow-brand-sm">
              <p className="w-full text-[14px] leading-[1.4] font-extrabold text-white">
                DuetSpace
              </p>
              <p className="w-full text-[12px] leading-[1.4] font-semibold text-white/80">
                Collaboration OS
              </p>
            </div>

            <Icon
              name="arrow-pipeline-1"
              width={32}
              height={16}
              className="hidden lg:block"
            />

            {PIPELINE_NODES.map((node, index) => (
              <Fragment key={node.title}>
                <div className="flex w-[160px] flex-col items-center gap-1.5 rounded-[14px] border border-line bg-white p-4 text-center">
                  <p className="w-full text-[14px] leading-[1.4] font-extrabold text-ink">
                    {node.title}
                  </p>
                  <p className="w-full text-[12px] leading-[1.4] font-semibold text-muted">
                    {node.caption}
                  </p>
                </div>
                <Icon
                  name={index === 0 ? "arrow-pipeline-2" : "arrow-pipeline-3"}
                  width={32}
                  height={16}
                  className="hidden lg:block"
                />
              </Fragment>
            ))}

            <div className="flex w-[200px] flex-col items-start gap-2 rounded-[14px] border border-line bg-white p-3">
              <div className="flex w-full items-center justify-between rounded-[12px] border-b border-line bg-surface px-2.5 py-1.5">
                <p className="text-[12px] font-extrabold whitespace-nowrap text-ink">
                  Launch anywhere
                </p>
              </div>

              <div className="flex w-full items-center gap-2.5 rounded-[12px] border border-line bg-white p-2.5">
                <span className="flex size-4 shrink-0 items-center justify-center rounded-[8px] border border-line bg-white text-[10px] font-extrabold text-[#96bf48]">
                  S
                </span>
                <p className="text-[13px] font-bold whitespace-nowrap text-ink">
                  Shopify Store
                </p>
              </div>

              <div className="flex w-full items-center gap-2.5 rounded-[12px] border border-line bg-white p-2.5">
                <span className="flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-line bg-[red]">
                  <Icon name="play" size={10} />
                </span>
                <p className="text-[13px] font-bold whitespace-nowrap text-ink">
                  YouTube Channel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
