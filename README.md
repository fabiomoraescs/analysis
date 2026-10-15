# Análisys — Plataforma de análises e pesquisas

Site institucional estático (versão 0.3), para GitHub Pages e futuro domínio próprio.

## Identidade e contato

- Nome público: **Análisys: plataforma de análises e pesquisas**.
- E-mail público informado para contato, privacidade e exclusão: **azimutfabio@gmail.com**.
- A identificação civil ou razão social do responsável legal **ainda precisa ser confirmada**. A marca do projeto não substitui essa identificação.

## Arquivos

- `index.html`: apresentação, ferramentas, blog e perguntas frequentes.
- `blog/index.html` e `blog/rastreabilidade.html`: índice e artigo.
- `privacidade.html`: Política de Privacidade.
- `termos.html`: Termos de Uso.
- `exclusao.html`: instruções de solicitação de exclusão de dados.
- `assets/site.css`, `assets/site.js`, `assets/favicon.svg`: aparência e comportamento.

## Guia de edição manual

- HTML: recuo de **4 espaços** por nível, seções identificadas por comentários `<!-- ... -->`.
- CSS: estilos agrupados por seções, **uma declaração por linha**, personalização de cores em `:root`.
- JavaScript: sem minificação, com comentários por funcionalidade.
- Salve todos os arquivos em UTF-8.
- Ao alterar os links do rodapé, atualize-os em cada uma das páginas HTML (não há gerador de templates).
- Links internos são relativos e não exigem domínio fixo.

| Edição | Arquivo | Onde localizar |
| --- | --- | --- |
| Nome, chamada e ferramentas | `index.html` | `DESTAQUE INICIAL` e `FERRAMENTAS` |
| Perguntas e contato | `index.html` | `ACESSO E PERGUNTAS FREQUENTES` |
| Textos das políticas | `privacidade.html`, `termos.html`, `exclusao.html` | bloco `<article class="prose">` |
| Blog | `blog/index.html`, `blog/rastreabilidade.html` | `<main>` |
| Cores e layout | `assets/site.css` | `:root` e comentários numerados |
| Menu móvel | `assets/site.js` | comentário do menu |

## Verificações obrigatórias antes de usar os documentos na Meta

Os textos públicos foram redigidos sem avisos de "minuta" ou campos `[PREENCHER]`. **Isso não significa que a conformidade legal ou operacional já esteja confirmada.** Antes de publicar as URLs como documentação oficial da Meta, verificar:

1. Nome civil/razão social e papel jurídico do responsável pelo tratamento, além de país e dados adicionais eventualmente exigidos.
2. Dados e finalidades efetivos por módulo; bases legais correspondentes na LGPD, inclusive dados de terceiros.
3. Hospedagem/fornecedores contratados, transferências internacionais, registros de acesso e segurança.
4. Critérios de retenção, prazos aplicáveis e destino dos dados em backups.
5. Fluxo realmente implementado para exclusão, anonimização e revogação de acesso; responsável pela resposta aos pedidos.
6. Condições de cadastro, contratação, suporte e encerramento de conta.
7. Revisão jurídico-editorial e correspondência do texto com o funcionamento real do serviço.

**Não considerar a validação jurídica concluída apenas com a publicação no GitHub Pages.**

## Publicação no GitHub Pages (após revisão)

1. Crie o repositório público `analysis-site` e carregue **o conteúdo desta pasta na raiz** (sem segredos, banco ou credenciais).
2. Em *Settings → Pages*, escolha *Deploy from a branch*, `main` e `/(root)`.
3. Verifique os links das páginas e o HTTPS público.
4. Posteriormente, registre e configure um domínio próprio (DNS + domínio personalizado no Pages).

Este pacote não publica automaticamente no GitHub, não contém conexão com o backend Flask e não executa login, coleta de dados ou análise dinâmica.
