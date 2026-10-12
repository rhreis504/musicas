# Validação do catálogo de acordes

Total de combinações: **348** (29 qualidades × 12 tônicas).

- Com pelo menos uma posição extraída e verificada quanto a notas/baixo: **334**.
- Sem posição que passe nos filtros: **14**. Não inventar desenho.
- Critérios automáticos: 6 cordas, casas válidas, baixo na tônica, notas tocadas pertencentes ao acorde e presença de tônica, terça e sétima quando aplicável.
- Limite: isso **não comprova ergonomia nem dedilhado humano**. A revisão pedagógica e testes no iPhone ainda são necessários.
- Convenção JSON: casas em ordem **6ª→1ª**, -1 = X, 0 = solta, positivos = casas absolutas.
- Acordes com extensões podem omitir graus não essenciais; suas omissões precisam de revisão específica.
- Posições de fonte com baseFret foram convertidas para casas absolutas.
- Fonte: https://github.com/tombatossals/chords-db (MIT); preservar atribuição e licença.
- O HTML atual **ainda não lê este JSON**. Não anunciar integração antes de implementar carregamento, testes e fallback.
