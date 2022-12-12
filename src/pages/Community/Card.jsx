import styled from 'styled-components';
import { Textarea } from 'pages/Home/styles';
// import macDots from 'assets/mac_buttons.svg';
import { ReactComponent as MacDots } from 'assets/mac_buttons.svg';

const Card = styled(Textarea)`
  white-space: pre-wrap;
  /* border: 2rem solid ${props => props.color ? props.color : '#6bd1ff'}; */
  background: ${props => props.color ? props.color : '#6bd1ff'};
  & svg {
    position: relative;
    margin-bottom: 1rem;
  }
  & div {
    background: var(--black);
    height: 100%;
    width: 100%;
    border-radius: 4px;
    padding: 1rem;
    /* line-height: 1.125rem; */
    font-family: var(--roboto);
  }
`;

// eslint-disable-next-line react/display-name
export default ({ children, color }) => {
  return (
    <Card color={color}>
      <div>
        <MacDots />
        {children}
      </div>
    </Card>
  );
};
