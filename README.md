# Atelier Cris Passos

## 📁 Estrutura de ficheiros

```
ateliermaldonado/
├── index.html        → Página principal (Work / portfólio)
├── about.html        → Página About
├── css/
│   └── style.css     → Todos os estilos
├── images/           → Pasta para as imagens dos projetos
└── README.md
```

## 🚀 Como abrir no VS Code

1. Abre o VS Code
2. **File → Open Folder...** e seleciona a pasta `ateliermaldonado`
3. Para ver o site no browser: instala a extensão **Live Server** no VS Code e clica em **"Go Live"** no canto inferior direito

## 🖼️ Adicionar imagens

Os projetos têm placeholders bege enquanto não tiveres as imagens. Para adicionar:

1. Coloca os ficheiros de imagem na pasta `/images/`
2. Os nomes esperados estão no atributo `src` de cada `<img>` no HTML, por exemplo:
   - `images/caixa_02.jpg` → Hopes & Dreams
   - `images/BLH_2.jpg` → Hotel Blue
   - `images/MarianaSabido-14.jpg` → Foto de Inês Maldonado (about.html)

Se quiseres usar imagens com outros nomes, basta alterar o atributo `src` no HTML.

## ✏️ Personalização rápida

### Mudar cores
Em `css/style.css`, edita as variáveis no topo:
```css
:root {
  --color-bg:    #ffffff;   /* fundo */
  --color-text:  #1a1a1a;   /* texto principal */
  --color-light: #888888;   /* texto secundário */
}
```

### Mudar fontes
As fontes vêm do Google Fonts. Podes alterar a linha `@import` no topo do CSS e as variáveis:
```css
--font-display: 'Cormorant Garamond', serif;
--font-body:    'Raleway', sans-serif;
```

### Adicionar/remover projetos
Em `index.html`, cada projeto é um bloco `<article class="project-card">`. Podes duplicar, editar ou apagar à vontade.

## 🌐 Tipografia

- **Display / títulos**: Cormorant Garamond (serif elegante)
- **Corpo / navegação**: Raleway (sans-serif limpo)

Ambas carregadas via Google Fonts — requerem ligação à internet.
