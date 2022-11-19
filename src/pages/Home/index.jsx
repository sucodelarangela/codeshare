import * as Styled from './styles.jsx';

import MainMenu from 'components/MainMenu.jsx';
import { CodeEditor } from './CodeEditor.jsx';
import { CustomizationForm } from './CustomizationForm.jsx';

export const Home = () => {
  return (
    <section className='home'>
      <MainMenu />
      <Styled.EditorField>
        <CodeEditor />
      </Styled.EditorField>
      <CustomizationForm />
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
