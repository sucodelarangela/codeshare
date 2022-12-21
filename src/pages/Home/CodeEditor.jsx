import * as Styled from './styles.jsx';
import { ReactComponent as MacDots } from 'assets/mac_buttons.svg';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useHljsValue } from 'context/HljsContext.jsx';

export const CodeEditor = ({ color }) => {
  const [hlActive, setHlActive] = useState(false);
  const [code, setCode] = useState('');
  const { hlStyle } = useHljsValue();
  console.log(hlStyle);
  return (
    <>
      <Styled.Textarea style={{ background: color }}>
        <MacDots />
        {!hlActive ? (
          <textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder='Insira aqui o seu código...'>
          </textarea>
        ) : (
          <SyntaxHighlighter
            style={hlStyle}
            language='css'
            customStyle={{ padding: '2.75rem 1rem 1rem', minHeight: '18rem' }}
            wrapLongLines
          >
            {code}
          </SyntaxHighlighter>
        )}
      </Styled.Textarea>
      <Styled.HightlightBtn onClick={() => setHlActive(!hlActive)}>{hlActive ? 'Voltar a editar o código' : 'Visualizar com o Highlight'}</Styled.HightlightBtn>
    </>
  );
};
