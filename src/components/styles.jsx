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
    grid-template-columns: 17rem calc(100% - 39rem) 17rem;
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

const Search = styled.input`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    height: 3.5rem;
    padding: 1rem;
    background: var(--input);
    border-radius: 8px;
    caret-color: var(--white);
    &:hover, &:focus {
      background: var(--input-hover);
    }
  }
  @media screen and (min-width: 1280px) {
    grid-area: search;
    /* width: 100%; */
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  & button {
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    button {
      display: none;
    }
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const User = styled.a`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-self: flex-end;
    align-items: center;
    gap: .5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    width: fit-content;
    grid-area: user;
    &:hover, &:focus {
      background: var(--input);
    }
    &:active {
      background: var(--input-hover);
    }
    & > img {
      clip-path: circle();
      width: 2rem;
    }
  }
`;

export { Header, Logo, Search, MenuWrapper, User };