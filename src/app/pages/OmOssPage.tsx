import { ArrowUpRight } from "lucide-react";
import { CONTAINER, Kicker, Pill } from "../components/site";
import { Head } from "../components/ServicePage";
import buildingImg from "../../images/div/web/ho-015.jpg";
import inneklimaImg from "../../images/div/web/inneklima.jpg";
import fruktImg from "../../images/frukt/frukt.png";
import lunsjImg from "../../images/div/web/lunsj.jpg";
import kantineImg from "../../images/div/web/kantine.jpg";
import cateringImg from "../../images/div/web/fat-anretning.jpg";
import teamImg from "../../images/div/web/kokker.jpg";
import { History, type HistoryEntry } from "../components/History";
import { useDocumentMeta } from "../../lib/use-document-meta";

const stats = [
  { value: "1985", label: "Grunnlagt som Euromiljø" },
  { value: "320+", label: "Ansatte i konsernet" },
  { value: "50 000+", label: "Ansatte mottar tjenestene våre" },
  { value: "1000+", label: "Bedrifter i Oslo og Stor-Oslo" },
  { value: "15 000", label: "Serveres lunsj hver dag" },

];

const values = [
  {
    title: "Vi dyrker samhold",
    body: "Hos oss har alle et ansvar for å skape et inkluderende arbeidsmiljø hvor vi presterer, har det moro sammen og bryr oss om hverandre. Vi har tro på våre medarbeidere, noe som gjenspeiles i vår flate struktur og satsning på mennesker som kan og vil arbeide for vårt fellesskap. Hos oss har vi et mangfold som viser hverandre tillit og respekt.",
  },
  {
    title: "Vi er nysgjerrige",
    body: "Vi lærer av våre feil, og skaper nye og bedre løsninger. For å kunne lære av og med hverandre har vi et åpent sinn, og mot til å dele og stille spørsmål. Vi utforsker fremtiden og de muligheter som ligger i den.",
  },
  {
    title: "Vi skaper kvalitet",
    body: "Vi jobber for å knytte til oss de rette menneskene med den riktige kompetansen. Samtidig ønsker vi der det er mulig å rekruttere internt, for å ta vare på og videreutvikle mennesker, kunnskap og erfaring. Vi er fleksible og har en evne til å snu oss raskt for å gi en unik kundeservice og opprettholde kvaliteten vi har lovet.",
  },
];

const timeline: HistoryEntry[] = [
  {
    year: "1985",
    title: "Startet som Euromiljø",
    image: inneklimaImg,
    body: "Euromiljø ble etablert i 1985, og har i alle årene jobbet med økt trivsel, effektivitet og for enda flere langtidsfriske mennesker hos bedrifter og offentlig sektor på østlandet. Det startet med ren luft med rett temperatur; med luftrensere, kjøling og varmepumper med tilhørende leie- og serviceavtaler.",
  },
  {
    year: "Midt på nittitallet",
    title: "Jobbfrukt",
    image: fruktImg,
    body: "Midt på nittitallet startet vi levering av fruktkurver, eller jobbfrukt; lett tilgjengelig frukt på arbeidsplassen. Tjenesten er i dag blitt vanlig og inngår hos svært mange bedrifter som en viktig faktor for de ansattes trivsel og helse.",
  },
  {
    year: "1999",
    title: "Sunn lunsj",
    image: lunsjImg,
    body: "1999 startet vi med levering av sunn lunsj til små og mellomstore bedrifter. Lunsjtjenesten ble senere utvidet med kantinedrift med personell, samt varmmat, catering, overtids- og julemat fra vårt eget kjøkken.",
  },
  {
    year: "2007",
    title: "Helt Opplagt på jobben",
    image: kantineImg,
    body: "Navnet Euromiljø er beholdt som firmanavn, men fra 2007 begynte vi å bruke profilnavnet Helt Opplagt på jobben.",
  },
  {
    year: "2011",
    title: "Nytt bygg på Bjørnholt",
    image: buildingImg,
    body: "I 2011 fikk vi ferdigstilt vårt nye bygg på Bjørnholt, bygget spesielt for våre virksomheter. Vi fikk med dette flotte vekstmuligheter.",
  },

  {
    year: "2016",
    title: "Rett Hjem",
    image: cateringImg,
    body: "I denne ånd kjøpte vi Rett Hjem i 2016 for å kunne tilby bedrifter også netthandel av lunsj, catering etc. Videre overtok vi også en «Seniortjeneste», nå kalt Rett Hjem PLUSS, med levering av dagligvarer og middagsmat til eldre.",
  },
  {
    year: "I dag",
    title: "Drøyt 320 ansatte",
    image: teamImg,
    body: "Vi har hele veien hatt jevn og fin vekst, og i Helt Opplagt har vi nå drøyt 320 ansatte. Vi er stolte av våre fine og lojale medarbeidere som gjør service på rundt 1200 luftrensere og varmepumper hver måned, produserer og leverer rundt 3500 fruktkurver per uke, og serverer lunsj til over 15 000 mennesker hver dag.",
  },
];

