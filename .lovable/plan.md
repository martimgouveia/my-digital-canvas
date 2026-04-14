

# Plano: Recriar o portfólio do Martim Gouveia em React

## Estrutura do site

6 páginas/rotas a criar:

| Rota | Descrição |
|------|-----------|
| `/` | Home — hero fullscreen com background, nome, ícones sociais, links FILME/FOTOGRAFIA/ANTIGLIFO |
| `/filme` | Grid 2 colunas com projetos: Flores, KAEL, mind the gap, Até a Maré Subir, ilha |
| `/fotografia` | Grid 2 colunas com projetos: Samouco, ATEMPORAL, Connect Fest |
| `/antiglifo` | Título + slogan + descrição + grid 3 colunas com fotos (links para subpáginas como 0001) |
| `/antiglifo/0001` | Subpágina: título + texto longo à esquerda + imagem à direita |
| `/filme/ilha` | Subpágina: título + texto à esquerda + vídeo YouTube à direita |

## Design

- Fundo preto (`#000`), texto branco, fonte Arial/Helvetica
- Header fixo com nav links (FILME, FOTOGRAFIA, ANTIGLIFO) à esquerda e "martim gouveia" ao centro
- Hover nos projetos: overlay escuro com título e ano
- Estilo minimalista, sem bordas nem cores fortes

## Implementação técnica

1. **Layout partilhado** — componente `Header` com navegação fixa (reutilizado em todas as páginas exceto home)
2. **Home (Index)** — hero fullscreen com imagem de fundo placeholder, nome centrado, ícones sociais (Instagram, YouTube, email), links de secção
3. **Filme** — grid 2 colunas, cada item com imagem placeholder + overlay hover (título + ano)
4. **Fotografia** — mesma estrutura do Filme, com projetos diferentes
5. **Antiglifo** — título "antiglifo", slogan em itálico, texto descritivo, grid 3 colunas com imagens clicáveis
6. **Subpágina 0001** — layout flex: texto à esquerda (60%) + imagem à direita (40%)
7. **Subpágina Ilha** — layout flex: texto à esquerda (40%) + iframe YouTube à direita (60%)
8. **CSS** — tema escuro via variáveis CSS, override do design system para fundo preto
9. **Rotas** — adicionar todas as rotas no App.tsx

## Nota sobre imagens

As imagens dos projetos são locais (do computador do utilizador). Vou usar placeholders cinza escuro com o nome do projeto. Depois o utilizador pode substituir pelas imagens reais fazendo upload.

## Ficheiros a criar/modificar

- `src/components/Header.tsx` — nav fixa
- `src/pages/Index.tsx` — home hero
- `src/pages/Filme.tsx` — grid de filmes
- `src/pages/Fotografia.tsx` — grid de fotografia
- `src/pages/Antiglifo.tsx` — página antiglifo
- `src/pages/Antiglifo0001.tsx` — subpágina 0001
- `src/pages/Ilha.tsx` — subpágina ilha
- `src/App.tsx` — rotas
- `src/index.css` — tema escuro global

