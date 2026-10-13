# Biblioteca musical v2.0.0

Arquivo: `biblioteca-escalas-v2.json`.

- 18 famílias de escalas existentes no aplicativo, em 12 tônicas cromáticas: 216 combinações.
- Afinação padrão E2 A2 D3 G3 B3 E4, cordas da grave à aguda.
- Casas 0 a 24. `fretsByString` contém somente casas cujas notas pertencem à escala.
- `pitchClasses` e `intervals` expressam classes de altura em temperamento igual de 12 semitons.
- Foram verificadas programaticamente 18.900 posições de nota.

## Limites da homologação

Esta biblioteca é um **mapa de notas**, não uma biblioteca de digitações tradicionais certificadas. Ela não distingue grafia enarmônica contextual (C# / Db) nem define padrões CAGED, 3NPS ou digitações das escalas simétricas. Essas etapas exigem validação separada. **Não afirmar que os shapes estão homologados.**

## Referências para comparação pedagógica

- https://github.com/radzionc/guitar
- https://github.com/harmendv/guitar-scales

## Integração

O aplicativo `app-5.9.html` ainda utiliza seu próprio gerador de shapes. A publicação desta biblioteca **não altera automaticamente os desenhos mostrados no aplicativo**.
