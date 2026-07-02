import { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as FiIcons from "react-icons/fi";
import * as TbIcons from "react-icons/tb";

const iconLibraries: Record<string, IconType> = {
  ...FaIcons,
  ...SiIcons,
  ...FiIcons,
  ...TbIcons,
};

export function getIcon(name: string): IconType | null {
  return iconLibraries[name] ?? null;
}