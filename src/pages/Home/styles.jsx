import styled from 'styled-components';

const MainMenu = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    grid-area: menu;
    width: 17rem;
    & h3 {
      padding-bottom: 0;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: .4rem;
    }
    & a {
      display: flex;
      align-items: center;
      gap: 1rem;
      &:hover, &:focus {
      opacity: .8;
    }
    }
  }
`;

const EditorField = styled.div`
  margin: 2.5rem 0;
  @media screen and (min-width: 1280px) {
    grid-area: editor;
    margin-top: 0;
  }
`;

const Textarea = styled.div`
  padding: 2rem;
  background: var(--cian);
  border-radius: 8px;
  margin-bottom: 2rem;
  & .editor__dots {
    background: var(--black);
    padding: 1rem 1rem .5rem;
    border-radius: 4px 4px 0 0;
  }
  & textarea {
    display: flex;
    background: var(--black);
    min-height: 18rem;
    width: 100%;
    border-radius: 0 0 4px 4px;
    padding: 1rem;
    white-space: pre-wrap;
    line-height: 1.125rem;
    font-family: var(--roboto);
    font-size: 0.875rem;
    outline: none;
    resize: none;
  }
`;

const HightlightBtn = styled.button`
  width: 100%;
  height: 3.5rem;
  background: var(--highlight-btn);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: var(--highlight-hover);
  }
  &:active {
    border: 4px solid var(--highlight-active);
    transition: 0s
  }
`;

const Form = styled.form`
  @media screen and (min-width: 1280px) {
    width: 17rem;
    grid-area: form;
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 768px) {
    &:nth-child(2) {
      flex-direction: row;
    }
  @media screen and (min-width: 1280px) {
    &:nth-child(2) {
      flex-direction: column;
    }
  }
  }
`;

export { MainMenu, EditorField, Textarea, HightlightBtn, Form, Fieldset };