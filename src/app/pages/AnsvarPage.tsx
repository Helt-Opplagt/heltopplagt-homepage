import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { CONTAINER, Kicker, Pill } from "../components/site";
import { Head } from "../components/ServicePage";
import { useDocumentMeta } from "../../lib/use-document-meta";

const miljoTiltak = [
  {
    title: "Miljøfyrtårn",
    body: "Et systematisk arbeid med miljøtiltak i hverdagen, samt et fokus på miljø fra alle våre ansatte, gjorde oss til en Miljøfyrtårn-sertifisert bedrift i 2014. Helt Opplagts miljøgruppe, bestående av ansatte fra alle avdelinger i organisasjonen, har i lengre tid jobbet med å kvalitetssikre våre miljøtiltak slik at vi til enhver tid reduserer vår virksomhets ytre miljøpåvirkninger.",
  },
  {
    title: "Miljøvennlige kurver",
    body: "Vi administrerer, pakker, og frakter våre produkter til deg uten å belaste miljøet. Vi benytter utelukkende miljøvennlige, flettede gjenbrukskurver laget av en familiebedrift i en liten landsby i fjellene på Filippinene.",
  },
  {
    title: "Kildesortering",
    body: "Alle avdelinger kildesorterer avfall. All papp komprimeres i vår komprimator og leveres til gjenbruk. Vi er stolte over at vi kan returnere over 1 tonn emballasje i uken.",
  },
  {
    title: "Kvalitetskontroll av frukt og grønnsaker",
    body: "Frukt som sorteres ut i vår strenge kvalitetskontroll, og som er fullt brukbar, gis til barnehager og organisasjoner som Fattighuset og Gatebarnas far. Frukt som ikke passer til dette, går til heste- og grisefôr samt biogass.",
  },
  {
    title: "CO2-nøytral virksomhet",
    body: "Helt Opplagt er også en CO2-nøytral virksomhet. Årlig lager vi et klimaregnskap for virksomheten (i henhold til GHG-protokollen) og kjøper inn FN-godkjente CO2-kvoter for å kompensere for alle våre utslipp. Vi er stolte av å kunne støtte Gold Standard-prosjektet i Mali, der lokalbefolkningen utstyres med lokalt produserte energieffektive og rentbrennende kjøkkenovner.",
  },
  {
    title: "Gjenbruk av energi",
    body: "I forbindelse med at vi ferdigstilte og flyttet inn i vårt eget bygg, har vi kunnet planlegge alt fra starten av og all oppvarming er basert på gjenbruk av energi fra forbrenningsanlegget på Klemetsrud. All kjøling til våre 11 kjøle- og fryserom gjøres med energigjerrig varmepumpeteknologi.",
  },
  {
    title: "Vaskbare filtre til inneklima",
    body: "I vår inneklimaavdeling skifter vi nær 20.000 filtre hvert år ute hos våre kunder. I stedet benytter vi vaskbare filtre, og våre serviceteknikere reiser ut til kundene med rene filtre og returnerer med skitne filtre som vi vasker her i vår vaskehall, som igjen benyttes hos våre kunder. År ut og år inn omtrent som med panteflasker.",
  },
  {
    title: "Elbiler, hybridbiler og miljømål for 2030",
    body: "Vårt fokus på bærekraft og ønsket om å spare miljøet der det er mulig gjør at vi har satt oss et hårete mål om å ha nullutslipp på all transport innen 2030. De første hel-elektriske varebilene er nå både bestilt og tatt i bruk og vi har bygget ny ladeinfrastruktur og ladebokser til hele bilparken. Innkjøp av rene fossilbiler til transportavdelingen er nå historie!",
  },
];

