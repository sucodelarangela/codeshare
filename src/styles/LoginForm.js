import styled from 'styled-components';
import { RiEyeLine, RiEyeOffFill } from 'react-icons/ri';

const LoginForm = styled.section`
  padding: 0 32px;
  border-radius: 8px;
  & h2, p {
    text-align: center;
    margin-bottom: 16px;
  }
  & h2 {
    font-size: 24px;
  }
  & p {
    font-size: 16px;
    margin-bottom: 24px;
    &.error {
      color: var(--dark-red);
      background-color: var(--light-red);
      border: 1px solid var(--red-border);
      padding: 5px;
      border-radius: 4px;
      margin-top: 16px;
    }
  }
  & .register {
    font-size: 16px;
    color: var(--light-blue);
    border-bottom: 1px solid var(--black);
    width: fit-content;
    margin: 0 auto 16px;
    cursor: pointer;
    transition: border .3s;
    &:hover {
      border-bottom: 1px solid var(--light-blue);
    }
  }
  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    & label {
      margin-bottom: 8px;
    }
    & div {
      position: relative;
    }

    & input {
      background: var(--input);
      width: 100%;
      padding: 8px;
      margin-bottom: 24px;
      border-radius: 4px;
      box-shadow: 0 2px 0 var(--light-blue);
      transition: 3s;
      &:hover, &:focus {
        background: var(--input-hover);
      }
    }
    & button {
      display: inline-block;
      padding: 16px;
      width: fit-content;
      margin: 0 auto;
      border-radius: 4px;
      background: var(--light-blue);
      font-weight: bold;
      &:hover,
      &:focus {
        opacity: 0.8;
      }
      &:disabled {
        cursor: not-allowed;
        background: var(--highlight-btn);
        border: none;
      }
    }
  }
`;

const EyeLine = styled(RiEyeLine)`
  position: absolute;
  right: 13px;
  top: 35px;
  font-size: 1.25rem;
  cursor: pointer;
`;

const EyeOffFill = styled(RiEyeOffFill)`
  position: absolute;
  right: 13px;
  top: 35px;
  font-size: 1.25rem;
  cursor: pointer;
`;

export { LoginForm, EyeLine, EyeOffFill };
