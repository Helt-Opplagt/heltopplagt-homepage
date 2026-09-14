import { ArrowRight, Check } from "lucide-react";
import teamImg from "../../images/hele_gjengen.jpg";
import { CONTAINER, Kicker, Pill } from "./site";

const points = [
  "En leverandør med bred kunnskap og lang erfaring, grunnlagt i 1985",
  "Bedrer arbeidsdagen til over 50 000 ansatte i Oslo-området",
  "1000+ bedrifter og organisasjoner",
  "Miljøfyrtårn-sertifisert og CO2-nøytral virksomhet",
];

export function About() {
  return (
    <section id="om-oss" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div
        className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}
      >
        <div className="relative order-2 mx-auto w-full max-w-[26rem] lg:order-1 lg:max-w-[30rem]">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={teamImg}
              alt="Teamet i Helt Opplagt"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-2 bottom-10 rounded-[1.25rem] bg-white px-6 py-4 shadow-[0_16px_36px_-8px_rgba(13,43,64,0.22)] sm:-right-6">
            <p className="font-lato text-[34px] font-light leading-none text-brand">
              40+ år
            </p>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-navy/55">
              Erfaring
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Kicker>Om oss</Kicker>
          <h2 className="mt-4 font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-navy sm:text-[38px] lg:text-[44px]">
            Om Helt Opplagt på jobben
          </h2>

          <p className="mt-4 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
            Gjennom høy kvalitet, presise leveranser, nærhet til kundene, høy
            servicegrad og riktige priser skal vi være markedets foretrukne
            samarbeidspartner i våre nisjer.
          </p>

          <ul className="mt-8 flex flex-col gap-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3.5">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-lime/15">
                  <Check className="h-4 w-4 text-lime" strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-navy/80">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Pill to="/om-oss" variant="outline">
              Les mer om oss
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
