interface Props {
  theme: "claro" | "escuro";
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: Props) {
  return (
    <header className="header">
      <h1 className="brand">FocusFlow</h1>
      <button className="btn ghost" onClick={onToggleTheme} aria-label="Alternar tema">
        {theme === "claro" ? "Tema escuro" : "Tema claro"}
      </button>
    </header>
  );
}
