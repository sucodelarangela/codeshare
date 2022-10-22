import * as Styled from './styles.jsx';

export const Home = () => {
  return (
    <div>
      <Styled.EditorField>
        <Styled.Textarea placeholder='Digite aqui o seu código' />
        <Styled.HightlightBtn>Visualizar com o Highlight</Styled.HightlightBtn>
      </Styled.EditorField>
      {/* Form de edição */}
    </div>
  );
};
