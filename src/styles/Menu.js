import styled from 'styled-components';
import * as Toast from '@radix-ui/react-toast';

const Menu = styled.div`
  background: var(--white);
  width: fit-content;
  padding: 16px;
  border-radius: 8px;
  position: absolute;
  right: 32px;
  top: 100px;
  z-index: 10;
  a {
    display: flex;
    color: var(--dark-blue);
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8px;
    gap: 5px;
    opacity: .56;
    &:hover, &:focus {
        opacity: .8;
      }
    &.active {
      opacity: 1;
    }
  }
  hr {
    border: 1px solid var(--light-blue);
    margin-bottom: 16px;
  }
  button {
    display: block;
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    transition: .3s;
  }
`;

const ToastViewport = styled(Toast.Viewport)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`;

const ToastRoot = styled(Toast.Root)`
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;
  &[data-state='open'] {
    animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state='closed'] {
    animation: hide 100ms ease-in;
  }

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(calc(0% - 25px));
    }
    to {
      transform: translateX(0);
    }
  }
`;

const ToastTitle = styled(Toast.Title)`
  grid-area: title;
  margin-bottom: 5px;
  font-weight: 500;
  color: var(--dark-blue);
  font-size: 16px;
`;

const ToastDescription = styled(Toast.Description)`
  grid-area: description;
  margin: 0;
  color: var(--dark-blue);
  font-size: 14px;
  line-height: 1.3;
`;

export { Menu, ToastViewport, ToastRoot, ToastTitle, ToastDescription };
