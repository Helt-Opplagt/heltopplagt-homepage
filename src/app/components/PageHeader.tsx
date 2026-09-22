import type { ReactNode } from "react";
import { CONTAINER } from "./site";

/**
 * Header for the company pages: title, intro and any action stacked, on white.
 */
export function PageHeader({
  title,
  intro,
  action,
}: {
  title: string;
  intro?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <header className="bg-white">
      <div className={`${CONTAINER} pb-6 pt-12 lg:pb-8 lg:pt-16`}>
        <h1 className="h1-compact max-w-[20ch] font-lato font-light text-navy">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-[42rem] text-[16px] leading-relaxed text-navy/65 lg:text-[17px]">
            {intro}
          </p>
        )}
        <span
          aria-hidden="true"
          className="mt-7 block h-[3px] w-16 rounded-full bg-brand"
        />
        {action && <div className="mt-7">{action}</div>}
      </div>
    </header>
  );
}
