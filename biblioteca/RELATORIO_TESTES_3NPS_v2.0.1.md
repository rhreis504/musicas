# Relatório de testes de homologação — aplicativo v5.34
Data: 2026-10-12

## Bateria automatizada executada
- 588 diagramas 3NPS, abrangendo 7 famílias, 12 tônicas e 7 graus por família: **588/588 passaram nos invariantes matemáticos e geométricos**.
- Cada padrão: 6 cordas × 3 notas = 18 notas; 10.584 verificações de pertinência cromática.
- Progressão MIDI estritamente ascendente entre todas as 18 notas de cada padrão: **588/588 aprovados**.
- Amplitude entre a menor e a maior casa de cada padrão: **5 a 6 casas**; nenhuma superior a 6.
- 973 posições de oitava completas dentro de 0–24 casas, sem repetições geométricas por escala e tonalidade.
- Biblioteca recuperada do GitHub com 153.172 caracteres e JSON válido; versão **2.0.1**.
- Código do app recuperado do GitHub: checagem estática da aceitação 2.0.x, consulta da biblioteca, grafia contextual e fallback local.
- Tags de script no HTML: 8 aberturas e 8 fechamentos.

## Limites desta bateria
Os 588 desenhos foram auditados **por dados e regras geométricas**, não por inspeção de 588 capturas de tela. Não houve navegador gráfico nem acesso ao dispositivo do usuário neste ambiente. Assim, **não é verdadeiro declarar conferência visual individual dos 588 diagramas**, reprodução sonora real, usabilidade mobile, carregamento real no GitHub Pages, atualização do iframe ou testes de cache concluídos.

O teste matemático de grafia contextual e enarmonia de todos os modos e escalas não foi realizado com uma referência teórica independente nota a nota. A interface continua com a pentatônica gerada a partir das matrizes locais e não integralmente da biblioteca pentatônica publicada.

## Resultado
**APROVAÇÃO PARCIAL**: consistência estrutural dos 588 padrões, notas, sequenciamento e cobertura de oitavas. **HOMOLOGAÇÃO INTEGRAL DA v5.34: BLOQUEADA** até testes funcionais reais e inspeção visual independente dos diagramas.
