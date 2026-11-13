# 🚀 byMota

> Portfólio em formato de **dashboard**: organizado em cards, como um painel de ERP, em vez de uma landing page genérica.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-9-007FFF?logo=mui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

---

## 📑 Sumário

- [✨ Funcionalidades](#-funcionalidades)
- [🧰 Stack](#-stack)
- [⚡ Começando](#-começando)
- [📜 Scripts](#-scripts)
- [🗂️ Estrutura de pastas](#️-estrutura-de-pastas)
- [🎨 Estilização](#-estilização)
- [🌐 Internacionalização](#-internacionalização)
- [📝 Editando o conteúdo](#-editando-o-conteúdo)
- [🧪 Labs](#-labs)
- [🔒 Segurança](#-segurança)
- [☁️ Deploy](#️-deploy)
- [🗺️ Roadmap](#️-roadmap)

---

## ✨ Funcionalidades

- 📊 **Layout de dashboard**: sidebar, topbar com breadcrumb e grid de cards responsivo
- 🏗️ **Diagrama da arquitetura** do ERP que mantenho (dispositivos → serviços → RabbitMQ/Hangfire → dados)
- 🧩 Cards de **perfil, status, métricas, módulos do ERP, stack, experiência, princípios e contato**
- 🌗 **Tema dark/light** com troca instantânea e sem flash ao recarregar
- 🇧🇷 🇺🇸 **PT/EN** com troca na topbar e idioma salvo no navegador
- 📱 **Responsivo**: sidebar fixa no desktop e menu lateral no mobile
- 🧪 Página **Labs** com listagem dinâmica de projetos, pronta para demos em iframe

## 🧰 Stack

| Camada | Tecnologia |
| --- | --- |
| ⚛️ UI | React 19 + React Compiler |
| 🟦 Linguagem | TypeScript 6 |
| ⚡ Build | Vite 8 |
| 🧱 Componentes | MUI 9 + MUI Icons |
| 🎨 Estilos | Tailwind CSS 4 |
| 🧭 Rotas | React Router 8 |
| 🔤 Fontes | Inter + JetBrains Mono (self-hosted) |
| 📦 Pacotes | pnpm |

## ⚡ Começando

**Pré-requisitos:** Node.js 24+ e pnpm.

```bash
git clone git@github.com:JPMota25/byMota.git
cd byMota
pnpm install
pnpm dev
```

Acesse 👉 http://localhost:5173

## 📜 Scripts

| Comando | O que faz |
| --- | --- |
| `pnpm dev` | 🔥 Servidor de desenvolvimento com HMR |
| `pnpm build` | 🏗️ Checagem de tipos + build de produção em `dist/` |
| `pnpm preview` | 👀 Serve o build localmente |
| `pnpm lint` | 🧹 ESLint |

## 🗂️ Estrutura de pastas

```
src/
├── main.tsx                  # Providers (MUI, tema, idioma) + RouterProvider
├── router/
│   ├── index.tsx             # Definição das rotas
│   └── routes.ts             # Paths e itens do menu lateral
├── pages/
│   ├── dashboard/
│   │   ├── index.tsx         # Só compõe a tela
│   │   └── forms/
│   │       ├── types.ts      # Tipos da tela
│   │       ├── validations.ts# Regras e validações
│   │       ├── data.ts       # Conteúdo da tela ({ pt, en })
│   │       └── components/   # Componentes da tela
│   ├── labs/                 # Mesmo padrão: index.tsx + forms/
│   └── not-found/
└── shared/
    ├── components/           # Componentes genéricos (DashboardCard, StatTile, layout...)
    ├── constants/            # Links pessoais
    ├── i18n/                 # Dicionários pt/en, LocaleProvider, useLocale
    └── theme/                # Tema MUI + tailwind.css
```

📌 **Padrão de páginas:** cada página tem apenas o `index.tsx` na raiz. Tipos, validações, dados e componentes ficam em `forms/`.

## 🎨 Estilização

- ✅ Toda a estilização usa **classes Tailwind** (`className`). O projeto não usa `sx`, `styled` nem CSS por componente.
- 📄 O único arquivo CSS é `src/shared/theme/tailwind.css`.
- 🥇 O MUI injeta seus estilos na camada `@layer mui`, abaixo de `utilities`. Por isso as classes Tailwind **sempre têm prioridade**, sem `!important`.
- 🎯 As cores do Tailwind apontam para as variáveis CSS do tema MUI, então o dark mode troca os dois juntos:

| Classe | Origem |
| --- | --- |
| `bg-bg` / `bg-surface` | `palette.background` |
| `text-fg` / `text-muted` | `palette.text` |
| `border-line` | `palette.divider` |
| `text-primary`, `bg-success/10`... | `palette.primary`, `palette.success`... |

## 🌐 Internacionalização

- 📖 Os textos da interface ficam em `src/shared/i18n/pt.ts` e `en.ts`. O `en.ts` é tipado a partir do `pt.ts`, então uma chave sem tradução **gera erro de compilação**.
- 🧾 O conteúdo das páginas usa `{ pt, en }` em cada campo, resolvido com `l(...)` do hook `useLocale()`.
- 💾 O idioma inicial vem do `localStorage` ou, na primeira visita, do idioma do navegador.

## 📝 Editando o conteúdo

| O quê | Onde |
| --- | --- |
| 👤 Perfil, métricas, módulos, stack, experiência | `src/pages/dashboard/forms/data.ts` |
| 🔗 GitHub, LinkedIn, e-mail, CV | `src/shared/constants/socialLinks.ts` (vazio = oculto) |
| 🧪 Projetos do Labs | `src/pages/labs/forms/data.ts` |

## 🧪 Labs

Para incluir um projeto, adicione um item em `src/pages/labs/forms/data.ts`. Ele aparece na listagem sem mexer em componente.

```ts
{
  id: 'meu-projeto',
  name: 'Meu Projeto',
  description: { pt: 'Descrição', en: 'Description' },
  stack: ['.NET', 'React'],
  repoUrl: 'https://github.com/JPMota25/meu-projeto',
  demoUrl: 'https://demo.exemplo.com',
  embeddable: true, // abre a demo em iframe dentro do portfólio
}
```

⚠️ Com `embeddable: true`, adicione o domínio da demo em `frame-src` no `vercel.json`. Sem isso, a CSP bloqueia o iframe.

## 🔒 Segurança

Boas práticas inspiradas no **OWASP**:

- 🛡️ **Headers** no `vercel.json`: CSP restritiva, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` e COOP
- 🚫 **Nenhum script inline**: o script que aplica o tema antes do carregamento fica em `public/theme-init.js`, para funcionar com `script-src 'self'`
- 🔗 **Links externos** sempre com `rel="noopener noreferrer"`
- ✔️ **URLs validadas** (apenas `https:`) antes de virarem `href` ou `src` de iframe
- 📦 **iframes em sandbox**, com `referrerPolicy="no-referrer"`

## ☁️ Deploy

Deploy na **Vercel**:

1. Importe o repositório na Vercel. O preset **Vite** é detectado automaticamente.
2. Build: `pnpm build` · Saída: `dist`
3. O `vercel.json` já cuida do rewrite de SPA e dos headers de segurança.

## 🗺️ Roadmap

- [x] Dashboard com cards, tema dark/light e PT/EN
- [x] Página Labs com listagem dinâmica
- [ ] Foto de perfil
- [ ] Primeiros projetos interativos no Labs (iframes)
- [ ] Code splitting por rota
- [ ] Domínio próprio

---

<p align="center">Feito com ☕ por <a href="https://github.com/JPMota25">JP Mota</a></p>
