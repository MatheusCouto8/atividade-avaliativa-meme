# Meme Verse

## Instruções de instalação e execução:

### Instalação:

1. Crie o projeto Next.js:
   
   npx create-next-app@latest meme-verse

2. Renomeie os arquivos page.js e layout.js para page.jsx e layout.jsx

3. Instale as dependências adicionais, caso necessário: 
    
   npm install

### Execução:

1. Inicie o servidor de desenvolvimento:

    npm run dev

2. Acesse o projeto no navegador em http://localhost:XXXX

### Descrição dos componentes criados:

-Descrição dos componentes criados:

1. `Header` - Componente de cabeçalho com logo, navegação e busca
2. `HeroSection` - Seção principal com o meme do dia
3. `MemeCard` - Card individual de um meme (deve ser reutilizável)
4. `InteractionBar` - Barra de interação com botões de curtir, comentar
etc.
5. `CategoriesSection` - Seção de navegação por categorias
6. `Footer` - Rodapé com links de navegação e informações da empresa
7. `Sidebar` - Barra lateral com conteúdo complementar

### Decisões de design tomada:

Estilo visual minimalista:

Optamos por um design limpo e responsivo para garantir uma boa experiência em dispositivos móveis e desktops.
Uso do Next.js:

Escolhemos o Next.js para aproveitar o suporte a renderização no servidor (SSR) e a geração de páginas estáticas (SSG).
Componentização:

Dividimos a interface em componentes reutilizáveis para facilitar a manutenção e escalabilidade do código.
SVGs no diretório public:

Armazenamos ícones e imagens no diretório public para facilitar o acesso e melhorar o desempenho.

### Desafios enfrentados e soluções aplicadas:

Um dos maiores desafios foi usar props, mas com a ajuda do docente Felipe consegui!

