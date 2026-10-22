import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  hasAnyTask: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, changes: Partial<Pick<Task, "title" | "priority">>) => void;
}

export default function TaskList({ tasks, hasAnyTask, ...handlers }: Props) {
  if (tasks.length === 0) {
    return (
      <div className="empty">
        {hasAnyTask
          ? "Nenhuma tarefa corresponde ao filtro ou à busca. Ajuste os critérios para ver mais."
          : "Você ainda não tem tarefas. Adicione a primeira acima para começar."}
      </div>
    );
  }

  return (
    <ul className="list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} {...handlers} />
      ))}
    </ul>
  );
}
