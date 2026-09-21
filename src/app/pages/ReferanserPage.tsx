import { ArrowUpRight, Quote } from "lucide-react";
import { CONTAINER, Kicker, Pill } from "../components/site";
import { Head } from "../components/ServicePage";
import { reviews, type Review } from "../../lib/reviews";
import intilityLogo from "../../images/logo/intility.png";
import allianceLogo from "../../images/logo/alliance.png";
import sporveienLogo from "../../images/logo/sporveien.png";
import xxlLogo from "../../images/logo/xxl.png";
import riksrevisjonenLogo from "../../images/logo/riksrevisjonen.png";
import { useDocumentMeta } from "../../lib/use-document-meta";

const customers = [
  { name: "Intility", logo: intilityLogo },
  { name: "Alliance Healthcare", logo: allianceLogo },
  { name: "Sporveien", logo: sporveienLogo },
  { name: "XXL", logo: xxlLogo },
  { name: "Riksrevisjonen", logo: riksrevisjonenLogo },
];

const GROUPS: Review["service"][] = [
  "Kantine",
  "Lunsj",
  "Frukt",
  "Inneklima",
  "Renhold",
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col rounded-[1.5rem] bg-white p-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)]">
      {review.pullQuote ? (
        <p className="font-lato text-[20px] font-bold leading-snug text-navy">
          «{review.pullQuote}»
        </p>
      ) : (
        <Quote
          className="h-6 w-6 rotate-180 text-amber"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/75">
        {review.text}
      </p>
      <div className="mt-6 border-t border-navy/10 pt-4">
        <p className="text-[15px] font-semibold text-navy">{review.name}</p>
        <p className="mt-0.5 text-[13px] text-navy/55">
          {review.company}
        </p>
      </div>
    </div>
  );
}

export function ReferanserPage() {
  useDocumentMeta(
    "Referanser",
    "Se hva våre kunder mener om oss."
  );

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-stone border-b border-navy/[0.06] text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[12deg] bg-brand/10 lg:-right-10 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <Kicker>Referanser</Kicker>
          <h1 className="mt-4 font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Se hva våre kunder mener om oss
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            Vi har mange fornøyde kunder som har benyttet våre tjenester. Her kan du lese noen av deres erfaringer med oss, og se hvordan vi har bidratt til å skape et bedre arbeidsmiljø og økt trivsel på arbeidsplassen.
          </p>
        </div>
      </section>


      {GROUPS.map((service, i) => {
        const group = reviews.filter((r) => r.service === service);
        if (group.length === 0) return null;
        const tinted = i % 2 === 1;
        return (
          <section
            key={service}
            className={
              tinted
                ? "relative isolate overflow-hidden bg-sand py-14 lg:py-20"
                : "bg-white py-14 lg:py-20"
            }
          >
            {tinted && (
              <span
                aria-hidden="true"
                className={
                  "livery-puzzle aspect-[100/129] w-40 bg-amber/15 lg:w-56 " +
                  (i % 4 === 0
                    ? "-left-16 -bottom-12 -rotate-[15deg] lg:-left-8"
                    : "-right-16 top-6 rotate-[11deg] lg:-right-8")
                }
              />
            )}
            <div className={`${CONTAINER} relative z-10`}>
              <Head title={service} />
              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {group.map((review) => (
                  <ReviewCard key={review.name} review={review} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
