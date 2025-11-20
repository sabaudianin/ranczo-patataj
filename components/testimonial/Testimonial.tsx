type Opinion = {
  text: string;
  name: string;
  color: string;
  font?: string;
};

const OPINIONS: Opinion[] = [
  {
    text: "Ranczo Patataj to wspaniałe miejsce dla dzieciaków. Ogromny plus za dużą, otwartą przestrzeń, gdzie dzieciaki mogą się wybiegać. Zwierzęta są bardzo zadbane i lubią kontakt z ludźmi. Warsztaty kulinarne i artystyczne to strzał w dziesiątkę i widać było, że dzieciaki były zadowolone. Pan Właściciel to wspaniały człowiek, który stara się żeby każdy dobrze się tam czuł. Duża polecajka! Nasza klasa na pewno wróci ☺️",
    name: "Katarzyna K",
    color: "bg-red-300",
    font: "font-playwrite",
  },
  {
    text: "Rewelacyjne miejsce zarówno dla wycieczek szkolnych, jak i indywidualnych wypadów. Zwierzęta udomowione, gospodarze mili i życzliwie nastawieni do gości. Czas płynie szybko i aktywnie. Zajęcia dla dzieci - pełen profesjonalizm. Gorąco polecam. Rewelacja!!!",
    name: "Ewelina P",
    color: "bg-blue-300",
    font: "font-playwrite tracking-widest",
  },
  {
    text: "Gorąco polecam Ranczo Patataj!Super rodzinna atmosfera i przecudowny gospodarze ☺️Idealne miejsce na wypoczynek z rodziną. Dzieci bardzo zadowolone z możliwości karmienia i przytulania zwierzątek oraz warsztatów kulinarnych i manualnych ❤️Cisza, spokój, duża przestrzeń.Idealne miejsce na wycieczki szkolne i przedszkolne oraz imprezy okolicznościowe.Jeszcze raz bardzo dziękujemy za miło spędzony dzień i jeszcze nie raz wrócimy 🥰",
    name: "Kamila K",
    color: "bg-green-300",
    font: "font-amatic font-2xl tracking-widest font-bold",
  },
  {
    text: "SUPER miejsce.Wszystko nowe i czyste.Zajęcia edukacyjne kulinarne.Zabawy ze zwierzętami.Klimat z dala od miasta.Fantastyczni gospodarze.",
    name: "Marek J",
    color: "bg-yellow-300",
    font: "font-playwrite tracking-widest",
  },
  {
    text: "Urokliwe miejsce w zaciszu pól i lasów.Zwierzęta nauczone pracy z dziećmi, bardzo przyjaźnie nastawione(lama rozdaje buziaki).Warsztaty cieszyły się ogromnym zainteresowaniem zarówno dzieci jak i rodziców 😊Polecam to miejsce wszystkim. ",
    name: "Tomasz G",
    color: "bg-indigo-300",
    font: "font-amatic font-2xl tracking-[.15em] font-bold",
  },
];

export const Testimonial = () => {
  return (
    <section className="p-1 max-w-7xl">
      <h2 className="text-center font-ultra text-2xl py-8">
        Nasi goście o nas :{" "}
      </h2>
      <div className="grid gap-2">
        {OPINIONS.map((opinion) => (
          <div
            key={opinion.name}
            className={`border rounded-xl ${opinion.font} shadow-md p-4`}
          >
            <p className={`indent-1  text-xs`}>
              &apos;&apos; {opinion.text} &apos;&apos;
            </p>
            <div className="flex items-center gap-4 p-4">
              {" "}
              <span
                className={`${opinion.color} h-6 w-6 rounded-full font-poppins font-bold text-center `}
              >
                {opinion.name[0]}
              </span>
              <span>{opinion.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
