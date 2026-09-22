import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/lunsj/lunsj.png";
import openingImg from "../../../images/hero/web/hero-lunsj.jpg";
import explainerImg from "../../../images/div/web/fat-anretning.jpg";
import fatHof3 from "../../../images/div/web/hof3.jpg";
import hverdagslunsjenImg from "../../../images/lunsj/cards/hverdagslunsjen.jpg";
import golunsjenImg from "../../../images/lunsj/cards/golunsjen.jpg";
import superlunsjenImg from "../../../images/lunsj/cards/superlunsjen.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const lunsjData: ServicePageData = {
  path: "/tjenester/lunsj",
  badge: "Mat & Drikke",
  layout: "light",
  title: (
    <>
      Lunsj
    </>
  ),
  subtitle: "Vår lunsj gjør arbeidsdagen hyggeligere",
  intro:
    "Er du en bedrift med mellom 5–300 ansatte kan vi levere alt fra enkle lunsjbokser til proffkantine. Ta kontakt i dag og prøv våre velsmakende lunsjer.",
  image: heroImg,
  imageAlt: "Lunsj fra Helt Opplagt",
  heroImage: openingImg,
  brochureUrl:
    "https://heltopplagt.no/application/files/8917/6785/9195/HeltOpplagt_Lunsjbrosjyre_januar_2026_web.pdf",
  heroPoints: [
    { label: "Sunn og god lunsj hver dag" },
    { label: "Et sosialt avbrekk i en travel hverdag" },
    { label: "Sparer tid og samler de ansatte" },
  ],
  explainer: {
    heading: "Hva tilbyr vi?",
    body: [
      "Daglig levering av lunsj som inneholder ferskt brød, dagens pålegg, grønnsaker, frukt og drikke, alt etter hvilket utvalgsnivå dere ønsker.",
      "Velg lunsjen som passer best for dere. Velg blant vår enkle Hverdagslunsj, populære Go'lunsj eller luksuriøse Superlunsj. Lunsjkurven leveres helt inn på deres spiserom, og våre kunder opplever at de sparer masse verdifull tid med våre løsninger.",
    ],

    image: explainerImg,
    imageAlt: "Kokk fra Helt Opplagt anretter påleggsfat",
  },
  catalogs: [
    {
      heading: "Velg din lunsjeske",

      layout: "grid",
      items: [
        {
          name: "Hverdagslunsjen",
          tag: "Rimelig",
          description:
            "Vår enkleste og rimeligste lunsjordning. Passer for dere som ønsker å spare penger, men samtidig ha noe som er ferskere og friskere enn matpakke.",
          image: hverdagslunsjenImg,
          to: "/tjenester/lunsj/hverdagslunsjen",
        },
        {
          name: "Go'lunsjen",
          tag: "Populær",
          description:
            "Vår mest populære lunsjordning. God og variert, fersk og frisk. Et tidsbesparende og lønnsomt alternativ til å handle mat i butikken.",
          image: golunsjenImg,
          to: "/tjenester/lunsj/golunsjen",
        },
        {
          name: "Superlunsjen",
          tag: "Flaggskip",
          description:
            "Vårt flaggskip blant selvbetjente lunsjordninger. Luksuriøst og velsmakende, godt og variert. Et fristende utvalg for dere som ønsker å gjøre noe ekstra ut av lunsjen.",
          image: superlunsjenImg,
          to: "/tjenester/lunsj/superlunsjen",
        },
      ],
    },
    {
      heading: "Ferdige fat",

      layout: "feature",
      reverse: true,
      items: [
        {
          name: "Leveres rett inn i deres kjøleskap",
          tag: "Passer best fra ca 10 pers og oppover",
          description:
            "Kjøtt- og fiskepålegg, ost, egg, grønnsaker osv pakkes på fat. Drikke, smør, syltetøy og andre pålegg som ikke egner seg så godt på fat kommer ved siden av. Fatene setter vi rett inn i kjøleskapet hos dere ved våre daglige leveranser. Vi hjelper dere med å holde orden i kjøleskapet, noe som sikrer fersk mat og hindrer svinn.",
          image: fatHof3,
        },
      ],
      link: { label: "Les mer om ferdige fat", to: "/tjenester/lunsj/ferdige-fat" },
    },
    {
      heading: "Varm lunsj på jobb",

      layout: "feature",
      items: [
        {
          name: "Stor variasjon og lang holdbarhet",
          tag: "Mer enn 50 retter",
          description:
            "Vi har et stort utvalg av velsmakende retter, alle laget helt fra bunn av, med fokus på sunnhet og naturlige råvarer. Rettene leveres både porsjonspakkede og i storforpakninger, og kan raskt og enkelt varmes opp i komfyr eller mikrobølgeovn.",
          image: `${thumbs}/317b0d000b75625d1c6eea3f9a02a605.jpg`,
        },
      ],
      link: { label: "Les mer om varm lunsj", to: "/tjenester/lunsj/varm-lunsj" },
    },
  ],
  hideSubServiceCards: true,
  faq: [
    {
      question: "Hvor mange må vi være for å få lunsjlevering?",
      answer:
        "Er du en bedrift med mellom 5-300 ansatte kan vi levere alt fra enkle lunsjbokser til proffkantine. Ferdige fat passer best fra ca 10 pers og oppover.",
    },
    {
      question: "Når leveres lunsjen på jobben?",
      answer:
        "Sunn lunsj levert helt inn på spiserommet før kl. 11 hver dag. Vi leverer daglig eller etter behov.",
    },
    {
      question: "Hva koster en lunsjordning?",
      answer:
        "Hverdagslunsjen koster ca. 32 kr per person/dag. Go'lunsjen koster ca. 50 kr per person/dag. Superlunsjen koster ca. 61 kr per person/dag. Husk at det går an å gjøre tilleggsbestillinger ved behov/ønske.",
    },
    {
      question: "Hva inneholder lunsjesken?",
      answer:
        "Vi kommer daglig med en eske som inneholder ferskt brød, dagens pålegg, grønnsaker, frukt og drikke. Noen ting, som for eksempel smør og syltetøy, kommer mandager og er ment å vare utover uken, mens det aller meste er dagens pålegg for at dere skal slippe å rydde det samme pålegget ut og inn av kjøleskapet hver dag.",
    },
  ],
  readMore: [
    {
      label: "Lunsjesker",
      description: "Velg blant vår enkle Hverdagslunsj™, populære Go'lunsj™ eller luksuriøse Superlunsj™.",
      to: "/tjenester/lunsj/golunsjen",
      image: `${thumbs}/4b5debec2dd9e84aaaa4847cf6ad5852.png`,
    },
    {
      label: "Ferdige fat",
      description: "Vårt nyeste lunsjkonsept, der det aller meste er tilrettelagt på forhånd.",
      to: "/tjenester/lunsj/ferdige-fat",
      image: `${thumbs}/41d9e0eadce975c155ef731dbce1b6a8.jpg`,
    },
    {
      label: "Varm lunsj",
      description: "Vi har et stort utvalg av velsmakende retter, alle laget helt fra bunn av.",
      to: "/tjenester/lunsj/varm-lunsj",
      image: `${thumbs}/317b0d000b75625d1c6eea3f9a02a605.jpg`,
    },
    {
      label: "Kantine",
      description: "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
      to: "/tjenester/kantine",
      image: `${thumbs}/f8b24672f313f2f3ca35fd4b0765e8ab.jpg`,
    },
  ],
  subServices: [
    {
      slug: "hverdagslunsjen",
      title: "Hverdagslunsjen",
      variantOf: "lunsjesker",
      priceNote: "Ca. 32 kr per person/dag",
      description:
        "Vår enkleste og rimeligste lunsjordning. Passer for dere som ønsker å spare penger, men samtidig ha noe som er ferskere og friskere enn matpakke. Leveres i enheter tilpasset ca 5 pers.",
      image: hverdagslunsjenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vår enkleste og rimeligste lunsjordning. Passer for dere som ønsker å spare penger, men samtidig ha noe som er ferskere og friskere enn matpakke. Leveres i enheter tilpasset ca 5 pers.",
            "Hverdagslunsjen koster ca. 32 kr per person/dag. Lunsjesken leveres helt inn til ønsket rom, hver dag før kl 11.",
            "Husk at det går an å gjøre tilleggsbestillinger ved behov/ønske.",
          ],
        },
        {
          type: "bullets",
          items: [
            "Variert og sunt brød + margarin. Brødet kan leveres ferskt oppskåret.",
            "2–3 typer pålegg hver dag; enkle og rimelige kjøtt- og fiskepålegg, hel gulost/brunost, syltetøy, leverpostei, italiensk salat. I tillegg leverer vi kokte egg hver fredag.",
            "Juice/melk.",
          ],
        },
      ],
    },
    {
      slug: "golunsjen",
      title: "Go'lunsjen",
      variantOf: "lunsjesker",
      priceNote: "Ca. 50 kr per person/dag",
      description:
        "Vår mest populære lunsjordning. God og variert, fersk og frisk. Et tidsbesparende og lønnsomt alternativ til å handle mat i butikken. Passer fra ca 5 pers og oppover.",
      image: golunsjenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vår mest populære lunsjordning. God og variert, fersk og frisk. Et tidsbesparende og lønnsomt alternativ til å handle mat i butikken. Passer fra ca 5 pers og oppover.",
            "Go'lunsjen koster ca. 50 kr per person/dag. Lunsjesken leveres helt inn til ønsket rom, hver dag før kl 11.",
            "Husk at det går an å gjøre tilleggsbestillinger ved behov/ønske.",
          ],
        },
        {
          type: "bullets",
          items: [
            "Variert og sunt brød + margarin. Brødet kan leveres ferdig oppskåret.",
            "Flere typer pålegg hver dag, varieres med 50 rullerende menyer. Her er vi innom de fleste kjente typer kjøtt- og fiskepålegg, majones, kaviar, assorterte skivede oster, smøre- og kremoster, italiensk- og skalldyrsalater, syltetøy, leverpostei og mye mer.",
            "Ekstra fredagsmeny. Varierer mellom karbonader, roastbiff, kokte egg, fiskekaker og kyllingvinger.",
            "Friske grønnsaker: tomat/agurk/salat/paprika.",
            "Juice/melk.",
            "1 frukt til hver er inkludert, men bytt gjerne ut med våre flotte fruktkurver.",
          ],
        },
      ],
    },
    {
      slug: "superlunsjen",
      title: "Superlunsjen",
      variantOf: "lunsjesker",
      priceNote: "Ca. 61 kr per person/dag",
      description:
        "Vårt flaggskip blant selvbetjente lunsjordninger. Luksuriøst og velsmakende, godt og variert. Et fristende utvalg for dere som ønsker å gjøre noe ekstra ut av lunsjen. Passer fra ca 5 pers og oppover.",
      image: superlunsjenImg,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vårt flaggskip blant selvbetjente lunsjordninger. Luksuriøst og velsmakende, godt og variert. Et fristende utvalg for dere som ønsker å gjøre noe ekstra ut av lunsjen. Passer fra ca 5 pers og oppover.",
            "Superlunsjen koster ca. 61 kr per person/dag. Lunsjesken leveres helt inn til ønsket rom, hver dag før kl 11.",
          ],
        },
        {
          type: "bullets",
          items: [
            "Inneholder kun våre flotteste brød- og påleggsvarianter.",
            "Like variert, men mer eksklusive råvarer enn Go'lunsjen.",
            "Med hyppige innslag av flott pålegg som karbonader, roastbiff, kokte egg, fiskekaker og kyllingvinger.",
            "Godt og friskt utvalg av grønnsaker.",
            "Ferskpresset juice, eventuelt melk.",
            "Vi anbefaler å kombinere med våre flotte fruktkurver.",
          ],
        },
      ],
    },
    {
      slug: "ferdige-fat",
      title: "Ferdige fat",
      description:
        "Kjøtt- og fiskepålegg, ost, egg, grønnsaker osv pakkes på fat. Et tidsbesparende og lønnsomt alternativ til å handle mat i butikken. Passer best fra ca 10 pers og oppover.",
      image: `${thumbs}/41d9e0eadce975c155ef731dbce1b6a8.jpg`,
      content: [
        {
          type: "text",
          heading: "Leveres rett inn i deres kjøleskap",
          paragraphs: [
            "Fatene setter vi rett inn i kjøleskapet hos dere ved våre daglige leveranser. I tillegg etterfylles andre pålegg etter rullerende meny. Vi hjelper dere med å holde orden i kjøleskapet, noe som sikrer fersk mat og hindrer svinn.",
          ],
        },
        {
          type: "bullets",
          heading: "Brød, pålegg, grønt, drikke og en ekstra fredagsmeny",
          items: [
            "Variert og sunt brød + margarin. Brødet leveres ferdig oppskåret.",
            "Flere typer pålegg hver dag, varieres med 50 rullerende menyer. Her er vi innom de fleste kjente typer kjøtt- og fiskepålegg, kokte egg, majones, kaviar, assorterte skivede oster, smøre- og kremoster, italiensk- og skalldyrsalater, syltetøy, leverpostei og mye mer.",
            "Ekstra fredagsmeny. Varieres mellom karbonader, roastbiff, kokte egg, fiskekaker og kyllingvinger.",
            "Friske grønnsaker: tomat/agurk/salat/paprika.",
            "Juice/melk.",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat!",
          ],
        },
      ],
    },
    {
      slug: "varm-lunsj",
      title: "Varm lunsj",
      description:
        "Vi har et stort utvalg av velsmakende retter, alle laget helt fra bunn av, med fokus på sunnhet og naturlige råvarer. Rettene leveres både porsjonspakkede og i storforpakninger, og kan raskt og enkelt varmes opp i komfyr eller mikrobølgeovn.",
      image: `${thumbs}/317b0d000b75625d1c6eea3f9a02a605.jpg`,
      content: [
        {
          type: "text",
          heading: "Stor variasjon og lang holdbarhet",
          paragraphs: [
            "Vi jobber hele tiden med fornyelse og nye retter. Vi vil at våre kunder skal oppleve en inspirerende variasjon. Det rulleres mellom mer enn 50 retter, her er noen eksempler:",
          ],
        },
        {
          type: "bullets",
          items: [
            "Kylling curry med ris",
            "Marinerte kyllinglår med potetsalat",
            "Albondigas med stekte poteter",
            "Viltgryte med stekte poteter",
            "Lapskaus",
            "Chili con Carne med ris",
            "Thailandsk Green Curry med ris",
            "Pasta Carbonara",
            "Karbonader med ertepure og stekte poteter",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat!",
          ],
        },
      ],
    },
    {
      slug: "kantine",
      title: "Kantine",
      description:
        "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
      image: `${thumbs}/f8b24672f313f2f3ca35fd4b0765e8ab.jpg`,
      content: [
        {
          type: "text",
          heading: "Vi kommer med maten - dere nyter",
          paragraphs: [
            "Et fullservicetilbud for litt større bedrifter der vi tar oss av hele lunsjavviklingen. Vi stiller med en hyggelig vert/vertinne. Dere kan bare komme og nyte!",
            "Gjennom mange års erfaring med fornøyde kunder er tjenesten spesialtilpasset bedrifter med mellom 20 til 150 ansatte. Våre varierte menyer gir dere en buffet som er både smaksrik og sunn for kroppen, samt presentert på en måte som er en fryd for øyet! Vi tilbyr et modulbasert kantinetilbud der dere selv kan påvirke sammensetningen.",
            "I ca 100 betjente kantiner sørger våre dyktige, blide og serviceinnstilte verter og vertinner for å skape en god lunsjopplevelse i en travel hverdag for våre kunders ansatte. Vi vet at våre kunder er opptatt av både atmosfære og smak, så vårt fokus er å skape en hyggelig ramme rundt lunsjavviklingen i tillegg til høy kvalitet på maten vi serverer.",
          ],
        },
        {
          type: "bullets",
          heading: "Modulbasert kantinetilbud - velg blant følgende moduler:",
          items: [
            "Frokostblanding og yoghurt som et alternativ eller tillegg.",
            "Pålegg - pyntede fat og skåler med kjøtt- og fiskepålegg, oster, majonessalater, syltetøy og smørepålegg som varieres fra dag til dag.",
            "Småretter som omelett, tunfisksalat og grønnsakspanne.",
            "Salater - daglig variasjon mellom mange spennende salater som tilberedes ferskt hos dere.",
            "Varmmat laget fra bunn av på vårt eget kjøkken.",
            "Vafler/småkaker - perfekt som fredagskos!",
            "Ulike typer drikke som juice og melk, deriblant kundefavoritten Eplejuice fra Askim frukt- og bærpresseri.",
            "Brød/knekkebrød - sunne og grove brød etter egne oppskrifter uten unødvendige tilsetningsstoffer. Variert utvalg av gode og fiberrike knekkebrødvarianter.",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Vi leverer daglig, noe som gir store fordeler i forhold til ferskhet, kvalitet og fleksibilitet. Det gir lettere tilpasning til variasjoner i antall brukere og gjester, og fjerner svinnproblematikk.",
            "Vi presenterer helst maten på fat i en buffetløsning. Dette hindrer unødvendig svinn, sparer tidsbruk og dermed også kostnader, samt ikke minst er det den gunstigste løsningen for miljøet, sammenlignet med å servere maten i kuvertbegre.",
            "Våre utmerkede verter og vertinner sørger for at dere bare kan komme og nyte maten da vi tar oss av alt arbeidet rundt, herunder gjøremål som: av- og pådekking, tilbereding av all maten i buffeten, oppvask, holde kjøkken og kantineområdet rent og ryddig etc. Vi kan også påta oss annet forefallende kontorarbeid og/eller vask av deres lokaler.",
          ],
        },
      ],
    },
  ],
};

export function LunsjPage() {
  return <ServicePage data={lunsjData} />;
}
