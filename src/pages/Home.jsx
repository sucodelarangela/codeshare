import * as Styled from './styles.jsx';

export const Home = () => {
  return (
    <div>
      <Styled.EditorField>
        <Styled.Textarea placeholder='Digite aqui o seu código' />
        <Styled.HightlightBtn>Visualizar com o Highlight</Styled.HightlightBtn>
      </Styled.EditorField>
      <form>
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
      </form>
    </div>
  );
};
