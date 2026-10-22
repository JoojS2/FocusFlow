import { useCallback, useEffect, useMemo, useState } from "react";
import type { Priority, Task } from "../types/task";

const STORAGE_KEY = "focusflow:tasks";

function load(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Task[]) : [];
  } catch {
    return [];
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      /* armazenamento indisponível: segue só em memória */
    }
  }, [tasks]);

  const addTask = useCallback((title: string, priority: Priority) => {
    const clean = title.trim();
    if (!clean) return;
    setTasks((prev) => [
      { id: crypto.randomUUID(), title: clean, priority, completed: false, createdAt: Date.now() },
      ...prev,
    ]);
  }, []);

  const updateTask = useCallback((id: string, changes: Partial<Pick<Task, "title" | "priority">>) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...changes } : t)));
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((t) => t.completed).length;
    return {
      total,
      done,
      pending: total - done,
      highPending: tasks.filter((t) => !t.completed && t.priority === "alta").length,
      rate: total ? Math.round((done / total) * 100) : 0,
    };
  }, [tasks]);

  return { tasks, stats, addTask, updateTask, toggleTask, deleteTask };
}
