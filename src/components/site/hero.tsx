import { Fragment } from "react";
import { BetaSignupButton } from "./beta-signup";
import { Icon } from "./icon";

const PIPELINE_NODES = [
  { title: "Venture", caption: "Agreements & roles" },
  { title: "Product", caption: "Build & review" },
];

export function Hero() {
  return (
    <section className="bg-navy dot-grid px-6 py-20 md:px-12 lg:px-[120px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
        <div className="flex w-full flex-col items-center gap-7">
          <a
            href="#product"
            className="flex items-center gap-2.5 rounded-full border border-brand/40 bg-tint px-3.5 py-2"
          >
            <span className="eyebrow text-[11px] font-semibold text-brand">
              The Collaboration Operating System
            </span>
            <Icon name="arrow-right-badge" size={12} />
          </a>

          <h1 className="max-w-[960px] text-center text-[40px] leading-[1.05] font-extrabold text-ink sm:text-[56px] lg:text-[72px]">
            Build together. Launch anywhere.
          </h1>

          <p className="max-w-[820px] text-center text-[18px] leading-[1.6] text-body lg:text-[20px]">
            DuetSpace helps creators, experts and teams turn collaborations into
            products, without losing track of who agreed to what or who
            contributed what.
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-start">
          <BetaSignupButton className="flex h-[56px] items-center justify-center rounded-[12px] border border-transparent bg-brand px-9 text-[16px] font-bold whitespace-nowrap text-navy shadow-brand-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-lg active:translate-y-0">
            Join the Beta
          </BetaSignupButton>
          <a
            href="#how-it-works"
            className="flex h-[56px] items-center justify-center gap-2.5 rounded-[12px] border border-brand bg-transparent px-9 text-[16px] font-bold whitespace-nowrap text-brand transition-colors duration-200 hover:bg-tint"
          >
            See how it works
            <Icon name="arrow-right-btn" size={14} />
          </a>
        </div>

        <div className="flex w-full max-w-[1000px] flex-col items-center gap-6 rounded-[20px] border border-line bg-panel p-6 shadow-card lg:p-10">
          <p className="eyebrow text-[11px] font-semibold text-brand">
            Collaboration Lifecycle
          </p>

          <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
            <div className="flex w-[160px] flex-col items-center gap-1.5 rounded-[14px] bg-brand p-4 text-center shadow-brand-sm">
              <p className="w-full text-[14px] leading-[1.4] font-extrabold text-navy">
                DuetSpace
              </p>
              <p className="w-full text-[12px] leading-[1.4] font-semibold text-navy/70">
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
                <div className="flex w-[160px] flex-col items-center gap-1.5 rounded-[14px] border border-line bg-navy p-4 text-center">
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

            <div className="flex w-[200px] flex-col items-start gap-2 rounded-[14px] border border-line bg-navy p-3">
              <div className="flex w-full items-center justify-between rounded-[12px] border-b border-line bg-panel px-2.5 py-1.5">
                <p className="text-[12px] font-extrabold whitespace-nowrap text-ink">
                  Launch anywhere
                </p>
              </div>

              <div className="flex w-full items-center gap-2.5 rounded-[12px] border border-line bg-panel p-2.5">
                <Icon name="shopify" size={16} className="shrink-0" />
                <p className="text-[13px] font-bold whitespace-nowrap text-ink">
                  Shopify Store
                </p>
              </div>

              <div className="flex w-full items-center gap-2.5 rounded-[12px] border border-line bg-panel p-2.5">
                <Icon name="youtube-brand" size={16} className="shrink-0" />
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
