import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  @media screen and (min-width: 1280px) {
    padding-bottom: 2.5rem;
    display: grid;
    grid-template-areas: 'logo search user';
    grid-template-columns: 17rem auto 17rem;
    gap: 2.5rem;
  }
`;

const Logo = styled.div`
  width: 9.0625rem;
  height: 2.125rem;
  background: white;
  @media screen and (min-width: 1280px) {
    grid-area: logo;
  }
`;

const Search = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    height: 3rem;
    background: white;
  }
  @media screen and (min-width: 1280px) {
    grid-area: search;
    width: 100%;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const HeaderIcons = styled.div`
  width: 3rem;
  height: 3rem;
  background: white;
  @media screen and (min-width: 768px) {
    &:first-child {
      display: none;
    }
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const User = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: end;
    gap: .5rem;
    grid-area: user;
  }
`;

export { Header, Logo, Search, MenuWrapper, HeaderIcons, User };