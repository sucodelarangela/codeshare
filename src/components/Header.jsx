import * as Styled from './styles.jsx';

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo />
      <Styled.Search />
      <Styled.MenuWrapper>
        <Styled.HeaderIcons />
        <Styled.HeaderIcons />
      </Styled.MenuWrapper>
      <Styled.User>
        <div style={{ width: '2rem', height: '2rem', background: 'white' }}></div>
        <div style={{ width: 'auto', height: '2rem', background: 'white' }}>Usuário</div>
      </Styled.User>
    </Styled.Header>
  );
};