const sosialt = [
  {
    title: "Arbeidstrening",
    body: "I tråd med vår sosiale profil har vi utviklet et samarbeid med arbeidsmarkedsbedrifter på Østlandet. Dette gir deg som kunde muligheten til å få pakket dine fruktkurver av en bedrift med varig tilrettelagte arbeidsplasser (en VTA-bedrift), samtidig som våre svært høye krav på frukt-, temperatur- og kvalitetskontroll opprettholdes. Gjennom dette kan vi levere kurver pakket av Stiftelsen Radarveien avdeling Skredderstua arbeidssenter.",
  },
  {
    title: "Nettverk etter soning",
    body: "Vi i Helt Opplagt har stor tro på mennesket, også de som trenger en ny sjanse. Vi er stolt av samarbeidet vi har fått til med Røde Kors i Oslo. Røde Kors plukker ut passende personer og disse starter i praksisplasser hos oss, samtidig som de får oppfølging av Røde Kors sine frivillige. Dersom arbeidsforholdet fungerer ansetter vi personen fast her hos oss.",
  },
  {
    title: "Norskkurs hos Helt Opplagt",
    body: "Vi i Helt Opplagt ønsker at alle våre ansatte skal ha like forutsetninger på jobb og i samfunnet generelt. Derfor tilbyr vi sammen med Folkeuniversitetet norskkurs med gratis lærebøker til 45 av våre ansatte. I tillegg til språkkunnskaper ser man effekter som skaper et sterkt fellesskap mellom de ansatte imellom og oss i Helt Opplagt.",
  },
  {
    title: "Vi jobber for å rekke en hånd til de ukrainske flyktningene",
    body: "Vi er i dialog med den ukrainske ambassade, NAV og europratsya.com for å hurtigst mulig kunne hjelpe de som nå krysser landegrensen vår ved å tilby arbeid, interne fadderordninger og norskkurs. Vi håper dette kan skape noe forutsigbarhet og trygghet. Vi kan ikke hjelpe alle, men vi skal gjøre vårt for å hjelpe de vi har ressurser til.",
  },
];

export function AnsvarPage() {
  useDocumentMeta(
    "Samfunnsansvar",
    "Vi i Helt Opplagt vet at vi ikke kan redde verden på egenhånd, men vi ønsker å bidra der vi kan, og håper å inspirere andre til å gjøre det samme."
  );

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-stone border-b border-navy/[0.06] text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[12deg] bg-lime/15 lg:-right-10 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <Kicker>Samfunnsansvar</Kicker>
          <h1 className="mt-4 max-w-[46rem] font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Vårt samfunnsansvar
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            Vi i Helt Opplagt vet at vi ikke kan redde verden på egenhånd, men
            vi ønsker å bidra der vi kan, og håper å inspirere andre til å gjøre
            det samme. Vi har alltid hatt stort fokus på miljøtiltak. Vi tenker
            på miljøet både i forhold til klima og natur, men også i et sosialt
            perspektiv.
          </p>
          <div className="mt-7">
            <Pill
              href="https://heltopplagt.no/download_file/view/455/236"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Les klimaregnskapet vårt
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className={CONTAINER}>
          <Head
            title="Miljø"
            proof="Vi søker hele tiden etter nye metoder for å gjøre miljøet enda bedre – det er vårt miljøansvar!"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {miljoTiltak.map((t) => (
              <div
                key={t.title}
                className="rounded-[1.5rem] bg-cloud/60 p-7"
              >
                <h3 className="font-lato text-[19px] font-bold text-navy">
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/aktuelt/helt-opplagt-samarbeider-med-ford-pa-veien-mot-nullutslipp"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand"
            >
              Les om overgangen til elektriske varebiler
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-stone border-y border-navy/[0.06] py-16 lg:py-24">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -left-16 -bottom-12 w-40 -rotate-[15deg] bg-brand/10 lg:-left-8 lg:w-60"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Mennesker og samfunn"
            proof="Vi i Helt Opplagt har stor tro på mennesket, også de som trenger en ny sjanse."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {sosialt.map((t) => (
              <div
                key={t.title}
                className="rounded-[1.5rem] bg-white p-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
              >
                <h3 className="font-lato text-[19px] font-bold text-navy">
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className={CONTAINER}>
          <Head
            title="Sertifiseringer og medlemskap"
          />
          <ul className="mt-8 grid max-w-[820px] grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                name: "Miljøfyrtårn",
                detail: "Sertifisert siden 2014",
              },
              {
                name: "Grønt Punkt",
                detail: "Medlem, med EL-returavtale",
              },
              {
                name: "GLOBALG.A.P.",
                detail: "Fruktleverandørene våre er tilknyttet",
              },
            ].map((c) => (
              <li
                key={c.name}
                className="rounded-[1.5rem] border border-navy/10 p-6 text-center"
              >
                <p className="font-lato text-[18px] font-bold text-navy">
                  {c.name}
                </p>
                <p className="mt-1 text-[13px] text-navy/55">{c.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
