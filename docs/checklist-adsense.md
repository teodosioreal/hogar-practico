# Checklist de aprovação no Google AdSense — Hogar Práctico

> Mesmo checklist do TeoMundo, começando do zero. **Regra:** ao final de cada tarefa, o Claude atualiza este arquivo e lembra o usuário do **próximo passo** e de **quanto falta para pedir a aprovação**.
>
> Legenda: ✅ pronto · 🟡 em andamento · ⬜ falta · ➖ não se aplica / opcional

Última atualização: 15 de outubro de 2026

## Estrutura do site

| Item | Status | Observação |
|---|---|---|
| Menu com pelo menos 5 categorias e todas as páginas obrigatórias | 🟡 | Páginas obrigatórias prontas. 1 de 5 categorias (`ahorro`). |
| Página "Sobre" | ✅ | /sobre-nosotros/ |
| Política de Privacidade (obrigatória) | ✅ | /politica-de-privacidad/ (RGPD) + /politica-de-cookies/ |
| Página "Contato" | 🟡 | Existe (/contacto/), falta o **e-mail**. Fica fora do Google até ter e-mail. |
| Termos de Uso | 🟡 | No /aviso-legal/. Faltam os **dados do titular**. |
| Página "Transparência" | ✅ | /politica-editorial/ + /equipo-editorial/ |
| Link visível para a Home | ✅ | Logo + breadcrumb "Inicio". |
| Links para redes sociais | ⬜ | Preencher `social` em `src/data/site.ts`. |
| Comentários | ➖ | Desligados, como no TeoMundo. |
| Artigos relacionados no final dos posts | ✅ | Blocos de leitura prontos (aparecem quando houver artigos). |

## Conteúdo

| Item | Status | Observação |
|---|---|---|
| Pelo menos 50 artigos publicados | 🟡 | 2 de 50 (ambos em `ahorro`, sobre a factura de la luz). |
| Cada categoria com no mínimo 6 artigos | 🟡 | `ahorro`: 2 de 6. |
| Assinatura do autor | ✅ | "Equipo editorial de Hogar Práctico" com selo próprio e página /equipo-editorial/. |
| Imagens nos artigos | 🟡 | Artigos com ilustração própria (`src/assets/articulos/`). Para fotos, criar o secret `UNSPLASH_ACCESS_KEY`. |

## Técnico e presença digital

| Item | Status | Observação |
|---|---|---|
| Template leve e responsivo, em espanhol | ✅ | Mesmo template do TeoMundo, com logo e cores próprias. |
| Domínio próprio | ⬜ | Confirmar em `src/data/domain.mjs` (hoje `hogarpractico.es`, a confirmar). |
| Site no ar com HTTPS | ⬜ | Hostinger + GitHub. |
| Search Console + sitemap | ⬜ | `sitemap-index.xml`. |
| Analytics / Tag Manager | ⬜ | IDs em `site.ts`. |
| AdSense no site + ads.txt | ⬜ | `adsense.client` em `site.ts`. |
| Aviso de cookies (CMP do Google) | ⬜ | Publicar a mensagem RGPD no AdSense para este site. |
| Dados do titular | ⬜ | `src/data/owner.mjs`. |
