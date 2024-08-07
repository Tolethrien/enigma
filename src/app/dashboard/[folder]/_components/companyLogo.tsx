import type { Logos } from "@/utils/logos";
import logos from "@/utils/logos";
import Image from "next/image";

interface Props {
  name: Logos;
  isSelected: boolean;
  onClick: () => void;
}
export default function CompantyLogo({ name, isSelected, onClick }: Props) {
  return (
    <Image
      src={logos[name]}
      alt="logo icon"
      className={`${isSelected ? "scale-110 shadow-iconShadow" : "brightness-75"}`}
      onClick={onClick}
    />
  );
}
