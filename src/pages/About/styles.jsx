import styled from 'styled-components';

const Title = styled.h2`
  font-size: 18px;
  letter-spacing: .4em;
  color: var(--white);
  margin: 0 auto 16px;
  max-width: 1200px;
  text-transform: uppercase;
`;

const Quote = styled.h3`
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  color: var(--light-blue);
  text-transform: none;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto 32px;
  `;

const Text = styled.p`
  line-height: 24px;
  margin: 0 auto 40px;  
  max-width: 1200px;
  & span {
    font-style: italic;
  }
  & a {
    color: var(--light-blue);
    border-bottom: 1px solid var(--black);
    &:hover, &:focus {
      border-color: var(--light-blue);
    }
  }
  & h1 {
    font-family: var(--rubik);
    font-size: 60px;
    color: var(--light-blue);
  }
  &:last-of-type {
    margin: 20vh 0;
  }
`;

export { Title, Quote, Text };