<div id='top'>

# CodeShare: compartilhamento de códigos

</div>

_[Read it in English](#English)_

O **CodeShare** é uma plataforma de compartilhamento de código, similar a uma rede social para desenvolvedores. Trata-se de uma releitura de um [projeto desenvolvido no começo da minha carreira](https://github.com/sucodelarangela/alura-challenge-front-end), na época desenvolvido com JavaScript, HTML e CSS, além de algumas bibliotecas extras, e que utilizava o _localStorage_ como forma de armazenamento dos dados.

Esta nova versão está sendo desenvolvida atualmente com React, além de contar com um banco de dados do MongoDb e autenticação através do Firebase. O deploy da aplicação será feito assim que o desenvolvimento atingir um percentual mais próximo do completo e será disponibilizado neste mesmo repositório o link de acesso à página. O design está sendo mantido igual ao anterior por questões de desenvolvimento, mas a ideia é que a UI sofra modificações posteriores.

<!-- prettier-ignore -->
| 🪧 Vitrine. Dev |     |
| -------------- | --- |
| ✨ Nome        | **Codeshare: compartilhamento de códigos** |
| 🏷️ Tecnologias | React, MongoDb, Firebase, Styled-Components, Material UI, Axios |
| 🚀 URL         | Em breve / Coming soon |
| 🔥 Desafio     | [Figma](https://www.figma.com/file/mhAelfm31DohdGVS1iuDGY/Alura-Challenge---Edi%C3%A7%C3%A3o-Front-end-(Copy)?node-id=207%253A729) |

![](https://raw.githubusercontent.com/sucodelarangela/codeshare/main/public/og-image.png#vitrinedev)

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/mongodb-ffffff?style=for-the-badge&logo=mongodb&logoColor=47A248"/>
  <img src="https://img.shields.io/badge/styled components-3C3C3C?style=for-the-badge&logo=styled-components&logoColor=DB7093">
  <img src="https://img.shields.io/badge/firebase-051e34?style=for-the-badge&logo=firebase&logoColor=FFCA28">
  <img src="https://img.shields.io/badge/axios-ffffff?style=for-the-badge&logo=axios&logoColor=5A29E4">
  <img src="https://img.shields.io/badge/mui-ffffff?style=for-the-badge&logo=mui&logoColor=007FFF">
</div>

## 📈 Status de Desenvolvimento

- [x] Criação do banco de dados com MongoDb Atlas, definição de _models_, _controllers_ e rotas;
- [x] Inicialização do projeto com Vite e configurações iniciais (ESLint, _absolute imports_, etc.);
- [x] Desenvolvimento do design básico das páginas da aplicação: estilização com _styled-components_ e definições das rotas para o _react-router-dom_;
- [x] Criação do _AuthContext_ que compartilhará as informações de usuário logado entre páginas;
- [x] Integração com o _Firebase_ para autenticação do usuário e criação de um _custom hook_ para interações de _login, logout_ e exclusão de conta (_useAuth_);
- [x] Criação de _dialog_ com formulário de login e cadastro de usuários, com fechamento por botão, por clique no _overlay_ ou com a tecla ESC (para melhor acessibilidade);
- [x] Criação de um _toast_ informando que o usuário foi logado (a melhorar);
- [x] Integração com a API do _MongoDb_ para GET, POST e DELETE de usuários quando na autenticação, cadastro e exclusão de conta;
- [x] Criação de um _custom hook_ para busca de dados na API (_useFetch_) e alimentação dinâmica dos Cards na página de Comunidade;
- [x] Organização do grid dos Cards com o uso do componente _Masonry_ do _Material UI_ para otimização de espaço em tela;
- [x] Integração do editor de códigos com o banco de dados do _MongoDb_ para funcionalidade de criação de novos códigos na página Comunidade;
- [ ] Criação de um _toast_ informando que o código foi criado com sucesso no banco de dados;
- [x] Redirecionamento à página Comunidade após criação de um novo post;
- [x] Integração com o banco de dados do _MongoDb_ para edição de códigos existentes na página Comunidade;
- [x] Uso de syntax highlight (com [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)) nos Cards;
- [x] Criação de uma página Dashboard para gerenciamento de códigos por parte do usuário logado (similar ao Dashboard do projeto [**MiniBlog**](http://curso-react-udemy.vercel.app/));
- [x] Criação da funcionalidade Deletar;
- [x] Melhorar de forma geral a UX da _dialog_ de _login_;
- [x] Criação da funcionalidade de pesquisa para filtrar os cards (por palavra chave ou linguagem);
- [ ] Criação de uma página de perfil para que o usuário possa alterar nome, senha e/ou imagem do avatar;
- [ ] Opção de salvar o card como imagem (usando [html2canvas](https://html2canvas.hertzen.com/) ou similar);
- [ ] Criação de opção de idiomas pt/br/en (a avaliar).

<!--
A imersão contemplou o uso de **Next.js** para o desenvolvimento da UI da aplicação, com o menu, a função de busca dos vídeos cadastrados, a estilização e definição de tema claro e tema escuro com **styled-components**, bem como mostrou como criar um banco de dados para cadastro dos vídeos na plataforma **Supabase**.

Como atividades adicionais, criei outras opções de tema além do claro/escuro, trocando o _toggle_ feito durante o evento por um _select_ com as opções de tema (esse _select_ foi criado com **Radix UI**). Também implementei a opção de escolher dentre três playlists diferentes para salvar os vídeos, pois no evento foi mostrado apenas como salvar no Supabase em uma única playlist pré-definida. Para finalizar a aplicação, criei a funcionalidade de excluir um vídeo de uma determinada playlist, bastando clicar no botão no canto superior direito da _thumbnail_.

Como ideia de implementação futura, pode ser feito um sistema de cadastro/login para mostrar os vídeos por usuário, além da opção de poder criar uma nova playlist além das existentes. Atualmente a aplicação aceita apenas vídeos do YouTube, então torna-se necessário corrigir um erro que ocorre ao tentar adicionar vídeos de outras fontes.

## ⚙️ Como usar

Para usar a aplicação, basta acessar [este link](https://aluratube-next-js.vercel.app/). Não é necessário login, sendo mostrado na página da aplicação alguns dos meus vídeos favoritos.

Para cadastrar novos vídeos, basta:

- Clicar no botão que se encontra no canto inferior direito da tela;
- Inserir o nome do vídeo;
- Selecionar uma das três playlists existentes;
- Inserir a URL do vídeo;
- Clicar no botão "Ver thumbnail" para extrair a imagem do vídeo;
- Clicar em "Cadastrar" para salva-lo na playlist especificada.

-->

<a href='#top'>🔼 Voltar ao topo</a>

---

<div id="English">

_English version_

</div>

## 🔎 Overview

**CodeShare** is an application for saving and sharing code, similar to a social network page for devs. It is a new version of an [older project from the beginning of my career](https://github.com/sucodelarangela/alura-challenge-front-end), developed at the time with vanilla JavaScript, HTML and CSS, besides some extra libs, and it used _localStorage_ to save the data locally.

This new version is currently being developed in React, with a MongoDb database and Firebase authentication. The application will be deployed as soon as it reaches an almost complete status and its url will be available in this same repository. The design is currently the same as the original project but the idea is to change the UI in the future.

## 📈 Development Status

- [x] Create database in _MongoDb Atlas_, definitions of _models_, _controllers_ and routes;
- [x] Initiate the project with Vite and set initial configs (_ESLint, absolute imports_, etc.);
- [x] Develop the basic design of pages: styles with _styled-components_ and routes for _react-router-dom_;
- [x] Create of _AuthContext_ which shares the logged user info between pages;
- [x] Integrate app with _Firebase_ for user authentication and create a _custom hook_ for login, logout and accounte deletion (_useAuth_);
- [x] Create a dialog with a form for user login and registration, which can be closed by clicking the button, clicking the overlay of hitting ESC key (for accessibility purposes);
- [x] Create a toast notification informing user logout (to improve);
- [x] Integrate with _MongoDb_ API for GET, POST and DELETE users when authenticating, registrating and deleting account;
- [x] Create a _custom hook_ to fetch the data from the API (_useFetch_) and dinamically feed the Cards in Community Page;
- [x] Organize the Cards grid with Masonry component from Material UI for better screen spacing otimization;
- [x] Integrate the code editor with MongoDb database for creating new codes on Community page;
- [ ] Create a toast notification informing the successful creation of a new post;
- [x] Redirect user to Community page after creating a new post;
- [x] Integrate with MongoDb database for editing codes on Community page;
- [x] Syntax highlighting (with [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)) for the Cards;
- [x] Create a Dashboard so the user can manage her/his codes (similar to the Dashboard page from the [**MiniBlog**](http://curso-react-udemy.vercel.app/) project);
- [x] Create delete functionality;
- [x] General enhancement of the login dialog UX;
- [x] Create Search functionality to filter cards (by keyword or language);
- [ ] Create a Profile page so the user may change her/his name, password and/or profile image;
- [ ] Create option to save the card as image (by using [html2canvas](https://html2canvas.hertzen.com/) or similar);
- [ ] Create option for different languages (idea in evaluation).

<!--
## ⚙️ How to use it

To use the application, visit [this link](https://aluratube-next-js.vercel.app/). It is not necessary to register or login to the app and some of my favorite videos will show on screen.

To save new videos:

- Click the button on the bottom right corner of the screen;
- Type the title of the video;
- Select one of the three playlists;
- Type the video url (YouTube only);
- Click on the "Ver thumbnail" to extract the video image;
- Click in "Cadastrar" button to save it on the specified playlist.
-->

<a href='#top'>🔼 Back to top</a>

---

Developed with 🧡 by [@sucodelarangela](https://angelacaldas.vercel.app)
