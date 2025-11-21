import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { Features } from "@/components/features/Features";
import { Cta } from "@/components/cta/Cta";
import { Banner } from "@/components/banner/Banner";

export default function Home() {
  return (
    <section className="relative px-1  py-24 md:py-0 dark:bg-black bg-[var(--c-accent)] mx-auto">
      <Cta />
      <Hero />
      <Banner />
      <Features />
      <Testimonial />
      <div className=" max-w-7xl mx-auto">
        <p className="font-poppins p-2 text-xs">
          🌿 Krótkie, chwytliwe slogany (idealne do hero) “Ranczo, które łączy
          naturę, edukację i zabawę.” <br />
          “Miejsce, gdzie spotykasz zwierzęta, a zostajesz dla wspomnień.”{" "}
          <br />
          “Blisko natury. Blisko Warszawy. Daleko od codzienności.”
          <br /> “Odetchnij. Doświadcz. Odkryj wiejską przygodę.”
          <br /> “Ranczo pełne radości — dla rodzin, szkół i przyjaciół.” <br />
          “Dotknij natury. Nakarm ciekawość.” <br />
          “Edukujemy, bawimy i zachwycamy w rytmie natury.” <br />
          “Tutaj dzieci uczą się przez zabawę, a dorośli przez relaks.” <br />
          “Twoje ulubione miejsce na rodzinny wypad poza miasto.” <br />
          🐾 Slogany akcentujące ZWIERZĘTA (alpaki, lamy, konie, króliki, pawie
          itd.) “Alpaki, konie, lamy… u nas zwierzęta mówią ‘dzień dobry’ jako
          pierwsze.” <br />
          “Zakochaj się w alpakach, zachwyć lamami, zaprzyjaźnij z końmi.”{" "}
          <br />
          “Ranczo, gdzie zwierzęta są częścią rodziny.” <br />
          “Odkryj świat, w którym króliki, pawie i alpaki chodzą własnymi
          ścieżkami.” <br />
          “Widok alpak leczy, kontakt uspokaja — poczuj to sam.” <br />
          🎨 Slogany edukacyjne (warsztaty, gospodarstwo edukacyjne) <br />
          “Gospodarstwo edukacyjne, w którym nauka pachnie świeżością.” <br />
          “Zabawa, która uczy. Edukacja, która inspiruje.” <br />
          “Warsztaty, które budzą kreatywność i smakują przygodą.”
          <br />
          “Dzieci odkrywają naturę — dorośli odkrywają spokój.” <br />
          “Manualne, kulinarne, terenowe — tu każde dziecko znajdzie swoją
          pasję.” <br />
          🍲 Warsztaty manualne i kulinarne – klimatyczne slogany “Ugniatamy
          ciasto, lepimy, tworzymy — warsztaty z sercem.”
          <br /> “Smak tradycji. Magia własnych rąk.” <br />
          “Warsztaty, które pachną chlebem, drewnem i radością.” “Tu powstają
          najpiękniejsze wspomnienia — i najpyszniejsze smaki.”
          <br /> 🔥 Imprezy okolicznościowe, ogniska, kuligi – outdoor “Ogniska,
          kuligi, zabawa pod gwiazdami — to jest nasz klimat.” <br />
          “Tu celebrujemy najważniejsze chwile — rodzinnie i z sercem.” <br />
          “Miejsce stworzone na urodziny, integracje, pikniki i imprezy
          plenerowe.”
          <br />
          “Więcej przestrzeni, więcej swobody, więcej radości.” 🐑 Alpakoterapia
          / kontakt ze zwierzętami <br />
          “Spokój, dotyk wełny i ciepłe spojrzenie alpaki — terapia dla duszy.”
          <br /> “Odnajdź równowagę w obecności zwierząt.” “Alpaki leczą
          uśmiechem. My dajemy im przestrzeń.”
          <br /> “Uspokajają, relaksują, uczą delikatności — poznaj
          alpakoterapię.” <br />
          📍 Blisko Warszawy – podróż, która nie męczy “30 minut od Warszawy — a
          inny świat.” <br />
          “W sam raz na krótki wypad, w sam raz na całą przygodę.”
          <br /> “Natura bliżej niż myślisz.”
          <br /> “Warszawa za plecami, natura przed tobą.”
          <br />
          🌄 Dłuższe, bardziej opisowe (do podtytułu sekcji) “Ranczo, które
          łączy edukację, naturę i prawdziwe wiejskie życie — idealne dla
          rodzin, szkół i miłośników zwierząt.” <br />
          “Miejsce stworzone dla dzieci i dorosłych, którzy chcą uczyć się przez
          doświadczenie, pracować rękami i odkrywać świat zwierząt.”
          <br />
          “U nas czas płynie wolniej — wśród alpak, koni, lam i niekończącej się
          zieleni.”
          <br /> “Warsztaty, zwierzęta, gry terenowe i imprezy pod gołym niebem
          — wszystko w jednej, magicznej przestrzeni.”
        </p>
      </div>
    </section>
  );
}
