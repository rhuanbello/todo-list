import { TextFieldProps } from "src/interfaces";

export const TextField = ({ title, value, ...props }: TextFieldProps) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={title}
      className="w-full rounded-lg bg-gray-500 p-4 text-gray-300 outline-none"
      {...props}
    />
  );
};
