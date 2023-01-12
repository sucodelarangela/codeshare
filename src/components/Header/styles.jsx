import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  padding: 1rem;
  background: rgba(20, 20, 20, .7);
  box-shadow: 0 2px 4px rgba(20, 20, 20, .8);
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  backdrop-filter: blur(5px);
  @media screen and (min-width: 768px) {
    padding: 1rem 2rem 1rem;
  }
  @media screen and (min-width: 1280px) {
    padding: 1rem 2.5rem 1rem;
    display: grid;
    grid-template-areas: 'logo search user';
    grid-template-columns: 17rem calc(100% - 39rem) 17rem;
  }
`;

const Search = styled.input`
  display: none;
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  background: var(--input);
  border-radius: 8px;
  caret-color: var(--white);
  &:hover, &:focus {
    background: var(--input-hover);
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
    grid-area: search;
    /* width: 100%; */
  }
  &.show {
    display: flex;
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

const User = styled.button`
  all: unset;
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

export { Header, Search, MenuWrapper, User };