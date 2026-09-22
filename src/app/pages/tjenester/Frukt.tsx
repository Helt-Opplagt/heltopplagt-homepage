import { ServicePage, ServicePageData } from "../../components/ServicePage";
import packehallImg from "../../../images/frukt/frukt2.png";
import pakkerImg from "../../../images/frukt/frukt.png";
import heroFruktImg from "../../../images/hero/web/hero-frukt.jpg";
import teamImg from "../../../images/hele_gjengen.png";
import lunsjCardImg from "../../../images/lunsj/lunsj.png";
import gokurvenImg from "../../../images/frukt/cards/gokurven.jpg";
import knaskekurvenImg from "../../../images/frukt/cards/knaskekurven.jpg";
import hverdagskurvenImg from "../../../images/frukt/cards/hverdagskurven.jpg";
import superkurvenImg from "../../../images/frukt/cards/superkurven.jpg";
/* NOTE: the Rullekurven photo has green promo text burned into it. Replace
   with the brochure's clean Rullekurven photo when it is available. */
import rullekurvenImg from "../../../images/frukt/cards/rullekurven.jpg";
import smoothiekurvenImg from "../../../images/frukt/cards/smoothiekurven.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const fruktData: ServicePageData = {
  path: "/tjenester/frukt",
  badge: "Helse & Trivsel",
  layout: "light",
  title: (
    <>
      Frukt
    </>
  ),
  subtitle: "Fruktkurv og jobbfrukt levert på jobben i Oslo",
  intro:
    "Helt Opplagt leverer fruktkurver og faste fruktabonnement til bedrifter i Oslo og Stor-Oslo. Vi hjelper dere å velge riktig kurv, mengde og leveringsrytme etter antall ansatte, budsjett og hvor ofte dere ønsker påfyll.",
  image: packehallImg,
  imageAlt: "Fruktkurv fra Helt Opplagt levert på et kontor",
  heroImage: heroFruktImg,
  brochureUrl:
    "https://heltopplagt.no/application/files/7317/6785/9195/HeltOpplagt_Fruktbrosjyre_januar_2026_web.pdf",

  heroPoints: [
    { label: "Gir umiddelbar energi og økt konsentrasjon" },
    { label: "Et sunt gode til dine ansatte" },
    { label: "Tilpass kurven etter behov" },
  ],

  explainer: {
    heading: "Hva tilbyr vi?",
    body: [
      "Vi leverer først og fremst faste fruktavtaler, der kurvtype, mengde og leveringsfrekvens tilpasses arbeidsplassen.",
      "Leveringsområdet strekker seg fra Drammen - Gardermoen - Lillestrøm - Fredrikstad - Sandvika - Oslo og alt i mellom. ",
      "For å sikre kvalitet på frukten vår, vurderer smakspanelet vårt hver uke frukten som skal brukes i kommende leveranser. Frukten pakkes så tett opp mot levering som mulig, og kvaliteten kontrolleres underveis.",
    ],

    image: pakkerImg,
    imageAlt:
      "Ansatt med hårnett og forkle som setter sammen en fruktkurv i pakkehallen",
  },

  catalogs: [
    {
      heading: "Hvilken fruktkurv passer bedriften deres?",
      proof:
        "Det finnes ikke én fruktkurv som passer alle. Noen vil ha klassisk frukt til lavest mulig pris. Andre ønsker større variasjon, grønnsaker, nøtter eller smoothie.",

      layout: "grid",
      items: [
        {
          name: "Hverdagskurven",
          tag: "Rimelig",
          description:
            "For bedrifter som ønsker klassisk basisfrukt til lavest mulig pris. Fra ca. 6 kr per person per dag.",
          image: hverdagskurvenImg,
          to: "/tjenester/frukt/hverdagskurven",
        },
        {
          name: "Knaskekurven",
          tag: "Spennende",
          description:
            "For dere som ønsker frukt kombinert med grønnsaker og nøtter. Fra ca. 11 kr per person per dag.",
          image: knaskekurvenImg,
          to: "/tjenester/frukt/knaskekurven",
        },
        {
          name: "Go'kurven",
          tag: "Populær",
          description:
            "For bedrifter som ønsker god variasjon uten å gå opp til premiumutvalget. Fra ca. 8 kr per person per dag.",
          image: gokurvenImg,
          to: "/tjenester/frukt/gokurven",
        },

        {
          name: "Superkurven",
          tag: "Eksotisk",
          description:
            "For bedrifter som ønsker størst mulig variasjon med sesongvarer, mer eksotisk frukt, grønt og nøtter. Fra ca. 11 kr per person per dag.",
          image: superkurvenImg,
          to: "/tjenester/frukt/superkurven",
        },
        {
          name: "Rullekurven",
          description:
            "For bedrifter som vil variere mellom ulike kurvtyper fra uke til uke. Fra ca. 9 kr per person per dag.",
          image: rullekurvenImg,
          to: "/tjenester/frukt/rullekurven",
        },
        {
          name: "Smoothiekurven",
          description:
            "Fruktkurv med basisfrukt og smoothie. Ideell for de som liker både å spise og drikke frukt. Priseksempel 12 pers: ca 11,- pr hode / dag.",
          image: smoothiekurvenImg,
          to: "/tjenester/frukt/smoothiekurven",
        },
      ],
    },
    {
      heading: "Jobbsmoothie",
      proof:
        "Vi leverer to ulike varianter hver uke.",
      layout: "feature",
      reverse: true,
      items: [
        {
          name: "Jobbsmoothie",
          description:
            "Våre spennende, næringsrike og ferske smoothies er laget fra bunnen av på vårt eget kjøkken med ekte frukt og bær. De er utviklet med fokus på sunn energi, og er fulle av antioksidanter og vitaminer.",
          image: `${thumbs}/84880641e437bfb7b441396f2b721a9d.jpg`,
        },
      ],
      link: { label: "Les mer om jobbsmoothie", to: "/tjenester/frukt/jobbsmoothie" },
    },
  ],

  faqHeading: "Ofte stilte spørsmål om frukt på jobben",

  faq: [
    {
      question: "Er fruktlevering bare tilgjengelig som abonnement?",
      answer:
        "Helt Opplagt leverer først og fremst faste fruktavtaler til bedrifter. Vi kan også hjelpe med enkeltleveranser når kapasiteten tillater det.",
    },
    {
      question: "Hvor mye frukt trenger dere på jobben?",
      answer:
        "Riktig mengde avhenger først og fremst av hvor mange som faktisk er på kontoret, hvor ofte dere ønsker levering og hvor mye frukt som normalt blir spist. Har dere hybridarbeid, bør dere derfor ta utgangspunkt i normal kontortilstedeværelse - ikke totalt antall ansatte",
    },
    {
      question: "Kan dere levere frukt samme dag?",
      answer:
        "Det kan enkelte ganger være mulig, avhengig av tidspunkt, kapasitet og kjørerute. Vi kan derfor ikke garantere levering samme dag. Ta kontakt, så sjekker vi hva vi kan få til.",
    },
    {
      question: "Hva koster frukt på jobben?",
      answer:
        "Prisen avhenger av kurvtype, størrelse og leveringsfrekvens. Våre eksisterende priseksempler starter på omtrent 6 kroner per person per dag.",
    },
    {
      question: "Hvor ofte kan vi få levert frukt?",
      answer:
        "Vi har daglige utkjøringer og tilpasser leveringsrytmen etter behov og avtale.",
    },
  ],

  hideSubServiceCards: true,

  readMoreHeading: "Les mer",
  readMore: [
    {
      label: "Våre fruktrutiner",
      description:
        "Gode rutiner på renhold og hygiene er selve nøkkelen til at våre kunder alltid mottar sunn, frisk og velsmakende frukt, hver dag.",
      to: "/tjenester/frukt/vare-fruktrutiner",
      image: `${thumbs}/3660ed1a222d7d3dde58c2ee0b824500.jpg`,
    },
    {
      label: "Jobbsmoothie",
      description: "Våre spennende, næringsrike og ferske smoothies er laget fra bunnen av på vårt eget kjøkken med ekte frukt og bær.",
      to: "/tjenester/frukt/jobbsmoothie",
      image: `${thumbs}/0f4e0649d2119d89e9f23b17cfc2ae78.jpg`,
    },
    {
      label: "Vårt samfunnsansvar",
      description:
        "Vi har alltid hatt stort fokus på miljøtiltak. Vi er en miljøfyrtårnbedrift som prioriterer miljøet i alt vi gjør.",
      to: "/ansvar",
      image: teamImg,
    },
    {
      label: "Lunsj",
      description: "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
      to: "/tjenester/lunsj",
      image: lunsjCardImg,
    },
  ],

  subServices: [
    {
      slug: "jobbsmoothie",
      title: "Jobbsmoothie",
      description:
        "Våre spennende, næringsrike og ferske smoothies er laget fra bunnen av på vårt eget kjøkken med ekte frukt og bær.",
      image: `${thumbs}/0f4e0649d2119d89e9f23b17cfc2ae78.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "De er utviklet med fokus på sunn energi, og er fulle av antioksidanter og vitaminer. På den måten sørger man for at hele bedriften er frisk, effektiv og Helt Opplagt, hele dagen. Vi leverer også til arrangementer og events.",
          ],
        },
        {
          type: "bullets",
          heading:
            "Vi leverer to ulike varianter hver uke der vi rullerer blant disse:",
          items: [
            "Blåbær og Pære",
            "Gojibær og Jordbær",
            "Nektarin og Jordbær",
            "Açai og Bjørnebær",
            "Jordbær og Pære",
            "Açai og Blåbær",
            "Gojibær og Plomme",
            "Ananas og Pære",
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Liten Smoothie-pakke",
              description:
                "3 flasker a 1 liter – 3 liter i uka – 985,- inkl levering per måned.",
              image: `${thumbs}/1ff3dd9faf6885160c0cd585489a6ba6.jpg`,
            },
            {
              title: "Stor Smoothie-pakke",
              description:
                "5 flasker a 1 liter – 5 liter i uka – 1495,- inkl levering per måned.",
              image: `${thumbs}/84880641e437bfb7b441396f2b721a9d.jpg`,
            },
          ],
        },
        {
          type: "text",
          heading:
            "Hva vil det bety for din bedrift å ha et Smoothie-abonnement?",
          paragraphs: [
            "Vi bruker ferskpresset sitron i våre smoothies for naturlig konservering og best smak, og bananer for naturlig fylde. For å oppnå den naturlig friske smaken bruker vi premium eplemost fra Askim Frukt- og Bærpresseri.",
            "Smoothiene leveres i 1-litersflasker som vi setter direkte inn i deres kjøleskap. På den måten kan dere forsyne dere når dere trenger en boost, både før og etter lunsj.",
            "Vi varierer smoothiene fra uke til uke, slik at dere til enhver tid har noe nytt og spennende å tilby medarbeidere, kunder og gjester.",
          ],
        },
        {
          type: "bullets",
          items: [
            "Gir energi og lavere sykefravær",
            "Perfekt hvis du vil imponere i møter",
            "Del noe godt, erstatt litt av kaffedrikken",
          ],
        },
        {
          type: "text",
          heading: "Prøv oss!",
          paragraphs: [
            "Ta kontakt på 0 23 46, eller bruk skjema for mer informasjon og tilbud!",
          ],
        },
      ],
    },
    {
      slug: "vare-fruktrutiner",
      title: "Våre fruktrutiner",
      description:
        "Gode rutiner på renhold og hygiene er selve nøkkelen til at våre kunder alltid mottar sunn, frisk og velsmakende frukt, hver dag.",
      image: `${thumbs}/3660ed1a222d7d3dde58c2ee0b824500.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Hver tirsdag møtes Helt Opplagts smakspanel. Da skal frukt for neste ukes kurver velges ut.",
            "Pakkingen utføres av et eget pakketeam nærmest mulig leveringstidspunkt. Hver enkelt frukt blir kontinuerlig sjekket. Det benyttes hansker, forklær og hårnett under pakking. Hygiene og temperatur i pakkelokalene kontrolleres og logges jevnlig i henhold til Mattilsynets regler. Helt Opplagt har daglige utkjøringer. Fruktkurvene leveres helt inn på ønsket avdeling/kontor.",
          ],
        },
        {
          type: "text",
          heading: "Fruktpakketeamet og sosialt ansvar",
          paragraphs: [
            "Helt Opplagt er opptatt av å ta være på nærmiljøet. Derfor tilbyr vi arbeidsplasser og arbeidstrening til ungdommer i bydelen. Vi har også et samarbeid med arbeidsmarkedsbedrifter på Østlandet. Dette gir deg mulighet til å få pakket din fruktkurv av en bedrift med varig tilrettelagte arbeidsplasser (VTA). På denne måten gir vi også deg muligheten til å ta et sosialt ansvar rundt din leveranse.",
          ],
        },
        {
          type: "bullets",
          heading:
            "Vi er en miljøfyrtårnbedrift som prioriterer miljøet i alt vi gjør, som for eksempel:",
          items: [
            "Gjenbrukskurver brukes til alle leveranser.",
            "Bilparken er nøye planlagt i forhold til utslipp.",
            "Alt avfall kildesorteres: Frukt som sorteres ut av vår strenge kvalitetskontroll, men som fremdeles er brukbar, blir gitt bort til lokale barnehager og organisasjoner. Frukt som ikke lenger kan benyttes gis bort som heste- og grisefôr, eller gjenvinnes som biogass.",
            "Økologisk frukt blir benyttet såfremt det er tilgjengelig.",
          ],
        },
      ],
    },

    {
      slug: "gokurven",
      title: "Go'kurven",
      variantOf: "fruktkurver",
      description:
        "Go'kurven™ er vårt mest populære alternativ, da den er både rimelig, variert og spennende.",
      image: gokurvenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Go'kurven™ er vårt mest populære alternativ, da den er både rimelig, variert og spennende. Dere får friske fruktkurver bestående av eple, sitrus, banan, pære, drue, plomme og nektarin, variert etter sesong og tilgang. I tillegg får dere en gang i blant nøtter, cherrytomater eller eksotisk frukt som en hyggelig overraskelse.",
            "Leveres i kurver à ca. 6 kg, 9 kg og 15 kg.",
          ],
        },
      ],
    },
    {
      slug: "knaskekurven",
      title: "Knaskekurven",
      variantOf: "fruktkurver",
      description:
        "Knaskekurven™ er et sunt og spennende alternativ som er skapt for kos.",
      image: knaskekurvenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Et sunt og spennende alternativ som er skapt for kos. Inneholder epler, pærer, bananer, sitrus, druer, minigulrøtter, cherrytomater, reddiker, sukkererter og nøtter. Ønsker dere en fruktkurv med masse spennende innhold, er dette kurven for dere!",
            "Leveres i kurver à ca. 5,5 kg og 8 kg."
          ],
        },
      ],
    },
    {
      slug: "hverdagskurven",
      title: "Hverdagskurven",
      variantOf: "fruktkurver",
      description:
        "Den perfekte fruktkurven for dere som ønsker å oppnå helsefordelen ved å benytte frukt og samtidig holde prisen på det minimale.",
      image: hverdagskurvenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Den perfekte fruktkurven for dere som ønsker å oppnå helsefordelen ved frukt til en lav pris. Hverdagskurven består av tre ulike typer basefrukt, der det varieres mellom eple, pære, banan og sitrus",
            "Leveres i kurver à ca. 6 kg, 9 kg og 15 kg.",
          ],
        },
      ],
    },
    {
      slug: "superkurven",
      title: "Superkurven",
      variantOf: "fruktkurver",
      description:
        "Superkurven™ er vårt flaggskip, for dere som ønsker «alt» i deres jobbfrukt!",
      image: superkurvenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Inneholder frukt som eple, pære, banan, sitrus og druer. Toppes med eksotisk frukt og sesongfrukt som plommer, nektariner, jordbær, kiwi, sharon, melon og lignende, samt nøtter og tørkede frukter. Innholdet i kurven varierer fra uke til uke, og etter sesong og tilgang"
          ],
        },
      ],
    },
    {
      slug: "rullekurven",
      title: "Rullekurven",
      variantOf: "fruktkurver",
      description:
        "Rullekurven™ er for dere som ønsker mer variasjon, eller ganske enkelt ikke klarer å bestemme dere.",
      image: rullekurvenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Rullekurven er for dere som ønsker mer variasjon, eller ganske enkelt ikke klarer å bestemme dere. Varierer fra uke til uke mellom de fire ulike typene fruktkurv, og kan leveres i to størrelser – stor og liten.",
          ],
        },
      ],
    },
    {
      slug: "smoothiekurven",
      title: "Smoothiekurven",
      variantOf: "fruktkurver",
      description:
        "Fruktkurv med basisfrukt og smoothie. Ideell for de som liker både å spise og drikke frukt.",
      image: smoothiekurvenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Fruktkurv med basisfrukt og smoothie. Ideell for de som liker både å spise og drikke frukt. Våre hjemmelagede kvalitetssmoothier inneholder kun sunne og ferske ingredienser.",
            "Leveres i kurver i to størrelser.",
          ],
        },
      ],
    },
  ],
};

export function FruktPage() {
  return <ServicePage data={fruktData} />;
}
