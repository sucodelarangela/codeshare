import * as Styled from './styles.jsx';
import { ReactComponent as MacDots } from 'assets/mac_buttons.svg';
import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useHljsValue } from 'context/HljsContext.jsx';

export const CodeEditor = ({ color }) => {
  const [hlActive, setHlActive] = useState(false);
  const [code, setCode] = useState('');
  const { hlStyle, language } = useHljsValue();

  function handleSize(e) {
    e.style.height = 'auto';
    e.style.height = e.scrollHeight + 'px';
  }

  useEffect(() => {
    const textarea = document.querySelector('.code');
    if (textarea) {
      handleSize(textarea);
    }
  }, [hlActive]);

  return (
    <>
      <Styled.Textarea style={{ background: color }}>
        <MacDots />
        {!hlActive ? (
          <textarea
            className='code'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onInput={(e) => handleSize(e.target)}
            placeholder='Insira aqui o seu código...'
          >
          </textarea>
        ) : (
          <SyntaxHighlighter
            style={hlStyle}
            language={language}
            customStyle={{ padding: '2.75rem 1rem 1rem', minHeight: '18rem', fontSize: '14px' }}
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
