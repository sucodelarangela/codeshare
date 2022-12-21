import * as Styled from './styles.jsx';
import { ReactComponent as MacDots } from 'assets/mac_buttons.svg';

export const CodeEditor = ({ color }) => {
  return (
    <>
      <Styled.Textarea style={{ background: color }}>
        <MacDots />
        <textarea placeholder='Insira aqui o seu código...'>
        </textarea>
      </Styled.Textarea>
      <Styled.HightlightBtn>Visualizar com o Highlight</Styled.HightlightBtn>
    </>
  );
};
