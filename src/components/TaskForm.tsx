import { useState } from "react";
import { PRIORITY_LABEL, type Priority } from "../types/task";

interface Props {
  onAdd: (title: string, priority: Priority) => void;
}

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("media");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, priority);
    setTitle("");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="input grow"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="O que precisa ser feito?"
        aria-label="Nome da tarefa"
      />
      <select
        className="input"
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        aria-label="Prioridade"
      >
        {(Object.keys(PRIORITY_LABEL) as Priority[]).map((p) => (
          <option key={p} value={p}>
            {PRIORITY_LABEL[p]}
          </option>
        ))}
      </select>
      <button className="btn primary" type="submit" disabled={!title.trim()}>
        Adicionar tarefa
      </button>
    </form>
  );
}
