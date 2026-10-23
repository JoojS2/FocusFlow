# FocusFlow

**Organize suas tarefas. Simplifique sua rotina. Foque no que importa.**

O **FocusFlow** é uma aplicação web de gerenciamento de tarefas desenvolvida com React, TypeScript e Vite. O projeto tem como objetivo facilitar a organização das atividades diárias por meio de uma interface intuitiva, componentes reutilizáveis e funcionalidades que ajudam a acompanhar o progresso das tarefas.

<p align="center">
  <a href="https://github.com/JoojS2/FocusFlow">
    <img src="https://img.shields.io/badge/GitHub-Repositório-181717?style=for-the-badge&logo=github" alt="Repositório no GitHub">
  </a>
  <img src="https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-Tipagem-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-Desenvolvimento-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

## Sobre o projeto

O FocusFlow foi desenvolvido como um projeto de prática em desenvolvimento front-end, explorando a construção de interfaces modernas com React e TypeScript.

A aplicação reúne funcionalidades de gerenciamento de tarefas em um único ambiente, permitindo organizar atividades, consultar estatísticas e personalizar a aparência da interface.

## Funcionalidades

- **Gerenciamento de tarefas:** adicionar, editar e excluir tarefas.
- **Filtros:** visualizar tarefas de acordo com seu estado.
- **Pesquisa:** localizar tarefas pelo texto.
- **Estatísticas:** acompanhar o progresso das atividades.
- **Tema personalizável:** alternar entre opções de aparência.
- **Interface baseada em componentes:** código dividido em partes reutilizáveis para facilitar a manutenção.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| [React](https://react.dev/) | Construção da interface e dos componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e maior segurança no código |
| [Vite](https://vite.dev/) | Ambiente de desenvolvimento e build |
| [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) | Estilização da interface |
| [Git](https://git-scm.com/) | Controle de versão |
| [GitHub](https://github.com/) | Hospedagem do código-fonte |

## Estrutura do projeto

```text
FocusFlow/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   ├── TaskList.tsx
│   │   └── TaskStats.tsx
│   ├── hooks/
│   │   └── useTasks.ts
│   ├── types/
│   │   └── task.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

### Organização do código

- `components/`: componentes responsáveis pelas diferentes partes da interface.
- `hooks/`: lógica reutilizável relacionada ao gerenciamento das tarefas.
- `types/`: definição dos tipos utilizados na aplicação.
- `App.tsx`: componente principal e integração das funcionalidades.
- `index.css`: estilos globais da aplicação.
- `main.tsx`: ponto de entrada da aplicação React.

## Como executar o projeto

### Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) — versão LTS recomendada.
- npm, incluído na instalação do Node.js.
- [Git](https://git-scm.com/), caso queira clonar o repositório.

### 1. Clone o repositório

```bash
git clone https://github.com/JoojS2/FocusFlow.git
```

### 2. Entre na pasta do projeto

```bash
cd FocusFlow
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Ou inicialize direto no site

```bash
https://focus-flow-self-two.vercel.app/
```

O Vite exibirá no terminal o endereço local para acessar a aplicação no navegador, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Permite visualizar localmente a versão de produção |

Para verificar se a aplicação compila corretamente, execute:

```bash
npm run build
```

## Objetivos de desenvolvimento

Este projeto permite praticar conceitos importantes do desenvolvimento front-end, como:

- Criação de componentes reutilizáveis.
- Organização e separação de responsabilidades.
- Uso de hooks no React.
- Tipagem com TypeScript.
- Gerenciamento de estado.
- Estilização com CSS.
- Utilização de Git e GitHub para controle de versão.

## Melhorias futuras

Algumas possibilidades de evolução do FocusFlow incluem:

- Implementação de categorias e prioridades para as tarefas.
- Adição de datas de vencimento e lembretes.
- Criação de testes automatizados.
- Aprimoramento da acessibilidade.
- Publicação da aplicação em uma plataforma de hospedagem.

## Contribuição

Sugestões e melhorias são bem-vindas!

1. Faça um fork do projeto.
2. Crie uma branch para sua alteração.
3. Faça suas modificações e commits.
4. Envie um pull request com a descrição das mudanças.

## Autor

**Jorge Luiz da Silva Magalhães**

Estudante de Ciência da Computação, interessado em desenvolvimento de software e tecnologias web.

- GitHub: [@JoojS2](https://github.com/JoojS2)
- Projeto: [FocusFlow](https://github.com/JoojS2/FocusFlow)

---

<p align="center">
  Desenvolvido com dedicação para praticar e evoluir no desenvolvimento web.
</p>
