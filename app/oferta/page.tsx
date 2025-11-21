import Script from "next/script";

export default function Oferta() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Oferta - Ranczo Patataj Gospodarstwo Edukacyjne",
    itemListElement: [
      {
        "@type": "Service",
        name: "Usługa 1",
        description: "Krótki opis usługi 1...",
      },
      {
        "@type": "Service",
        name: "Usługa 2",
        description: "Krótki opis usługi 2...",
      },
    ],
  };

  return (
    <>
      <Script
        id="services-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <div className=" p-2 py-32">
        {" "}
        Zapraszamy szkoły i przedszkola na Ranczo Patataj! Gospodarstwo
        edukacyjne • Mogielnica • ul. Jastrzębia Stara 9 <br /> 📞 Zapisy: 889
        05 50 14 <br />
        Na naszym ranczu czeka na dzieci prawdziwa przygoda na wsi — pełna
        zwierząt, natury, kreatywności i dobrej zabawy! ⸻ 🐑 Co oferujemy? 💛
        Zajęcia ze zwierzętami w zagrodzie – lamoterapia, alpakoterapia,
        hipoterapia, dogoterapia i rodoterapia – głaskanie, przytulanie i
        czesanie spokojnych zwierząt – spacer po edukacyjnej ścieżce wśród łąk i
        pól 🍞 Warsztaty kulinarne „Od ziarenka do bochenka” Dzieci dowiadują
        się: – skąd bierze się mąka, – co kiedyś robiło się na wsi, – jak
        rozpoznać ziarno żyta i pszenicy. Wspólnie szykujemy podpłomyki na piecu
        kaflowym lub lepimy kluski śląskie (zależnie od wieku uczestników). 🎨
        Warsztaty manualne Uczniowie tworzą własne dzieła: – decoupage, –
        papierowe ptaszki, – figurki gipsowe. A do tego poznają ciekawostki o
        dawnej wsi i rękodziele. 🌲 Gry terenowe dostosowane do wieku grupy 🔥
        Ognisko z kiełbaskami na zakończenie dnia ⸻ To idealna propozycja na
        wycieczkę edukacyjną, dzień integracji czy tematyczne warsztaty. U nas
        dzieci uczą się przez zabawę i kontakt z naturą — w spokojnym,
        bezpiecznym miejscu z dala od miejskiego zgiełku.{" "}
      </div>
    </>
  );
}
