import * as Styled from './styles';

export const CustomizationForm = () => {
  return (
    <Styled.Form>
      <Styled.Fieldset>
        <h3>Seu projeto</h3>
        <label htmlFor='project__name' className='sr-only'>Digite o nome do seu projeto</label>
        <input id='project__name' type='text' placeholder='Nome do seu projeto' />
        <label htmlFor='project__description' className='sr-only'>Digite uma descrição para o seu projeto</label>
        <input id='project__description' type='text' placeholder='Descrição do seu projeto' />
      </Styled.Fieldset>
      <Styled.Fieldset>
        <h3>Personalização</h3>
        <div>
          <label htmlFor='project__language' className='sr-only'>Escolha a linguagem do seu código</label>
          <select name="languages" id="project__language">
            <option value="Selecione ume linguagem" selected disabled>Selecione uma linguagem</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="react">React</option>
            <option value="json">JSON</option>
            <option value="typescript">TypeScript</option>
          </select>
          <label htmlFor='project__color' className='sr-only'>Selecione uma cor para o seu card</label>
          <input id='project__color' type='color' />
        </div>
      </Styled.Fieldset>
    </Styled.Form>
  );
};