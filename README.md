<div id='top'>

# CodeShare: compartilhamento de códigos

</div>

<!-- _[Read it in English](#English)_ -->

O **CodeShare** é uma plataforma de compartilhamento de código, similar a uma rede social para desenvolvedores. Trata-se de uma releitura de um [projeto desenvolvido no começo da minha carreira](https://github.com/sucodelarangela/alura-challenge-front-end), na época desenvolvido com JavaScript, HTML e CSS, além de algumas bibliotecas extras, e que utilizava o _localStorage_ como forma de armazenamento dos dados.

Esta nova versão está sendo desenvolvida atualmente com React, além de contar com um banco de dados do MongoDb e autenticação através do Firebase. O deploy da aplicação será feito assim que o desenvolvimento atingir um percentual mais próximo do completo e será disponibilizado neste mesmo repositório o link de acesso à página. O design está sendo mantido igual ao anterior por questões de desenvolvimento, mas a ideia é que a UI sofra modificações posteriores.

<!-- prettier-ignore -->
<!-- | 🪧 Vitrine. Dev |     |
| -------------- | --- |
| ✨ Nome        | **Codeshare: compartilhamento de códigos** |
| 🏷️ Tecnologias | React, MongoDb, Firebase, Styled-Components, Radix UI, Axios |
| 🚀 URL         | Em breve / Coming soon |
| 🔥 Desafio     | [Design no Figma](https://www.figma.com/file/mhAelfm31DohdGVS1iuDGY/Alura-Challenge---Edi%C3%A7%C3%A3o-Front-end-(Copy)?node-id=207%253A729) |

![](https://raw.githubusercontent.com/sucodelarangela/imersao-react-next/main/public/og-image.png#vitrinedev) 

## Detalhes do projeto

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Next-ffffff?style=for-the-badge&logo=nextdotjs&logoColor=000000"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/styled components-3C3C3C?style=for-the-badge&logo=styled-components&logoColor=DB7093">
  <img src="https://img.shields.io/badge/supabase-1C1C1C?style=for-the-badge&logo=supabase&logoColor=3ECF8E">
  <img src="https://img.shields.io/badge/radix ui-32275F?style=for-the-badge">
</div>

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

<a href='#top'>🔼 Voltar ao topo</a>

-->

---

<!-- <div id="English">

_English version_

</div>

## 🔎 Overview -->

**CodeShare** is an application for saving and sharing code, similar to a social network page for devs. It is a new version of an [older project from the beginning of my career](https://github.com/sucodelarangela/alura-challenge-front-end), developed at the time with vanilla JavaScript, HTML and CSS, besides some extra libs, and it used _localStorage_ to save the data locally.

This new version is currently being developed in React, with a MongoDb database and Firebase authentication. The application will be deployed as soon as it reaches an almost complete status and its url will be available in this same repository. The design is currently the same as the original project but the idea is to change the UI in the future.

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

<a href='#top'>🔼 Back to top</a>

-->

---

Developed with 🧡 by [@sucodelarangela](https://angelacaldas.vercel.app)
