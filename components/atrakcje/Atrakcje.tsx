"use client";

export const Atrakcje = () => {
  return (
    <section
      id="atrakcje"
      aria-labelledby="atrakcje-title"
      className="max-w-5xl mx-auto pt-8 md:px-0"
    >
      <div className="text-center mb-6">
        <h2
          id="atrakcje-title"
          className="text-[var(--c-primary)] font-ultra tracking-wide text-base md:text-2xl"
        >
          Co u nas przeżyjesz?
        </h2>
        <p className="font-curier text-xs md:text-base mt-2">
          Zapraszamy rodziny, szkoły i grupy na dzień pełen prawdziwych
          doświadczeń wśród zwierząt, zieleni i rustykalnych wnętrz.
        </p>
      </div>

      <div className="space-y-5 md:space-y-6 font-curier text-xs md:text-base">
        <div className="flex gap-3">
          <div className="text-2xl md:text-3xl">🌿</div>
          <div>
            <h3 className="font-special font-semibold text-[var(--c-primary)]">
              Spotkania ze zwierzętami
            </h3>
            <p>
              Alpaki, lamy, konie, kucyki, kozy, owce, kury, pawie i wiele
              innych. Dzieci mogą je karmić, głaskać i z bliska zobaczyć, jak
              wygląda codzienna opieka nad nimi.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="text-2xl md:text-3xl">🏡</div>
          <div>
            <h3 className="font-special font-semibold text-[var(--c-primary)]">
              Rustykalna sala, ogród zimowy i przestrzeń na zewnątrz
            </h3>
            <p>
              Do Waszej dyspozycji jest przytulna sala idealna na warsztaty i
              spotkania, przeszklona przestrzeń w stylu ogrodu zimowego oraz
              duży teren na zewnątrz. Dzięki temu możecie cieszyć się ranczem
              niezależnie od pogody i pory roku.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="text-2xl md:text-3xl">🎨</div>
          <div>
            <h3 className="font-special font-semibold text-[var(--c-primary)]">
              Warsztaty kulinarne i manualne
            </h3>
            <p>
              Pieczenie, proste przepisy, praca z naturalnymi składnikami,
              lepienie, tworzenie własnych pamiątek oraz eko-warsztaty. Dzieci
              uczą się przez działanie dużo śmiechu, kreatywności i zero nudy.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="text-2xl md:text-3xl">🔥</div>
          <div>
            <h3 className="font-special font-semibold text-[var(--c-primary)]">
              Ognisko i piknik na świeżym powietrzu
            </h3>
            <p>
              Przygotowujemy miejsce na ognisko, patyki, ławki i przestrzeń do
              pikniku. To idealne zwieńczenie wycieczki, rodzinnego wyjazdu lub
              integracji przy wspólnym pieczeniu i rozmowach.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="text-2xl md:text-3xl">🎉</div>
          <div>
            <h3 className="font-special font-semibold text-[var(--c-primary)]">
              Urodziny i imprezy okolicznościowe
            </h3>
            <p>
              Organizujemy urodziny wśród zwierząt, rodzinne spotkania oraz
              kameralne imprezy firmowe. Możemy połączyć atrakcje ze
              zwierzętami, warsztaty, swobodną zabawę i ognisko tworząc
              scenariusz dopasowany do Waszej grupy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
