import { MainMenu } from 'components/MainMenu';
import { Link } from 'react-router-dom';
import { Quote, Title, Text, Watermark } from './styles';

export const About = () => {
  return (
    <section className="dashboard">
      <MainMenu />
      <div className="codelist about">
        <Quote>&quot;Feliz aquele que transfere o que sabe e<br />aprende o que ensina&quot; — Cora Coralina</Quote>
        <hr style={{ margin: '0 auto 32px', border: '1px solid gray', width: '200px' }} />
        <Title>Sobre</Title>
        <Text>O CodeShare é uma plataforma de compartilhamento de código, similar a uma rede social para desenvolvedores. Trata-se de uma releitura de um projeto desenvolvido no começo da minha carreira, na época desenvolvido com JavaScript, HTML e CSS, além de algumas bibliotecas extras, e que utilizava o <span>localStorage</span> como forma de armazenamento dos dados.<br />Na página da <Link to='/'>Comunidade</Link> você consegue visualizar os códigos publicados pelos usuários da aplicação. É possível testar os temas de <span>syntax highlight</span> na página do <Link to='/editor'>Editor de Códigos</Link>, porém só é possível salvar o card seu código após fazer login no sistema.</Text>
        <Title>Como usar</Title>
        <Text>Após fazer o seu <Link to='/register'>cadastro</Link> ou seu <Link to='/login'>login</Link> no sistema, você pode criar o seu card no <Link to='/editor'>Editor de Códigos</Link>. Digite o seu código no campo apropriado, adicione um título e uma breve descrição. Para visualizar o <span>syntax highlight</span>, acione o botão <b>Visualizar com o Highlight</b> (por padrão, o Editor usa o tema <span>a11yDark</span>, mas você pode escolher qualquer tema disponível no menu <span>dropdown</span>). Selecione o tema desejado, a linguagem de programação do seu código e uma cor de borda para o seu card.<br />Ao salvar o projeto, você será redirecionado para a página da <Link to='/'>Comunidade</Link>, onde poderá ver o Card salvo.<br />Na página de <Link to='/dashboard'>Dashboard</Link> você pode gerenciar os seus Cards salvos, com a opção de <b>Editar</b> ou <b>Deletar</b> seus projetos.<br />Você pode fazer logout ou deletar a sua conta na plataforma sempre que desejar, bastando acessar o <b>Menu</b> no canto superior direito da aplicação e clicando no botão correspondente.</Text>
        <Title>Próximas atualizações</Title>
        <Text>Página de <b>Perfil</b> para gerenciamento dos dados do usuário.<br />Exportação dos Cards em formato de imagem.</Text>
        <Title>Informações adicionais</Title>
        <Text>Projeto desenvolvido por <a href='https://github.com/sucodelarangela' target='_blank' rel="noreferrer">Angela Caldas</a> com React, styled-components, Firebase, MongoDB, Axios e MUI.<br /><span>Syntax highlighting</span> com <a href='https://www.npmjs.com/package/react-syntax-highlighter' target='_blank' rel="noreferrer">react-syntax-highlighter</a>. Ícones do <a href='https://react-icons.github.io/react-icons' target='_blank' rel="noreferrer">react-icons</a>.</Text>
        <Watermark style={{ textAlign: 'center' }}>C</Watermark>
      </div>
    </section >
  );
};
