# MEU VIOLÃO — CONTROLE DE ATUALIZAÇÃO

> **FONTE ÚNICA DE VERDADE DA VERSÃO**
>
> O botão **↻ Atualizar** deve consultar este arquivo antes de carregar qualquer módulo.

## Versão publicada

- **version:** 5.25
- **build:** bf942cc4
- **published:** 2026-10-12
- **entry:** app-5.9.html

## Módulos ativos

| Módulo | Arquivo/fonte | Revisão |
|---|---|---|
| Inicial / navegação | app-5.9.html | 5.24 |
| Acordes | app-5.9.html | 5.24 |
| Exercícios / escalas / shapes | app-5.9.html | 5.24 |
| Braço do violão | app-5.9.html | 5.24 |
| Afinador | app-5.9.html | 5.24 |
| Metrônomo | app-5.9.html | 5.24 |
| Loader / Atualizar | index.html | 5.24 |

## Regra obrigatória de publicação

1. Toda alteração funcional deve incrementar a versão neste MD.
2. A mesma versão deve existir no HTML visível.
3. O botão Atualizar lê este MD com cache-busting.
4. Se a versão/build deste MD diferir da versão carregada, o app deve fazer navegação completa com URL nova.
5. O MD prevalece sobre versão em cache, localStorage, iframe ou Service Worker.
6. O arquivo version.json fica apenas como compatibilidade; este MD é a referência principal.

## Histórico

- **5.25** — cada botão representa um shape pentatônico individual, com sua própria faixa real de casas e playback restrito às notas visíveis; os cinco shapes se repetem por oitava até a casa 24.

- **5.24** — shapes pentatônicos continuam em sequência pelas oitavas até a casa 24; cada botão abre sua região para treino, preservando apenas notas existentes entre as casas 0 e 24.

- **5.23** — identificação permanente das casas abaixo do braço: “casa 1”, “casa 2” etc.; casa 0 identificada como solta.

- **5.22** — numeração das casas visível acima do braço, incluindo casa 0 (solta); removidas posições pentatônicas duplicadas por oitava.

- **5.21** — 18 fórmulas de escalas, pentatônicas com cinco shapes tradicionais e demais escalas em regiões móveis; notas/casas e Play calculados da mesma matriz; documentação REFERENCIAS_ESCALAS.md.

- **5.20** — criada regra funcional SHAPES_PLAY.md; desenho e Play passam a usar Mi grave no topo e Mi aguda embaixo; cordas afinam visualmente de cima para baixo; sequência percorre exclusivamente o shape nessa orientação.

- **5.19** — corrigida a orientação da sequência do Play: a ordem agora segue as cordas exatamente como o shape é desenhado na tela. Na Posição 2 de Mi pentatônica menor, o exercício inicia no Si (B) do próprio shape, sem tocar Sol/Lá externos antes dele.

- **5.18** — Play dos shapes pentatônicos passa a usar diretamente a matriz da posição selecionada. Ao chegar à última nota do shape, retorna apenas pelas mesmas notas do desenho; nenhuma nota externa pode entrar na sequência.

- **5.17** — exercício guiado passa a montar a sequência exclusivamente com as notas visíveis do shape selecionado; notas fora do desenho não entram no Play.

- **5.16** — controlador MD de atualização criado; botão Atualizar passa a validar este arquivo como fonte principal.
- **5.15** — hard refresh e limpeza de cache.
- **5.13–5.14** — ajustes de layout e atualização.
- **5.10–5.12** — correções dos shapes pentatônicos.
