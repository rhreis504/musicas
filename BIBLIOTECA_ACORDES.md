# Biblioteca de acordes — Meu Violão

**Status:** especificação e catálogo inicial de referência. **Não é uma biblioteca completa nem homologada.** A aplicação NÃO deve inferir posições de acordes procurando notas aleatórias nas seis cordas.

## Objetivo
Ter um catálogo externo ao HTML como fonte única para diagramas, execução e animação. Próximo artefato: `acordes.json`, contendo uma entrada validada por tônica, qualidade e posição. A publicação de cada qualidade deve depender da validação automatizada e revisão musical.

## Convenção obrigatória
- Afinação padrão, **6ª → 1ª:** E2 A2 D3 G3 B3 E4; MIDI: 40,45,50,55,59,64.
- Uma forma é `[6ª,5ª,4ª,3ª,2ª,1ª]`. `x` = não tocar; `0` = tocar solta; inteiro positivo = casa pressionada.
- **Baixo:** primeira corda efetivamente tocada, lendo da 6ª para a 1ª. Deve ser a tônica em acordes em posição fundamental, salvo inversão expressamente indicada.
- O áudio e a animação devem percorrer somente as cordas diferentes de `x`, na ordem 6ª→1ª; cada corda tem seu próprio evento. Acordes não exigem tocar todas as seis cordas.
- **Desenho:** mostrar `×` para abafada, `○` para solta (sem círculo de nota) e marcador somente na casa pressionada. Exibir o nome da nota real em cada casa pressionada.
- Em acordes com extensão, a posição pode omitir graus dispensáveis (frequentemente a quinta), mas nunca incluir nota fora da harmonia sem registrar a alteração.
- Para posições móveis, o diagrama deve indicar a **casa inicial real**, não forçar tudo às casas 1–4.
- Não substituir automaticamente um voicing não catalogado por um algoritmo de “primeira nota que encaixa”: mostrar “posição ainda não validada”.

## Catálogo inicial — acordes abertos verificados
| Acorde | Fórmula | Notas | Forma (6ª→1ª) | Baixo | Estado |
|---|---|---|---|---|---|
| C | 1 3 5 | C E G | x32010 | C | padrão aberto |
| D | 1 3 5 | D F♯ A | xx0232 | D | padrão aberto |
| E | 1 3 5 | E G♯ B | 022100 | E | padrão aberto |
| G | 1 3 5 | G B D | 320003 | G | padrão aberto |
| A | 1 3 5 | A C♯ E | x02220 | A | padrão aberto |
| Am | 1 ♭3 5 | A C E | x02210 | A | padrão aberto |
| Dm | 1 ♭3 5 | D F A | xx0231 | D | Fender / ChordWiki |
| Em | 1 ♭3 5 | E G B | 022000 | E | padrão aberto |
| C7 | 1 3 5 ♭7 | C E G B♭ | x32310 | C | padrão aberto |
| D7 | 1 3 5 ♭7 | D F♯ A C | xx0212 | D | padrão aberto |
| E7 | 1 3 5 ♭7 | E G♯ B D | 020100 | E | padrão aberto |
| A7 | 1 3 5 ♭7 | A C♯ E G | x02020 | A | padrão aberto |
| G7 | 1 3 5 ♭7 | G B D F | 320001 | G | padrão aberto |

**Exemplo didático obrigatório — Ré menor:** `xx0231` → 6ª X, 5ª X, 4ª D solta, 3ª A (casa 2), 2ª D (casa 3), 1ª F (casa 1). Reprodução: D3 → A3 → D4 → F4. Não reproduzir E2 ou A2.

## Qualidades a cobrir integralmente, para cada uma das 12 tônicas
Maior; menor; 5 (power); 6; m6; 7; maj7; m7; mMaj7; 9; maj9; m9; add9; m(add9); sus2; sus4; 7sus4; diminuto; dim7; m7♭5; aumentado; 7♭5; 7♯5; 7♭9; 7♯9; 11; m11; 13; m13. Isso corresponde a **29 qualidades × 12 tônicas = 348 combinações teóricas**, antes de posições alternativas e inversões. Nem todas têm uma única forma canônica.

## Estrutura planejada do arquivo `acordes.json`
```json
{
  "Dm": {
    "root": "D",
    "quality": "m",
    "intervals": [0,3,7],
    "notes": ["D","F","A"],
    "voicings": [{
      "frets": ["x","x",0,2,3,1],
      "bass": "D",
      "startFret": 1,
      "fingers": [null,null,null,2,3,1],
      "source": "Fender Play",
      "reviewed": true
    }]
  }
}
```

## Testes de qualidade obrigatórios
1. Cada corda tocada deve gerar a nota MIDI correta segundo a afinação e a casa.
2. Cada nota produzida deve pertencer aos intervalos do acorde (ou à alteração explicitamente documentada).
3. A nota mais grave produzida deve coincidir com `bass`; se o acorde for fundamental, deve coincidir com a tônica.
4. A forma precisa conter os graus essenciais da qualidade. Para acordes estendidos, omissões devem ser explícitas.
5. Não permitir casas negativas, valores inválidos ou marcadores em cordas `x` e `0`.
6. O player nunca pode reproduzir uma corda `x`; animação sempre identifica **corda**, nunca apenas classe de nota.
7. Toda forma precisa ter procedência e status de revisão; entrada não revisada não deve ser apresentada como “posição correta”.
8. Testes específicos de regressão: C `x32010`, D `xx0232`, Dm `xx0231`.

## Referências externas
- Fender Play — D menor: https://www.fender.com/articles/chords/learn-how-to-play-dm-guitar-chord
- ChordWiki — D menor: https://chordwiki.com/guitar/chords/d-minor/
- szaza/guitar-chords-db-json — catálogo JSON, licença MIT: https://github.com/szaza/guitar-chords-db-json
- T-vK/chord-collection — biblioteca extensa, **GPL: verificar obrigações de licença antes de incorporar**: https://github.com/T-vK/chord-collection
- chordplayer/chordplayer.github.io — catálogo com voicings: https://github.com/chordplayer/chordplayer.github.io

## Pendências para integração
- Extrair/adaptar catálogo sob licença compatível, conferindo formatos, intervalos, baixo e digitações.
- Validar as 348 combinações e formas alternativas, com relatório de exceções.
- Integrar `acordes.json` no aplicativo somente após validação; remover definitivamente `voicing()` genérico.
- Não publicar nova versão do HTML até o catálogo estar funcional e testado.
