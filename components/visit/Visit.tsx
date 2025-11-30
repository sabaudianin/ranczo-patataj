export const Visit = () => {
  return (
    <section
      id="jak-wyglada-wizyta"
      aria-labelledby="wizyta-title"
      className="max-w-5xl mx-auto pt-8"
    >
      <div className="text-center mb-6">
        <h2
          id="wizyta-title"
          className="text-[var(--c-primary)] font-ultra tracking-wide text-base md:text-2xl"
        >
          Jak wygląda wizyta na Ranczu Patataj?
        </h2>
        <p className="font-curier text-xs md:text-base mt-2">
          Każda wizyta jest trochę inna zależy od pory roku, pogody i Waszych
          oczekiwań ale najczęściej przebiega według podobnego, spokojnego
          rytmu.
        </p>
      </div>

      <div className="font-curier text-xs md:text-base space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Spacer po ranczu poznajecie zwierzęta, ich historie i zwyczaje,
            zaglądacie w różne zakątki gospodarstwa.
          </li>
          <li>
            Bliski kontakt ze zwierzętami karmienie, głaskanie, wspólne zdjęcia,
            obserwowanie zachowań z bliska.
          </li>
          <li>
            Zajęcia tematyczne w zależności od ustaleń mogą to być warsztaty
            kulinarne, manualne lub inne.
          </li>
          <li>
            Przerwa na odpoczynek chwila na piknik, ognisko lub inna aktywność
            na zewnątrz, mozna jeszcze poprzytulać się do alpak albo zrobić
            jeszcze kilka zdjęć
          </li>
        </ul>

        <p>
          Program i tempo wizyty zawsze dostosowujemy do Was niezależnie od
          tego, czy przyjeżdżasz sam, z rodziną, znajomymi czy większą grupą.
        </p>
      </div>
    </section>
  );
};
