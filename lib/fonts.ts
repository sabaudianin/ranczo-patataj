import {
  Ultra,
  Asset,
  Rubik_Moonrocks,
  Playwrite_PL,
  Poppins,
  Amatic_SC,
} from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const ultra = Ultra({
  variable: "--font-ultra",
  subsets: ["latin"],
  weight: "400",
});
export const asset = Asset({
  variable: "--font-asset",
  subsets: ["latin"],
  weight: ["400"],
});

export const moonrock = Rubik_Moonrocks({
  variable: "--font-moonrock",
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
