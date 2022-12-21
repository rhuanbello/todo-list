import { Checkbox } from "src/components/Checkbox";
import { Icon } from "src/components/Icon";
import { TaskProps } from "src/interfaces";

export const Task = ({
  description,
  completed,
  onChange,
  onTaskDelete,
}: TaskProps) => {
  const limitText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }

    return text;
  };

  return (
    <div
      className={`flex h-20 w-full items-start gap-4 bg-gray-500 p-4 ${
        completed ? "text-gray-300" : "text-gray-100"
      } transition-all hover:bg-gray-400`}
    >
      <Checkbox checked={completed} onChange={onChange} />

      <p className={`w-11/12 ${completed && "line-through"}`}>
        {limitText(description, 130)}
      </p>

      <div className="ml-auto">
        <Icon
          icon="trash"
          alt="Remover Tarefa"
          width={24}
          height={24}
          onClick={onTaskDelete}
        />
      </div>
    </div>
  );
};
