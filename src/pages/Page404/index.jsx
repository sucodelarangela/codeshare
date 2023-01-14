import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Page404 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  animation: bounce 1.1s both;
  text-align: center;
  & h2 {
    font-family: var(--rubik);
    font-size: 80px;
    color: var(--light-blue);
    margin-bottom: 32px;
    @media screen and (min-width: 768px){
      font-size: 100px;
    }
  }
  & p {
    font-size: 18px;
  }
  & button {
      display: inline-block;
      padding: 16px;
      width: fit-content;
      margin: 32px auto 0;
      border-radius: 4px;
      background: var(--light-blue);
      font-weight: bold;
      &:hover, &:focus {
        opacity: .8;
      }
    }

  @keyframes bounce {
    0% {
      transform: translateY(-500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(-65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(-28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(-8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
`;


// eslint-disable-next-line react/display-name
export default () => {
  const navigate = useNavigate();

  return (
    <Page404>
      <h2>Oops...</h2>
      <p>Parece que a página que você está procurando não existe...</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </Page404>
  );
};
