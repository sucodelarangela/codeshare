import * as Styled from './styles.jsx';
import { useState } from 'react';

import MainMenu from 'components/MainMenu.jsx';
import { CodeEditor } from './CodeEditor.jsx';
import { CustomizationForm } from './CustomizationForm.jsx';

export const Home = () => {
  const [color, setColor] = useState('#6bd1ff');

  return (
    <section className='home'>
      <MainMenu />
      <Styled.EditorField>
        <CodeEditor color={color} />
      </Styled.EditorField>
      <CustomizationForm color={color} setColor={setColor} />
      {/* <Styled.Form>
        <Styled.Fieldset>
          <h3>Seu projeto</h3>
          <InputWrapper type='text' placeholder='Nome do seu projeto' />
          <InputWrapper type='text' placeholder='Descrição do seu projeto' />
        </Styled.Fieldset>
        <Styled.Fieldset>
          <h3>Personalização</h3>
          <Styled.HightlightBtn>Linguagem</Styled.HightlightBtn>
          <Styled.HightlightBtn>Cor</Styled.HightlightBtn>
        </Styled.Fieldset>
        <Styled.HightlightBtn>Salvar projeto</Styled.HightlightBtn>
      </Styled.Form> */}
    </section>
  );
};
