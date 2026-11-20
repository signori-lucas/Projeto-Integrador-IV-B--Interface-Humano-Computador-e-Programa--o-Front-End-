# ConectaCorp – Portal de Comunicação Interna

## 1. O que é o projeto

O **ConectaCorp** é um portal corporativo que serve como canal de comunicação entre a empresa e seus funcionários. A ideia é reunir em um só lugar os comunicados, as políticas internas e a cultura da organização, para que o colaborador não precise procurar essas informações em e-mails ou murais espalhados.

Nesta primeira versão, o portal oferece:

- **Página inicial (Início):** um painel de boas-vindas com a data do dia, um feed "Fique por dentro" com as quatro notícias mais recentes e um quadro de **aniversariantes**. O quadro lista os seis próximos aniversários, com o setor de cada pessoa e quantos dias faltam. Quem faz aniversário no dia aparece em destaque, com a indicação "Hoje! 🎉".
- **Página de Notícias:** todas as notícias em formato de cartões, com **filtro por categoria** (Políticas, Comunicados, Cultura, Desenvolvimento). Ao clicar em uma notícia, o texto completo abre em uma janela (modal), com imagem, autor e data.
- **Login simulado:** o colaborador informa nome, e-mail e senha. O portal passa a cumprimentá-lo pelo nome e mostra suas iniciais no cabeçalho, com a opção de sair. Nesta versão não há verificação real de usuário e senha. Os dados ficam guardados apenas no navegador.

As notícias e a lista de aniversariantes são **dados fictícios** (mockados) no arquivo `js/dados.js`. Eles simulam o que, numa versão futura, viria de um servidor (API).

## 2. Como o portal (front-end) foi construído

O front-end foi feito com as três tecnologias básicas da web, **sem framework de JavaScript e sem biblioteca de CSS**. A escolha deixa o projeto leve, sem dependências e sem etapa de instalação ou compilação.

### Estrutura do projeto

```
index.html       → estrutura das páginas
css/style.css    → estilos e layout
js/dados.js      → dados das notícias e aniversariantes
js/main.js       → comportamento e interatividade
```

### HTML5 (estrutura)

- Usa tags semânticas como `header`, `nav`, `main`, `section`, `aside`, `article` e `footer`, que organizam o conteúdo de forma clara para o navegador e para leitores de tela.
- As páginas Início e Notícias ficam no mesmo arquivo HTML. A troca entre elas é feita com JavaScript, sem recarregar a página, como em uma *Single Page Application* simples.
- O logotipo é um desenho **SVG** escrito direto no HTML, sem arquivo de imagem.
- O formulário de login usa a validação nativa do HTML5 (campos obrigatórios e campo de e-mail).

### CSS3 (aparência e layout)

Escrito à mão, sem Bootstrap ou Tailwind:

- **Variáveis CSS** (*custom properties*) guardam as cores, o arredondamento dos cantos, a sombra e a largura máxima da página. Isso mantém o visual padronizado e fácil de mudar.
- **Flexbox** organiza o cabeçalho, os cartões e as listas. **CSS Grid** monta a grade da página inicial e a grade de notícias, que se ajusta sozinha à largura da tela.
- **Design responsivo:** *media queries* adaptam o layout para tablets (até 900px) e celulares (até 600px). Em telas pequenas, o menu vira um botão "hambúrguer".
- **Convenção BEM** para nomear as classes (por exemplo `menu__link--ativo`, `noticia__titulo`), o que deixa o código mais organizado.
- Animações leves (`@keyframes`) na abertura das janelas e na troca de páginas.
- Usa fontes que já vêm instaladas no sistema (Segoe UI, Roboto), sem carregar fontes externas.

### JavaScript (interatividade)

Em JavaScript puro (*vanilla*, padrão ES6+):

- Monta os cartões de notícias e a lista de aniversariantes **dinamicamente**, a partir dos dados de `dados.js`, manipulando o DOM.
- Ordena as notícias por data, filtra por categoria e calcula quantos dias faltam para cada aniversário.
- Controla a navegação entre páginas, o menu mobile e a abertura e fechamento das janelas.
- Simula o login com o **localStorage** do navegador, então o usuário continua conectado mesmo depois de fechar a página.
- Formata datas no padrão brasileiro com `toLocaleDateString("pt-BR")`.

### Acessibilidade

- Atributos **ARIA** (`aria-label`, `aria-expanded`, `aria-modal` etc.) descrevem menus e janelas para leitores de tela.
- Dá para navegar pelo teclado: **Enter** abre uma notícia e **Esc** fecha janelas e menus.
- As imagens têm texto alternativo e a página está marcada como português (`lang="pt-BR"`).

### Recursos externos

- O único recurso externo são as imagens ilustrativas das notícias, carregadas do serviço gratuito [Picsum Photos](https://picsum.photos).

## 3. Como executar

Não é preciso instalar nada. Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox).
