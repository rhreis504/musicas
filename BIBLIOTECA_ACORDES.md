# Biblioteca de acordes — especificação do catálogo

O arquivo **acordes.json** é a fonte de dados executável. **DESENHOS_ACORDES.md** é a projeção humana do mesmo catálogo, não uma segunda fonte divergente.

Abrangência: 29 qualidades e 12 tônicas, 348 combinações. 334 têm ao menos uma posição musicalmente filtrada; 14 estão sem forma validada. Cada registro traz notas teóricas, voicings, X, soltas, pestana (quando fornecida) e procedência.

**Regra de renderização:** nunca desenhar ou reproduzir posição sem voicing; cada corda tocada tem evento e vibração próprios; corda X não toca; pestana vem de metadado explícito, não de casas coincidentes; posição fundamental começa pelo baixo na tônica. A corda solta aparece como ○ sem bolinha.

**Observação:** a validação computacional garante coerência harmônica básica, não garante que todas as posições sejam confortáveis, tradicionais ou corretamente digitadas. Antes de integrar, conferir especialmente inversões, acordes estendidos e pestanas.

Fonte de dados: tombatossals/chords-db, licença MIT, https://github.com/tombatossals/chords-db. Formato convertido para casas absolutas e ordem 6ª→1ª.
