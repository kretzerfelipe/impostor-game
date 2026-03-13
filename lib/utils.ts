import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFontWeightClass({
  weight,
  italic,
}: {
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  italic?: boolean;
}) {
  const fontWeight = weight || 400;
  const italicSuffix = italic ? "Italic" : "";
  return `font-[Poppins-${getFontWeightName(fontWeight)}${italicSuffix}]`;
}

function getFontWeightName(weight: number) {
  switch (weight) {
    case 100:
      return "Thin";
    case 200:
      return "ExtraLight";
    case 300:
      return "Light";
    case 400:
      return "Regular";
    case 500:
      return "Medium";
    case 600:
      return "SemiBold";
    case 700:
      return "Bold";
    case 800:
      return "ExtraBold";
    case 900:
      return "Black";
    default:
      return "Regular";
  }
}
