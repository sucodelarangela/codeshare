import * as Styled from './styles.jsx';
import editorIcon from 'assets/editor_icon.svg';
import commIcon from 'assets/comm_icon.svg';

import { NavBtn } from 'components/NavBtn.jsx';
import { CodeEditor } from './CodeEditor.jsx';

export const Home = () => {
  return (
    <section className='home'>
      <Styled.MainMenu>
        <h3>Menu</h3>
        <NavBtn src={editorIcon}>Editor de código</NavBtn>
        <NavBtn src={commIcon}>Comunidade</NavBtn>
      </Styled.MainMenu>
      <Styled.EditorField>
        <CodeEditor />
      </Styled.EditorField>
      <Styled.Form>
        <Styled.Fieldset>
          <legend>Seu projeto</legend>
          <Styled.HightlightBtn>Nome do seu projeto</Styled.HightlightBtn>
          <Styled.HightlightBtn>Descrição do seu projeto</Styled.HightlightBtn>
        </Styled.Fieldset>
        <Styled.Fieldset>
          <legend>Personalização</legend>
          <Styled.HightlightBtn>Linguagem</Styled.HightlightBtn>
          <Styled.HightlightBtn>Cor</Styled.HightlightBtn>
        </Styled.Fieldset>
        <Styled.HightlightBtn>Salvar projeto</Styled.HightlightBtn>
      </Styled.Form>
    </section>
  );
};
