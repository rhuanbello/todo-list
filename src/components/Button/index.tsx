import { Icon } from "src/components/Icon";
import { ButtonProps } from "src/interfaces";

export const Button = ({ title, icon, onClick }: ButtonProps) => {
  return (
    <button
      className="flex items-center gap-2 rounded-lg bg-blue-dark px-4 text-sm font-bold text-gray-100 transition-all hover:bg-purple-dark"
      onClick={onClick}
    >
      {title}

      {!!icon && <Icon icon={icon} width={30} height={30} alt="Criar" />}
    </button>
  );
};
