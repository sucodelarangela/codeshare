import * as Styled from './styles.jsx';
import macDots from 'assets/mac_buttons.svg';

export const CodeEditor = () => {
  return (
    <>
      <Styled.Textarea>
        <div className='editor__dots'>
          <img src={macDots} alt="" aria-hidden='true' />
        </div>
        <textarea placeholder='Insira aqui o seu código...'>
        </textarea>
      </Styled.Textarea>
      <Styled.HightlightBtn>Visualizar com o Highlight</Styled.HightlightBtn>
    </>
  );
};
