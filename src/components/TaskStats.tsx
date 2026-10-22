interface Props {
  stats: { total: number; done: number; pending: number; highPending: number; rate: number };
}

export default function TaskStats({ stats }: Props) {
  const items = [
    { label: "Total", value: stats.total },
    { label: "Pendentes", value: stats.pending },
    { label: "Concluídas", value: stats.done },
    { label: "Alta prioridade pendente", value: stats.highPending },
  ];

  return (
    <section className="stats" aria-label="Estatísticas de produtividade">
      <div className="stat-row">
        {items.map((i) => (
          <div key={i.label} className="stat">
            <strong>{i.value}</strong>
            <span>{i.label}</span>
          </div>
        ))}
      </div>
      <div className="bar" role="progressbar" aria-valuenow={stats.rate} aria-valuemin={0} aria-valuemax={100}>
        <div className="bar-fill" style={{ width: `${stats.rate}%` }} />
      </div>
      <p className="muted">{stats.rate}% das tarefas concluídas</p>
    </section>
  );
}
