import intilityLogo from "../../images/kunder/intility.png";
import allianceLogo from "../../images/kunder/alliance.png";
import sporveienLogo from "../../images/kunder/sporveien.png";
import xxlLogo from "../../images/kunder/xxl.png";
import riksrevisjonenLogo from "../../images/kunder/riksrevisjonen.png";
import { CONTAINER } from "./site";
import { Reveal } from "./Reveal";

const customers = [
  { name: "Intility", logo: intilityLogo },
  { name: "Alliance Healthcare", logo: allianceLogo },
  { name: "Sporveien", logo: sporveienLogo },
  { name: "XXL", logo: xxlLogo },
  { name: "Riksrevisjonen", logo: riksrevisjonenLogo },
];

export function References() {
  return (
    <section className="border-y border-navy/5 bg-white">
      <Reveal className={`${CONTAINER} py-10 lg:py-12`}>
        <p className="text-center text-[13px] font-medium uppercase tracking-[0.14em] text-navy/45">
          Noen av våre kunder
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:flex-nowrap lg:justify-between lg:gap-x-10">
          {customers.map((customer) => (
            <li key={customer.name} className="flex items-center justify-center">
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-h-7 w-auto max-w-[8rem] object-contain opacity-55 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 lg:max-h-8"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
