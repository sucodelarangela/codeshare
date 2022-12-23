import * as Styled from './styles';
import { useHljsValue } from 'context/HljsContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthValue } from 'context/AuthContext';
import useFetch from 'hooks/useFetch';
import { api } from 'api/api';

export const CustomizationForm = ({ color, setColor, code }) => {
  const { hljs, hljsKeys, setHlStyle, languages, setLanguage } = useHljsValue();
  const { user } = useAuthValue();
  const { data } = useFetch('/authors');

  const [codeData, setCodeData] = useState({
    projectName: '',
    description: '',
    code: code,
    language: '',
    color: color,
    hljs: '',
    author: ''
  });

  useEffect(() => {
    setCodeData({ ...codeData, code: code });
  }, [code]);

  function handleLangchange(e) {
    setLanguage(e);
    setCodeData({ ...codeData, language: e });
  }

  function handleHighlightChange(e) {
    setHlStyle(hljs[e]);
    setCodeData({ ...codeData, hljs: e });
  }

  function handleColorChange(e) {
    setColor(e);
    setCodeData({ ...codeData, color: color });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setCodeData({ ...codeData, code: code });
    if (user) {
      await data.forEach(author => {
        if (author.name === user.displayName) {
          setCodeData({ ...codeData, author: author._id });
          api.post('/codes', codeData);
        }
      });
    }
  }
  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Fieldset>
        <h3>Seu projeto</h3>
        <label htmlFor='project__name' className='sr-only'>Digite o nome do seu projeto</label>
        <input
          id='project__name'
          type='text'
          value={codeData.projectName}
          onChange={(e) => setCodeData({ ...codeData, projectName: e.target.value })}
          placeholder='Nome do seu projeto'
          required
        />
        <label htmlFor='project__description' className='sr-only'>Digite uma descrição para o seu projeto</label>
        <input
          id='project__description'
          type='text'
          value={codeData.description}
          onChange={(e) => setCodeData({ ...codeData, description: e.target.value })}
          placeholder='Descrição do seu projeto'
          required
        />
      </Styled.Fieldset>
      <Styled.Fieldset>
        <h3>Personalização</h3>
        <div>
          <label htmlFor='project__highlight' className='sr-only'>Escolha a linguagem do seu código</label>
          <select
            onChange={(e) => handleHighlightChange(e.target.value)}
            name="highlight"
            id="project__highlight"
            defaultValue='Selecione um tema de highlight'
            required
          >
            <option value="Selecione um tema de highlight" disabled>Selecione um tema de highlight</option>
            {hljsKeys.map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          <select
            onChange={(e) => handleLangchange(e.target.value)}
            name="languages"
            id="project__languages"
            defaultValue='Selecione uma linguagem'
            required
          >
            <option value="Selecione uma linguagem" disabled>Selecione uma linguagem</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <label htmlFor='project__color' className='sr-only'>Selecione uma cor para o seu card</label>
          <input
            id='project__color'
            type='color'
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
          />
        </div>
      </Styled.Fieldset>
      <Styled.HightlightBtn type='submit'>Salvar projeto</Styled.HightlightBtn>
    </Styled.Form>
  );
};
