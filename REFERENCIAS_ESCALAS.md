# REFERÊNCIAS E REGRAS DE ESCALAS — MEU VIOLÃO

## Referências pesquisadas (12/10/2026)

- Fender — cinco padrões da pentatônica menor: https://www.fender.com/play/guitar/skills
- Fender — pentatônica menor, notas e posições: https://www.fender.com/articles/scales/a-minor-pentatonic-guitar-scale
- Fender — pentatônica maior e desenhos: https://www.fender.com/articles/scales/f-major-pentatonic-scale
- Fender — blues menor: seis notas, pentatônica + blue note; posições: https://www.fender.com/articles/scales/blues-guitar-scale
- Fender — escalas menor natural, harmônica e melódica: https://www.fender.com/articles/scales/minor-guitar-scale
- Fender — escalas essenciais e fórmulas: https://www.fender.com/articles/scales/5-essential-guitar-scales-for-beginners

## Convenções de afinação e desenho

Afinação padrão, de cima para baixo: E2 (Mi grave), A2, D3, G3, B3, E4 (Mi aguda). Cordas diminuem de espessura. Cada bolinha deve representar uma única combinação corda/casa. Casa 0 significa corda solta; casas 1–24 devem aparecer numeradas.

## Fórmulas em semitons (a partir da tônica)

| Escala | Semitons |
|---|---|
| Pentatônica menor | 0 3 5 7 10 |
| Pentatônica maior | 0 2 4 7 9 |
| Blues menor | 0 3 5 6 7 10 |
| Blues maior | 0 2 3 4 7 9 |
| Maior / Jônio | 0 2 4 5 7 9 11 |
| Menor natural / Eólio | 0 2 3 5 7 8 10 |
| Dórico | 0 2 3 5 7 9 10 |
| Frígio | 0 1 3 5 7 8 10 |
| Lídio | 0 2 4 6 7 9 11 |
| Mixolídio | 0 2 4 5 7 9 10 |
| Lócrio | 0 1 3 5 6 8 10 |
| Menor harmônica | 0 2 3 5 7 8 11 |
| Menor melódica (jazz, ascendente) | 0 2 3 5 7 9 11 |
| Frígio dominante | 0 1 4 5 7 8 10 |
| Tons inteiros | 0 2 4 6 8 10 |
| Diminuta tom-semitom | 0 2 3 5 6 8 9 11 |
| Diminuta semitom-tom | 0 1 3 4 6 7 9 10 |
| Cromática | 0 1 2 3 4 5 6 7 8 9 10 11 |

## Regra de desenho e reprodução

1. Gerar o conjunto de notas pela fórmula correta.
2. Gerar posições apenas com notas desse conjunto.
3. Renderizar o shape com indicação explícita de casas e cordas.
4. Gerar o Play da MESMA matriz de corda/casa renderizada.
5. Percorrer de cima para baixo e da menor casa para a maior em cada corda; voltar exatamente pelo percurso inverso.
6. Não adicionar notas ocultas ou extrapolar para a próxima posição.
7. Não aplicar regra de duas notas por corda a escalas diatônicas: padrões de 3 notas por corda são comuns.
8. Não confundir **regiões móveis do braço**, que são janelas calculadas, com desenhos CAGED/3NPS validados. Apenas as pentatônicas usam os cinco templates tradicionais nesta versão.

## Limite atual e validação pendente

As escalas não pentatônicas usam regiões móveis calculadas pelas notas da escala; **não** são anunciadas como shapes canônicos CAGED ou 3NPS. A biblioteca cobre 18 fórmulas; não representa literalmente todas as escalas existentes na teoria musical. A numeração de shapes varia entre métodos; a primeira nota do exercício é sempre a primeira bolinha da posição exibida, não necessariamente a tônica.
