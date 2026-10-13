# Estado da homologação musical

Atualização: 2026-10-12

## Publicado no GitHub

1. `biblioteca-escalas-v2.json`: 18 famílias e 12 classes cromáticas de tônica; mapa de notas, não digitação.
2. `shapes-pentatonicos-v1.json`: 120 diagramas de 2 notas por corda; verificação matemática das notas. Não certificados individualmente contra fonte pedagógica externa.
3. `shapes-diatonicos-3nps-v1.json`: 588 desenhos 3NPS calculados; verificação matemática das notas. A seleção das posições e ergonomia ainda não foram homologadas contra diagramas independentes.
4. `escalas-especiais-v1.json`: nove famílias adicionais, 108 combinações de tonalidade; mapas completos de notas, **não** shapes de digitação.

## Referências externas

- https://musescore.com/articles/the-ultimate-scale-book/minor-pentatonic
- https://musescore.com/articles/the-ultimate-scale-book/harmonic-minor
- https://musescore.com/articles/the-ultimate-scale-book/chapter/part-iv-symmetrical-and-exotic-scales
- https://www.theorylessons.com/pent002positions.php

## Pendências bloqueantes para declaração de homologação total

- Comparar os diagramas pentatônicos e 3NPS individualmente com fontes independentes e corrigir divergências.
- Criar/validar padrões pedagógicos das nove famílias especiais (ou classificar como mapa do braço quando não há um sistema fixo de shapes).
- Resolver grafia enarmônica conforme a escala, distinguindo nota escrita de classe cromática.
- Fazer a aplicação ler a biblioteca publicada em vez do gerador interno, com testes de interface, áudio e regressão em dispositivos reais.
- Verificar entrega efetiva da publicação no GitHub Pages.

**Status geral: NÃO HOMOLOGADO.** A pertença das notas à escala é condição necessária, mas não suficiente para homologação pedagógica.
