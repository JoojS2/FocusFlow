import { useState } from "react";
import { PRIORITY_LABEL, type Priority, type Task } from "../types/task";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, changes: Partial<Pick<Task, "title" | "priority">>) => void;
}

export default function TaskItem({ task, onToggle, onDelete, onUpdate }: Props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState<Priority>(task.priority);

  const save = () => {
    if (!title.trim()) return;
    onUpdate(task.id, { title: title.trim(), priority });
    setEditing(false);
  };

  const cancel = () => {
    setTitle(task.title);
    setPriority(task.priority);
    setEditing(false);
  };

  if (editing) {
    return (
      <li className={`task p-${task.priority}`}>
        <input
          className="input grow"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") save();
            if (e.key === "Escape") cancel();
          }}
          aria-label="Editar nome da tarefa"
        />
        <select className="input" value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
          {(Object.keys(PRIORITY_LABEL) as Priority[]).map((p) => (
            <option key={p} value={p}>
              {PRIORITY_LABEL[p]}
            </option>
          ))}
        </select>
        <button className="btn primary" onClick={save}>Salvar</button>
        <button className="btn ghost" onClick={cancel}>Cancelar</button>
      </li>
    );
  }

  return (
    <li className={`task p-${task.priority} ${task.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Concluir ${task.title}`}
      />
      <span className="title grow">{task.title}</span>
      <span className="badge">{PRIORITY_LABEL[task.priority]}</span>
      <button className="btn ghost" onClick={() => setEditing(true)}>Editar</button>
      <button className="btn ghost danger" onClick={() => onDelete(task.id)}>Excluir</button>
    </li>
  );
}
