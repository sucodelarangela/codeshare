import styled from 'styled-components';

const EditorField = styled.div`
  margin: 2.5rem 0;
  @media screen and (min-width: 1280px) {
    grid-area: editor;
    margin-top: 0;
  }
`;

const Textarea = styled.div`
  padding: 2rem;
  /* background: var(--cian); */
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
  & input, & select {
    display: flex;
    width: 100%;
    height: 3.5rem;
    padding: 1rem;
    background: var(--input);
    border-radius: 8px;
    caret-color: var(--white);
    color: var(--white);
    &:hover, &:focus {
      background: var(--input-hover);
    }
  }
  & input[type="color"] {
    padding: .5rem;
    background: transparent;
    border: 1px solid var(--white);
    border-radius: 8px;
    &::-moz-color-swatch, &::-webkit-color-swatch {
      border: none;
      border-radius: 4px;
    }
    &:hover, &:focus {
      background: var(--input);
    }
  }
  & option {
    color: var(--black);
  }
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
  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
    @media screen and (min-width: 1280px) {
        flex-direction: column;
      }
    }
`;

export { EditorField, Textarea, HightlightBtn, Form, Fieldset };