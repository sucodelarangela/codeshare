import * as Styled from './styles.jsx';
import { useState } from 'react';

import MainMenu from 'components/MainMenu.jsx';
import { CodeEditor } from './CodeEditor.jsx';
import { CustomizationForm } from './CustomizationForm.jsx';

export const Editor = () => {
  const [color, setColor] = useState('#6bd1ff');
  const [code, setCode] = useState('');

  return (
    <section className='home'>
      <MainMenu />
      <Styled.EditorField>
        <CodeEditor color={color} code={code} setCode={setCode} />
      </Styled.EditorField>
      <CustomizationForm color={color} setColor={setColor} code={code} />
    </section>
  );
};
