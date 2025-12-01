"use client";

import Image from "next/image";

export const Atrakcje = () => {
  return (
    <section
      id="atrakcje"
      aria-labelledby="atrakcje-title"
      className="max-w-5xl mx-auto py-4 px-4 md:px-0"
    >
      <div className="text-center mb-6">
        <h2
          id="atrakcje-title"
          className="text-[var(--c-primary)] font-ultra tracking-wide text-base md:text-2xl"
        >
          Co u nas przeżyjesz?
        </h2>
        <p className="font-curier text-xs md:text-base mt-2 max-w-2xl mx-auto">
          Zapraszamy na dzień pełen prawdziwych doświadczeń – wśród zwierząt,
          zieleni i przytulnych, rustykalnych wnętrz. Bez pośpiechu, za to z
          dużą dawką natury i dobrej energii.
        </p>
      </div>

      <div
        className="flex items-center justify-center gap-1 pb-4 mb-4"
        aria-hidden="true"
      >
        <Image
          src="/images/g1.avif"
          alt=""
          width={100}
          height={100}
          className="hidden md:block w-20 md:w-40 h-auto object-cover rounded"
        />
        <Image
          src="/images/g7.avif"
          alt=""
          width={100}
          height={100}
          className="w-20 md:w-40 h-auto object-cover rounded"
        />
        <Image
          src="/images/g2.avif"
          alt=""
          width={100}
          height={100}
          className="w-20 md:w-40 h-auto object-cover rounded"
        />
        <Image
          src="/images/g3.avif"
          alt=""
          width={100}
          height={100}
          className="w-20 md:w-40 h-auto object-cover rounded"
        />
        <Image
          src="/images/g5.avif"
          alt=""
          width={100}
          height={100}
          className="hidden md:block w-20 md:w-40 h-auto object-cover rounded"
        />
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2 font-curier text-xs md:text-base">
        <div className="flex gap-3 p-3 md:p-4 rounded-2xl bg-emerald-300/50 shadow-sm border border-amber-100">
          <div className="text-2xl md:text-3xl mt-1">🌿</div>
          <div>
            <h3 className="font-special font-bold py-2">
              Spotkania ze zwierzętami
            </h3>
            <p>
              Alpaki, lamy, konie, kucyki, kozy, owce, kury, pawie i wiele
              innych. Dzieci i dorośli mogą je karmić, głaskać i z bliska
              zobaczyć, jak wygląda codzienna opieka nad nimi.
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-3 md:p-4 rounded-2xl bg-indigo-300/50 shadow-sm border border-amber-100">
          <div className="text-2xl md:text-3xl mt-1">🏡</div>
          <div>
            <h3 className="font-special font-bold py-2">
              Rustykalna sala i przestrzeń na zewnątrz
            </h3>
            <p>
              Do Waszej dyspozycji jest przytulna sala idealna na warsztaty i
              spotkania, przeszklona przestrzeń w stylu ogrodu zimowego oraz
              duży teren na zewnątrz. Dzięki temu możecie cieszyć się ranczem
              niezależnie od pogody i pory roku.
            </p>
          </div>
        </div>

        {/* Warsztaty */}
        <div className="flex gap-3 p-3 md:p-4 rounded-2xl bg-red-300/50 shadow-sm border border-amber-100">
          <div className="text-2xl md:text-3xl mt-1">🎨</div>
          <div>
            <h3 className="font-special font-bold py-2">
              Warsztaty kulinarne i manualne
            </h3>
            <p>
              Proste przepisy, praca z naturalnymi składnikami, lepienie,
              tworzenie własnych pamiątek oraz eko-warsztaty. Dzieci uczą się
              przez działanie, dużo kreatywności i zero nudy.
            </p>
          </div>
        </div>

        {/* Ognisko i piknik */}
        <div className="flex gap-3 p-3 md:p-4 rounded-2xl bg-lime-300/50 shadow-sm border border-amber-100">
          <div className="text-2xl md:text-3xl mt-1">🔥</div>
          <div>
            <h3 className="font-special font-bold py-2">
              Ognisko i piknik na świeżym powietrzu
            </h3>
            <p>
              Przygotowujemy miejsce na ognisko i przestrzeń do pikniku. To
              idealne zwieńczenie wizyty, rodzinnego wyjazdu lub integracji przy
              wspólnym pieczeniu i rozmowach.
            </p>
          </div>
        </div>

        {/* (Opcjonalnie) przejażdżki – jeśli chcesz dodać */}
        {/* 
        <div className="flex gap-3 p-3 md:p-4 rounded-2xl bg-white/70 shadow-sm border border-amber-100">
          <div className="text-2xl md:text-3xl mt-1">🐴</div>
          <div>
            <h3 className="font-special font-semibold text-[var(--c-primary)]">
              Przejażdżki i bryczka
            </h3>
            <p>
             Klimatyczna przejażdżka
              bryczką po okolicy (po wcześniejszym umówieniu) to dla wielu
              dzieci pierwsze tak bliskie spotkanie z końmi.
            </p>
          </div>
        </div>
        */}

        {/* Urodziny i imprezy */}
        <div className="flex gap-3 p-3 md:p-4 rounded-2xl bg-sky-300/50 shadow-sm border border-amber-100 md:col-span-2">
          <div className="text-2xl md:text-3xl mt-1">🎉</div>
          <div>
            <h3 className="font-special font-bold py-2">
              Urodziny i imprezy okolicznościowe
            </h3>
            <p>
              Organizujemy urodziny wśród zwierząt, rodzinne spotkania oraz
              kameralne imprezy firmowe. Możemy połączyć atrakcje ze
              zwierzętami, warsztaty i swobodną zabawę, tworząc scenariusz
              dopasowany do Waszej grupy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
