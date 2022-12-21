import { ChipProps } from "src/interfaces";

export const Chip = ({ value }: ChipProps) => {
  return (
    <span className="grid h-6 place-items-center rounded-full bg-gray-400 px-2 text-xs font-bold text-gray-200">
      {value}
    </span>
  );
};
