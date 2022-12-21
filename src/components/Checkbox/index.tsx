import { Icon } from "src/components/Icon";
import { CheckboxProps } from "src/interfaces";

export const Checkbox = ({ title, checked, ...props }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        className="absolute z-10 h-5 w-5 cursor-pointer opacity-0"
        {...props}
      />
      <div className="relative">
        <Icon
          icon={checked ? "checkboxChecked" : "checkbox"}
          width={24}
          height={24}
          alt="Checkbox"
        />
      </div>

      {!!title && <label htmlFor="checkbox">{title}</label>}
    </div>
  );
};
