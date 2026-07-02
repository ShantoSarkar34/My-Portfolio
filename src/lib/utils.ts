import { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const iconLibraries: Record<string, IconType> = {
  ...FaIcons,
  ...SiIcons,
};

export function getIcon(name: string): IconType | null {
  return iconLibraries[name] ?? null;
}