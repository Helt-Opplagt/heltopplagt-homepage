import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTAINER, Kicker } from "../components/site";
import { ContactForm } from "../components/ContactForm";
import { useDocumentMeta } from "../../lib/use-document-meta";

const details = [
  {
    icon: Phone,
    label: "Telefon",
    lines: ["0 23 46"],
    href: "tel:02346",
  },
  {
    icon: Mail,
    label: "E-post",
    lines: ["bli@heltopplagt.no"],
    href: "mailto:bli@heltopplagt.no",
  },
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["Slimeveien 2b, 1275 Oslo"],
    href: "https://maps.app.goo.gl/QtSdi3VgGdhP9QE86",
  },


];

export function KontaktPage() {
  useDocumentMeta(
    "Kontakt",
    "Kontakt Helt Opplagt. Be om en uforpliktende prat. Vi kontakter deg! Ring 0 23 46 eller bruk kontaktskjemaet."
  );

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-stone">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -left-20 -bottom-16 w-48 -rotate-[12deg] bg-brand/10 lg:-left-10 lg:w-72"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Kicker>Kontakt</Kicker>
              <h1 className="mt-4 font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
                Kontakt oss
              </h1>
              <p className="mt-5 max-w-[36rem] text-[16px] leading-relaxed text-navy/65 lg:text-[18px]">
                Kontakt oss på telefon, e-post eller via kontaktskjemaet!
              </p>

              <dl className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
                {details.map((item) => {
                  const Icon = item.icon;
                  const value = (
                    <>
                      {item.lines.map((line, i) => (
                        <span
                          key={line}
                          className={
                            i === 0
                              ? "block text-[17px] font-semibold text-navy"
                              : "block text-[14px] text-navy/60"
                          }
                        >
                          {line}
                        </span>
                      ))}
                    </>
                  );
                  return (
                    <div key={item.label} className="flex items-start gap-4 py-5">
                      <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-[0_1px_2px_rgba(13,43,64,0.08)]">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-navy/45">
                          {item.label}
                        </dt>
                        <dd className="mt-1">
                          {item.href ? (
                            <a
                              href={item.href}
                              {...(item.href.startsWith("http")
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                              className="transition-colors hover:text-brand"
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(13,43,64,0.28)] sm:p-10 lg:p-12">
              <h2 className="mb-8 font-lato text-[24px] font-light leading-[1.2] tracking-[-0.01em] text-navy sm:text-[28px]">
                Kontaktskjema
              </h2>
              <ContactForm size="spacious" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
