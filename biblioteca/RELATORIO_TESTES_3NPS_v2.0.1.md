# Bateria de testes — 3NPS v2.0.1 e aplicativo v5.34
Data: 2026-10-12

## Defeito crítico identificado e corrigido
O arquivo de biblioteca no GitHub estava **vazio** (0 bytes). A integração v5.34 não podia carregar os padrões, apesar de o código da interface existir. Foi reconstruído e publicado em commit `239225a2474dfcabbb8dd3d97a90c4fe56bf2b69` e relido via GitHub, retornando 153.172 caracteres de JSON válido.

A aplicação verificava exclusivamente `version === '2.0.0'`, portanto rejeitaria a biblioteca corrigida v2.0.1. Ajustado para aceitar versões 2.0.x, commit `824fe4ddb7efeb42f3a0c45c202e16ac3f342168`.

## Testes executados
- Geração integral: 7 famílias × 12 tônicas × 7 graus = **588 padrões**.
- Cada padrão: seis cordas × três notas = **18 notas**, total **10.584 notas**.
- Verificação de pertinência das notas à escala por classe cromática: **10.584/10.584**.
- Amplitude geométrica máxima: **6 casas**; padrões com amplitude maior: **0**.
- Repetições completas entre as casas 0 e 24: **973 posições**.
- Confirmação de leitura do JSON reconstruído: **153.172 caracteres**.
- Inspeção estática do aplicativo: presença do carregamento da biblioteca, renderização de grafia contextual, fallback 3NPS e identificação de versão.

## Pendências — bloqueiam homologação integral
- Conferência visual humana **individual** dos 588 diagramas contra fontes independentes: **não executada**. Uma geração matemática não substitui a comparação externa.
- Teste ponta a ponta da interface em navegador e áudio em dispositivo real: **não executado** neste ambiente.
- Teste de GitHub Pages efetivamente publicado, inclusive cache e iframe: **não confirmado**.
- Grafia enarmônica para modos, escalas simétricas, notas com alterações duplas e pentatônicas: **não integralmente validada**.
- Bibliotecas especiais e pentatônicas precisam de testes de interface próprios.

**Veredito:** testes estruturais e matemáticos passaram; homologação pedagógica integral e funcional de v5.34 **não aprovada ainda**.
