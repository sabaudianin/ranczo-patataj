import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <section className="px-1 py-32 dark:bg-black bg-[var(--c-accent)] max-w-hd mx-auto">
      <Hero />
      <div className=" max-w-7xl mx-auto">
        <p className="font-poppins">
          🌿 Krótkie, chwytliwe slogany (idealne do hero) “Ranczo, które łączy
          naturę, edukację i zabawę.” <br />
          “Miejsce, gdzie spotykasz zwierzęta, a zostajesz dla wspomnień.”{" "}
          <br />
          “Blisko natury. Blisko Warszawy. Daleko od codzienności.”
          <br /> “Odetchnij. Doświadcz. Odkryj wiejską przygodę.” “Ranczo pełne
          radości — dla rodzin, szkół i przyjaciół.” “Dotknij natury. Nakarm
          ciekawość.” <br />
          “Edukujemy, bawimy i zachwycamy – w rytmie natury.” <br />
          “Tutaj dzieci uczą się przez zabawę, a dorośli przez relaks.” “Twoje
          ulubione miejsce na rodzinny wypad poza miasto.” 🐾 Slogany
          akcentujące ZWIERZĘTA (alpaki, lamy, konie, króliki, pawie itd.)
          “Alpaki, konie, lamy… u nas zwierzęta mówią ‘dzień dobry’ jako
          pierwsze.” <br />
          “Zakochaj się w alpakach, zachwyć lamami, zaprzyjaźnij z końmi.”{" "}
          <br />
          “Ranczo, gdzie zwierzęta są częścią rodziny.” <br />
          “Odkryj świat, w którym króliki, pawie i alpaki chodzą własnymi
          ścieżkami.” <br />
          “Widok alpak leczy, kontakt uspokaja — poczuj to sam.” 🎨 Slogany
          edukacyjne (warsztaty, gospodarstwo edukacyjne) <br />
          “Gospodarstwo edukacyjne, w którym nauka pachnie świeżością.” <br />
          “Zabawa, która uczy. Edukacja, która inspiruje.” <br />
          “Warsztaty, które budzą kreatywność i smakują przygodą.”
          <br />
          “Dzieci odkrywają naturę — dorośli odkrywają spokój.” <br />
          “Manualne, kulinarne, terenowe — tu każde dziecko znajdzie swoją
          pasję.” 🍲 Warsztaty manualne i kulinarne – klimatyczne slogany
          “Ugniatamy ciasto, lepimy, tworzymy — warsztaty z sercem.”
          <br /> “Smak tradycji. Magia własnych rąk.” <br />
          “Warsztaty, które pachną chlebem, drewnem i radością.” “Tu powstają
          najpiękniejsze wspomnienia — i najpyszniejsze smaki.” 🔥 Imprezy
          okolicznościowe, ogniska, kuligi – outdoor “Ogniska, kuligi, zabawa
          pod gwiazdami — to jest nasz klimat.” <br />
          “Tu celebrujemy najważniejsze chwile — rodzinnie i z sercem.” “Miejsce
          stworzone na urodziny, integracje, pikniki i imprezy plenerowe.”
          “Więcej przestrzeni, więcej swobody, więcej radości.” 🐑 Alpakoterapia
          / kontakt ze zwierzętami “Spokój, dotyk wełny i ciepłe spojrzenie
          alpaki — terapia dla duszy.” “Odnajdź równowagę w obecności zwierząt.”
          “Alpaki leczą uśmiechem. My dajemy im przestrzeń.” “Uspokajają,
          relaksują, uczą delikatności — poznaj alpakoterapię.” 📍 Blisko
          Warszawy – podróż, która nie męczy “30 minut od Warszawy — a inny
          świat.” “W sam raz na krótki wypad, w sam raz na całą przygodę.”
          “Natura bliżej niż myślisz.” “Warszawa za plecami, natura przed tobą.”
          🌄 Dłuższe, bardziej opisowe (do podtytułu sekcji) “Ranczo, które
          łączy edukację, naturę i prawdziwe wiejskie życie — idealne dla
          rodzin, szkół i miłośników zwierząt.” “Miejsce stworzone dla dzieci i
          dorosłych, którzy chcą uczyć się przez doświadczenie, pracować rękami
          i odkrywać świat zwierząt.” “U nas czas płynie wolniej — wśród alpak,
          koni, lam i niekończącej się zieleni.” “Warsztaty, zwierzęta, gry
          terenowe i imprezy pod gołym niebem — wszystko w jednej, magicznej
          przestrzeni.”
        </p>
        <p className="font-poppins m-8">
          PoppinsLorem ipsum, dolor sit amet consectetur adipisicing elit.
          Molestias exercitationem sequi, recusandae quisquam cum quasi optio
          incidunt quaerat. Asperiores cupiditate non ullam cumque laboriosam
          consequuntur dolore voluptatum quidem et officia? Itaque voluptate
          reprehenderit iusto totam at ut blanditiis veritatis suscipit!
        </p>
        <p className="font-asset">
          Assset Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Molestias exercitationem sequi, recusandae quisquam cum quasi optio
          incidunt quaerat. Asperiores cupiditate non ullam cumque laboriosam
          consequuntur dolore voluptatum quidem et officia? Itaque voluptate
          reprehenderit iusto totam at ut blanditiis veritatis suscipit!
        </p>
      </div>

      <div className="font-moonrock text-2xl py-8">
        MONOROCK Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        vitae ipsa voluptas facere. Mollitia eveniet inventore consectetur odit
        aspernatur error. Cupiditate amet quo quod praesentium, maiores et
        necessitatibus in quia at, atque dignissimos pariatur corporis, sa
      </div>
      <div className="font-playwrite">
        PLAYWRITE Wycieczki Szkolne Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sed vitae ipsa voluptas facere. Mollitia eveniet
        inventore consectetur odit aspernatur error. Cupiditate amet quo quod
        praesentium, maiores et necessitatibus in quia at, atque dignissimos
        pariatur corporis, saepe adipisci mollitia? Magnam repudiandae neque
        vitae, debitis voluptas explicabo, nobis, atque molestiae optio dolor
        soluta sed vero
      </div>
      <div className="font-amatic my-8 text-xl">
        PLAYWRITE Wycieczki Szkolne Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sed vitae ipsa voluptas facere. Mollitia eveniet
        inventore consectetur odit aspernatur error. Cupiditate amet quo quod
        praesentium, maiores et necessitatibus in quia at, atque dignissimos
        pariatur corporis, saepe adipisci mollitia? Magnam repudiandae neque
        vitae, debitis voluptas explicabo, nobis, atque molestiae optio dolor
        soluta sed vero
      </div>
      <div className="font-amatic my-8 text-xl">
        PLAYWRITE Wycieczki Szkolne Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sed vitae ipsa voluptas facere. Mollitia eveniet
        inventore consectetur odit aspernatur error. Cupiditate amet quo quod
        praesentium, maiores et necessitatibus in quia at, atque dignissimos
        pariatur corporis, saepe adipisci mollitia? Magnam repudiandae neque
        vitae, debitis voluptas explicabo, nobis, atque molestiae optio dolor
        soluta sed vero
      </div>
      <div className="font-amatic my-8 text-xl">
        PLAYWRITE Wycieczki Szkolne Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sed vitae ipsa voluptas facere. Mollitia eveniet
        inventore consectetur odit aspernatur error. Cupiditate amet quo quod
        praesentium, maiores et necessitatibus in quia at, atque dignissimos
        pariatur corporis, saepe adipisci mollitia? Magnam repudiandae neque
        vitae, debitis voluptas explicabo, nobis, atque molestiae optio dolor
        soluta sed vero
      </div>
      <div className="font-amatic my-8 text-xl">
        PLAYWRITE Wycieczki Szkolne Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sed vitae ipsa voluptas facere. Mollitia eveniet
        inventore consectetur odit aspernatur error. Cupiditate amet quo quod
        praesentium, maiores et necessitatibus in quia at, atque dignissimos
        pariatur corporis, saepe adipisci mollitia? Magnam repudiandae neque
        vitae, debitis voluptas explicabo, nobis, atque molestiae optio dolor
        soluta sed vero
      </div>
    </section>
  );
}
