import Image from "next/image";
import { IconProps } from "src/interfaces";

export const Icon = ({ icon, alt, height, width, onClick }: IconProps) => {
  const iconPath = {
    plus: "/Icons/plus.svg",
    trash: "/Icons/trash.svg",
    checkbox: "/Icons/checkbox.svg",
    checkboxChecked: "/Icons/checkbox-filled.svg",
  };

  return (
    <Image
      src={iconPath[icon]}
      width={width}
      height={height}
      alt={alt}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};
