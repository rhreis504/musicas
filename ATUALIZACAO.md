# MEU VIOLÃO — CONTROLE DE ATUALIZAÇÃO

> **FONTE ÚNICA DE VERDADE DA VERSÃO**
>
> O botão **↻ Atualizar** deve consultar este arquivo antes de carregar qualquer módulo.

## Versão publicada

- **version:** 5.16
- **build:** v516-md-controller
- **published:** 2026-10-12
- **entry:** app-5.9.html

## Módulos ativos

| Módulo | Arquivo/fonte | Revisão |
|---|---|---|
| Inicial / navegação | app-5.9.html | 5.16 |
| Acordes | app-5.9.html | 5.16 |
| Exercícios / escalas / shapes | app-5.9.html | 5.16 |
| Braço do violão | app-5.9.html | 5.16 |
| Afinador | app-5.9.html | 5.16 |
| Metrônomo | app-5.9.html | 5.16 |
| Loader / Atualizar | index.html | 5.16 |

## Regra obrigatória de publicação

1. Toda alteração funcional deve incrementar a versão neste MD.
2. A mesma versão deve existir no HTML visível.
3. O botão Atualizar lê este MD com cache-busting.
4. Se a versão/build deste MD diferir da versão carregada, o app deve fazer navegação completa com URL nova.
5. O MD prevalece sobre versão em cache, localStorage, iframe ou Service Worker.
6. O arquivo version.json fica apenas como compatibilidade; este MD é a referência principal.

## Histórico

- **5.16** — controlador MD de atualização criado; botão Atualizar passa a validar este arquivo como fonte principal.
- **5.15** — hard refresh e limpeza de cache.
- **5.13–5.14** — ajustes de layout e atualização.
- **5.10–5.12** — correções dos shapes pentatônicos.
