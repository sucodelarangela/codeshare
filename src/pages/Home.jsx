import * as Styled from './styles.jsx';

export const Home = () => {
  return (
    <section className='home'>
      <Styled.MainMenu>
        <legend>Menu</legend>
        <Styled.HightlightBtn>Editor de código</Styled.HightlightBtn>
        <Styled.HightlightBtn>Comunidade</Styled.HightlightBtn>
      </Styled.MainMenu>
      <Styled.EditorField>
        <Styled.Textarea placeholder='Digite aqui o seu código' />
        <Styled.HightlightBtn>Visualizar com Highlight</Styled.HightlightBtn>
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
