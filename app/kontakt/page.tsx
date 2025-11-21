import React from "react";

export default function Contact() {
  return (
    <section className="grid place-items-center py-32">
      <div></div>
      <h2 className="p-2 text-xl font-poppins font-semibold text-center">
        Gospodarstwo Edukacyjne - RANCZO PATATAJ
      </h2>
      <h3 className="p-4">Tylko 45 minut od Warszawy !!</h3>
      <address>
        <p>Jastrzębia Stara 9, Mogielnica, Polska</p>
        <p className="text-center p-2">tel: 507526916</p>
      </address>
      <h3 className="p-2 text-xl font-poppins font-semibold">
        Znajdz nas na mapie:
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.053794512001!2d20.75453567767068!3d51.67715837185244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471904e4c6dda33f%3A0x62b7aa2c83ef1bda!2sJastrz%C4%99bia%20Stara%209%2C%2005-640%20Jastrz%C4%99bia%20Stara!5e0!3m2!1spl!2spl!4v1763727884546!5m2!1spl!2spl"
        width="full"
        height="350"
        loading="lazy"
        className="rounded"
      ></iframe>
    </section>
  );
}
