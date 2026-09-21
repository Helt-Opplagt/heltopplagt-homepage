import { useEffect, useRef, useState } from "react";
import { CONTAINER } from "./site";
import { Head } from "./ServicePage";
import { Reveal } from "./Reveal";

export interface HistoryEntry {
  year: string;
  title: string;
  body: string;
  image: string;
  imageAlt?: string;
}

/**
 * Scroll-driven timeline. One number, how far the reading line has travelled
 * down the list, drives everything: the fill of the vertical line, which
 * markers are lit, the sticky year on the left and the photo wipes.
 */
export function History({
  title,
  proof,
  entries,
}: {
  title: string;
  proof?: string;
  entries: HistoryEntry[];
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [fill, setFill] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;

    function update() {
      frame = 0;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      const focus = window.innerHeight * 0.45;
      const next = Math.min(Math.max(focus - rect.top, 0), rect.height);
      setFill(next);
      let index = 0;
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const top = dot.getBoundingClientRect().top - rect.top + 8;
        if (top <= next) index = i;
      });
      setActive(index);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  function jumpTo(index: number) {
    const dot = dotRefs.current[index];
    if (!dot) return;
    const top = window.scrollY + dot.getBoundingClientRect().top - window.innerHeight * 0.45 + 8;
    window.scrollTo({ top, behavior: "smooth" });
  }

  const current = entries[active];
  const longYear = current.year.length > 6;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className={CONTAINER}>
        <Reveal>
          <Head title={title} proof={proof} />
        </Reveal>

        <div className="mt-12 lg:grid lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-20">
          {/* Sticky rail: the current year, and every year as a jump link. */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div
                aria-live="polite"
                className="relative h-[5.5rem] overflow-hidden"
              >
                <span
                  key={active}
                  className={
                    "history-year absolute inset-x-0 top-0 block font-lato font-light tracking-[-0.02em] text-navy " +
                    (longYear
                      ? "text-[30px] leading-[1.1]"
                      : "text-[80px] leading-none")
                  }
                >
                  {current.year}
                </span>
              </div>
              <p className="mt-1 text-[15px] font-bold text-navy">
                {current.title}
              </p>

              <ol className="mt-8 flex flex-col gap-2.5 border-l border-navy/10">
                {entries.map((entry, i) => {
                  const state =
                    i === active ? "active" : i < active ? "past" : "next";
                  return (
                    <li key={entry.year}>
                      <button
                        type="button"
                        onClick={() => jumpTo(i)}
                        className={
                          "-ml-px flex items-center gap-3 border-l-2 pl-4 text-left text-[13px] transition-colors duration-300 " +
                          (state === "active"
                            ? "border-brand font-bold text-brand"
                            : state === "past"
                              ? "border-transparent text-navy hover:text-brand"
                              : "border-transparent text-navy/40 hover:text-navy")
                        }
                      >
                        {entry.year}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* The timeline itself. */}
          <ol ref={listRef} className="relative">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[7px] top-0 w-px bg-navy/10"
            />
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-0 w-px bg-brand"
              style={{ height: fill }}
            />

            {entries.map((entry, i) => {
              const on = i <= active;
              const isActive = i === active;
              return (
                <li
                  key={entry.year}
                  className={
                    "relative pb-14 pl-10 last:pb-0 sm:pl-12 lg:pb-20 lg:pl-16 motion-safe:transition-opacity motion-safe:duration-500 " +
                    (isActive || !on ? "opacity-100" : "opacity-60")
                  }
                >
                  <span
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    aria-hidden="true"
                    className={
                      "absolute left-0 top-[5px] h-[15px] w-[15px] rounded-full border-2 bg-white transition-colors duration-300 " +
                      (on ? "border-brand" : "border-navy/20")
                    }
                  >
                    <span
                      className={
                        "absolute inset-[3px] rounded-full bg-brand transition-transform duration-300 " +
                        (on ? "scale-100" : "scale-0")
                      }
                    />
                    {isActive && (
                      <span className="history-ring absolute -inset-2 rounded-full border border-brand" />
                    )}
                  </span>

                  <Reveal>
                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:items-start md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
                      <div>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand lg:hidden">
                          {entry.year}
                        </p>
                        <h3 className="mt-1.5 font-lato text-[22px] font-bold leading-tight text-navy lg:mt-0 lg:text-[24px]">
                          {entry.title}
                        </h3>
                        <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-navy/65 lg:text-[16px]">
                          {entry.body}
                        </p>
                      </div>
                      <div
                        className={
                          "history-photo aspect-[4/3] overflow-hidden rounded-2xl bg-navy/5 " +
                          (on ? "is-on" : "")
                        }
                      >
                        <img
                          src={entry.image}
                          alt={entry.imageAlt ?? ""}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