export function OmOssPage() {
  useDocumentMeta(
    "Om oss",
    "Helt Opplagt på jobben er en markedsorientert leverandør av løpende abonnementsbaserte tjenester innen helse og trivsel på arbeidsplassen. Vi leverer jobbfrukt, catering, renhold, kantine og ren luft til over 50 000 ansatte i bedrifter i Oslo."
  );

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-stone border-b border-navy/[0.06] text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[12deg] bg-brand/10 lg:-right-10 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <Kicker>Om oss</Kicker>
          <h1 className="h1-compact mt-4 max-w-[46rem] font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Om Helt Opplagt på jobben
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            Sammen skal vi være det Helt Opplagte valg for en sunnere, renere og
            enklere hverdag! Helt Opplagt på jobben er en markedsorientert
            leverandør av løpende abonnementsbaserte tjenester innen helse og
            trivsel på arbeidsplassen.
          </p>
        </div>
      </section>

      <section className="border-b border-navy/5 bg-white">
        <div className={`${CONTAINER} py-10 lg:py-12`}>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-[13px] leading-snug text-navy/55">
                  {s.label}
                </dt>
                <dd className="font-lato text-[34px] font-light leading-none text-brand">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div
          className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
        >
          <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
            <div className="aspect-[3/2] overflow-hidden rounded-2xl">
              <img
                src={buildingImg}
                alt="Helt Opplagt på jobben sitt bygg på Bjørnholt i Oslo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <Head
              title="En samarbeidspartner for trivsel, helse og effektivitet"
              proof="Gjennom høy kvalitet, presise leveranser, nærhet til kundene, høy servicegrad og riktige priser skal vi være markedets foretrukne samarbeidspartner i våre nisjer."
            />
            <p className="mt-6 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
              Vi tror på menneskene, og vi bryr oss om deg. Gjennom våre verdier
              får vi mennesker til å blomstre, trives og gjøre et godt stykke
              arbeid.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
              Vi er stolte av å identifisere oss som en virksomhet med god
              kultur og rutiner for å fremme likestilling og hindre
              diskriminering på arbeidsplassen. I våre stillingsannonser
              oppfordrer vi kvalifiserte søkere til å søke uansett alder, kjønn,
              legning og kulturell bakgrunn.
            </p>
            <div className="mt-8">
              <Pill
                href="https://karriere.heltopplagt.com/"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jobb hos oss
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Pill>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-stone border-y border-navy/[0.06] py-16 lg:py-24">
        <span
          aria-hidden="true"
          className="livery-puzzle-outline aspect-[100/129] -left-14 -top-8 w-36 -rotate-[12deg] bg-brand/20 lg:-left-8 lg:w-52"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Verdiene våre"
            proof="Samhold, nysgjerrighet og kvalitet skal gjøre oss i stand til å løfte hverandre til topp prestasjoner i alle ledd."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[1.5rem] bg-white p-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
              >
                <h3 className="font-lato text-[20px] font-bold text-navy">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <History
        title="Historikk"
        proof="Helt Opplagt begynte som Euromiljø."
        entries={timeline}
      />

      <section className="bg-stone border-y border-navy/[0.06] py-16 lg:py-20">
        <div className={CONTAINER}>
          <Head
            title="Hvorfor er Helt Opplagt det smarteste valget?"
            proof="Helt Opplagt leverer mange tjenester under samme tak. Med samlevering blir det mange synergier våre kunder tjener på. Ikke minst er det også gunstig for miljøet."
          />
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-stone border-y border-navy/[0.06] py-16 lg:py-20">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-16 -bottom-12 w-40 rotate-[15deg] bg-brand/10 lg:-right-8 lg:w-56"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Åpenhetsloven"
            proof="Vi tar ansvar for menneskerettigheter og arbeidsforhold i vår virksomhet og leverandørkjede."
          />
          <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.7] text-navy/70">
            Åpenhetsloven trådte i kraft 1. juli 2022 for å forebygge brudd på
            menneskerettigheter og uanstendige arbeidsforhold. Vi har derfor
            gjennomført aktsomhetsvurderinger basert på OECD-retningslinjer, og
            vil gjøre dette årlig. Ingen faktiske negative konsekvenser for
            menneskerettigheter eller uanstendige arbeidsforhold har blitt
            identifisert i vår aktsomhetsvurdering.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Pill
              href="https://heltopplagt.no/download_file/view/494/180"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redegjørelse – konsernet
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
            <Pill
              href="https://heltopplagt.no/download_file/view/495/180"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redegjørelse – Euromiljø Natur AS
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
            <Pill
              href="https://heltopplagt.no/download_file/view/458"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supplier code of conduct
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </section>
    </div>
  );
}
