# Hops Beer — Link-in-bio

Página de links (estilo Linktree) do Hops Beer, em React + Vite.

## Estrutura

```
hopsbeerlink/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # ponto de entrada
    ├── App.jsx                # componente raiz
    ├── pages/
    │   └── Home.jsx           # monta a página com todos os blocos
    ├── components/
    │   ├── Header.jsx         # logo, nome, bio, endereço
    │   ├── PrimaryActions.jsx # botões iFood / WhatsApp
    │   ├── MenuCards.jsx      # cards dos cardápios (Drive)
    │   ├── MoreLinks.jsx      # site e avaliação no Google
    │   ├── SocialLinks.jsx    # ícones de redes sociais
    │   └── Footer.jsx
    ├── styles/
    │   └── hops-beer.css      # estilos, escopados em `.hops-beer-root`
    └── assets/
        └── hops-logo.png      # logo oficial
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/`, pronta para publicar (Vercel, Netlify, GitHub Pages etc.).

## Atualizar links

Cada componente em `src/components/` guarda as URLs no topo do arquivo,
como constantes (`IFOOD_URL`, `WHATSAPP_URL`, etc.) — troque ali quando o
link mudar.
