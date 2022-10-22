import * as Styled from './styles.jsx';

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo />
      <Styled.MenuWrapper>
        <Styled.HeaderIcons />
        <Styled.HeaderIcons />
      </Styled.MenuWrapper>
    </Styled.Header>
  );
};
