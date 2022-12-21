export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
  value: string;
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: IconsProps;
  title: string;
}

export interface ChipProps {
  value: string;
}

export interface IconProps {
  icon: IconsProps;
  width: number;
  height: number;
  alt: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  title?: string;
  checked: boolean;
}

export interface TaskProps {
  description: string;
  completed: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTaskDelete: () => void;
}

export type TaskObjectProps = Pick<TaskProps, "description">;
export type TaskListProps = Pick<TaskProps, "description" | "completed">;

export type IconsProps = "plus" | "trash" | "checkbox" | "checkboxChecked";
