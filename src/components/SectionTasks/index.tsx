import { Task } from "src/components/Task";
import { TextField } from "src/components/TextField";
import { TaskListProps, TaskObjectProps } from "src/interfaces";
import { useEffect, useMemo, useState } from "react";
import { Button } from "src/components/Button";
import { Chip } from "src/components/Chip";
import Image from "next/image";

const initialTaskState = {
  description: "",
};

const initialTaskProgressState = {
  completed: 0,
  total: 0,
  progress: "0 de 0",
};

export const SectionTasks = () => {
  const [task, setTask] = useState<TaskObjectProps>(initialTaskState);
  const [taskProgress, setTaskProgress] = useState(initialTaskProgressState);

  const [tasks, setTasks] = useState<TaskListProps[]>([]);

  const createTask = () => {
    const newTask = {
      ...task,
      completed: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    setTask(initialTaskState);
  };

  const toggleTaskCompleted = (index: number, completed: boolean) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !completed;
    setTasks(newTasks);
  };

  const onTaskDelete = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const onDescriptionChange = (target: HTMLInputElement) => {
    const description = target.value;
    setTask({ description });
  };

  useMemo(() => {
    const taskProgress = tasks.reduce(
      (acc, { completed }) => {
        if (completed) acc.completed += 1;
        acc.progress = `${acc.completed} de ${acc.total}`;
        return acc;
      },
      { ...initialTaskProgressState, total: tasks.length }
    );
    setTaskProgress(taskProgress);
  }, [tasks]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) setTasks(JSON.parse(tasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="flex min-h-[calc(100vh-160px)] flex-col items-center bg-gray-600 pb-6">
      <aside className="-mt-7 flex w-2/5 justify-center gap-6">
        <TextField
          title="Adicione uma nova tarefa"
          value={task.description}
          onKeyDown={({ key }) => key === "Enter" && createTask()}
          onChange={({ target }) =>
            onDescriptionChange(target as HTMLInputElement)
          }
        />

        <Button title="Criar" icon="plus" onClick={createTask} />
      </aside>

      <div className="mt-16 w-2/5">
        <header className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <h6 className="text-sm font-bold text-blue">Tarefas Criadas</h6>
            <Chip value={String(taskProgress.total)} />
          </div>
          <div className="flex items-center gap-3">
            <h6 className="text-sm font-bold text-purple">Concluídas</h6>
            <Chip value={taskProgress.progress} />
          </div>
        </header>

        {tasks.length === 0 && (
          <div className="mt-3 h-56 w-full">
            <img src="/empty.png" alt="Não há tarefas" />
          </div>
        )}

        {tasks.length > 0 && (
          <main className="mt-3 flex flex-col gap-3">
            {tasks.map((taskProps, index) => {
              const { completed } = taskProps;

              return (
                <Task
                  key={index}
                  onChange={() => toggleTaskCompleted(index, completed)}
                  onTaskDelete={() => onTaskDelete(index)}
                  {...taskProps}
                />
              );
            })}
          </main>
        )}
      </div>
    </section>
  );
};
