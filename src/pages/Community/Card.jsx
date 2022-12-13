import styled from 'styled-components';
import { Textarea } from 'pages/Home/styles';
import { User } from 'components/Header/styles';
import { ReactComponent as MacDots } from 'assets/mac_buttons.svg';

const Card = styled(Textarea)`
  white-space: pre-wrap;
  height: fit-content;
  background: ${props => props.color ? props.color : '#6bd1ff'};
  position: relative;
  & svg {
    position: relative;
    margin-bottom: 1rem;
  }
  & .card__code {
    background: var(--black);
    width: 100%;
    border-radius: 4px;
    padding: 1rem;
    font-family: var(--roboto);
  }
  & .card__info{
    background: var(--overlay);
    position: absolute;
    left: 0;
    width: 100%;
    padding: 56px 24px 24px;
    z-index: -1;
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
`;

// eslint-disable-next-line react/display-name
export default ({ color, code, project, description, language, author }) => {
  return (
    <Card color={color}>
      <div className='card__code'>
        <MacDots />
        <p>{code}</p>
      </div>
      <div className="card__info">
        <h2>{project}</h2>
        <p>{description}</p>
        <CodeUser>
          <img src="https://github.com/sucodelarangela.png" alt="" aria-hidden='true' />
          <p>{author}</p>
        </CodeUser>
      </div>
    </Card>
  );
};
