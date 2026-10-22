import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import { useTasks } from "./hooks/useTasks";
import type { Filter } from "./types/task";

type Theme = "claro" | "escuro";
const THEME_KEY = "focusflow:theme";

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "claro" || saved === "escuro") return saved;
  } catch {
    /* ignora */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro";
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "pendentes", label: "Pendentes" },
  { value: "concluidas", label: "Concluídas" },
];

export default function App() {
  const { tasks, stats, addTask, updateTask, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState<Filter>("todas");
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignora */
    }
  }, [theme]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tasks.filter((t) => {
      const byStatus = filter === "todas" || (filter === "concluidas" ? t.completed : !t.completed);
      return byStatus && t.title.toLowerCase().includes(q);
    });
  }, [tasks, filter, query]);

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={() => setTheme(theme === "claro" ? "escuro" : "claro")} />
      <TaskStats stats={stats} />
      <TaskForm onAdd={addTask} />
      <div className="toolbar">
        <div className="tabs" role="group" aria-label="Filtrar por status">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`tab ${filter === f.value ? "active" : ""}`}
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <input
          className="input grow"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar tarefa pelo nome"
          aria-label="Buscar tarefa pelo nome"
        />
      </div>
      <TaskList
        tasks={visible}
        hasAnyTask={tasks.length > 0}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
}
