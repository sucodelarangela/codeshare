import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as hljs from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaUser } from 'react-icons/fa';

import { Textarea } from 'pages/Editor/styles';
import { User } from 'components/Header/styles';
import MacDots from 'assets/mac_buttons.png';
import { ScreenshotBtn } from './ScreenshotBtn';

const Card = styled(Textarea)`
  margin-bottom: 0;
  padding: 32px 32px 0;
  width: 100%;
  & .mac-dots {
    position: absolute;
    left: 16px;
    top: 16px;
    height: 12px;
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
  position: relative;
  & > img {
    clip-path: circle();
    width: 2rem;
  }
  & .img > svg {
    position: unset;
  }
`;

// eslint-disable-next-line react/display-name
export default ({ id, color, code, project, description, language, highlight, photo, author }) => {
  return (
    <Card color={color} id={id}>
      <div className='card__code'>
        <img src={MacDots} alt="" aria-hidden className='mac-dots' />
        <SyntaxHighlighter
          customStyle={{ padding: '2.75rem 1rem 1rem', borderRadius: '4px' }}
          language={language}
          style={hljs[highlight]}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
        <ScreenshotBtn element={id} />
      </div>
      <div className="card__info">
        <h2>{project}</h2>
        <p>{description}</p>
        <CodeUser>
          {photo ? (
            <img src={photo} alt="" aria-hidden='true' />
          ) : (
            <span className='img'><FaUser size={32} /></span>
          )}

          <p>{author}</p>
        </CodeUser>
      </div>
    </Card >
  );
};
