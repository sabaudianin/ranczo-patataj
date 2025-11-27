import {
  Ultra,
  Playwrite_PL,
  Amatic_SC,
  Special_Elite,
  Courier_Prime,
} from "next/font/google";

export const ultra = Ultra({
  variable: "--font-ultra",
  subsets: ["latin"],
  weight: "400",
});
export const curier = Courier_Prime({
  variable: "--font-curier",
  subsets: ["latin"],
  weight: ["400"],
});

export const special = Special_Elite({
  variable: "--font-special",
  subsets: ["latin"],
  weight: "400",
});
export const amatic = Amatic_SC({
  variable: "--font-amatic",
  subsets: ["latin"],
  weight: "400",
});
export const playwrite = Playwrite_PL({
  variable: "--font-playwrite",
  weight: "400",
});
