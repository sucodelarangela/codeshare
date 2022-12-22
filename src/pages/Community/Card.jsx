import styled from 'styled-components';
import { Textarea } from 'pages/Home/styles';
import { User } from 'components/Header/styles';
import { ReactComponent as MacDots } from 'assets/mac_buttons.svg';
import { FaUser } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as hljs from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Card = styled(Textarea)`
  margin-bottom: 0;
  padding: 32px 32px 0;
  width: 100%;
  & svg {
    position: absolute;
    left: 16px;
    top: 16px;
  }
  & .card__code {
    width: 100%;
    border-radius: 4px;
    font-family: var(--roboto);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: calc(100% + 64px);
      height: calc(100% + 64px);
      background: ${props => props.color ? props.color : '#6bd1ff'};
      z-index: -1;
      top: -2rem;
      left: -2rem;
      border-radius: 8px;
    }
  }
  & .card__info{
    position: relative;
    z-index: -2;
    background: var(--overlay);
    margin-top: 24px;
    margin-left: -32px;
    width: calc(100% + 64px);
    padding: 24px;
    border-radius: 0 0 8px 8px;
    & > h2 {
      font-size: 1.25rem;
      margin-bottom: 8px;
    }
    & > p {
      margin-bottom: 24px;
    }
  }
`;

const CodeUser = styled(User).attrs({ as: 'div' })`
  display: flex;
  pointer-events: none;
  padding: 0;
  align-items: center;
  gap: .5rem;
  & > img {
    clip-path: circle();
    width: 2rem;
  }
`;

// eslint-disable-next-line react/display-name
export default ({ color, code, project, description, language, highlight, photo, author }) => {
  return (
    <Card color={color}>
      <div className='card__code'>
        <MacDots />
        <SyntaxHighlighter
          customStyle={{ padding: '2.75rem 1rem 1rem', borderRadius: '4px' }}
          language={language}
          style={hljs[highlight]}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="card__info">
        <h2>{project}</h2>
        <p>{description}</p>
        <CodeUser>
          <img src={photo ? photo : <FaUser size={32} />} alt="" aria-hidden='true' />
          <p>{author}</p>
        </CodeUser>
      </div>
    </Card >
  );
};
