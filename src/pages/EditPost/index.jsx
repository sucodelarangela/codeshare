import * as Styled from './styles.jsx';
import { useEffect, useState } from 'react';
import MainMenu from 'components/MainMenu.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from 'hooks/useFetch.js';
import { ReactComponent as MacDots } from 'assets/mac_buttons.svg';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useHljsValue } from 'context/HljsContext.jsx';
import { api } from 'api/api.js';

export const EditPost = () => {
  const { postid } = useParams();
  const { data: post } = useFetch(`/codes/${postid}`);
  const { hljs, hljsKeys, hlStyle, setHlStyle, languages } = useHljsValue();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [style, setStyle] = useState('');
  const [color, setColor] = useState('');
  const [hlActive, setHlActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setName(post.projectName);
      setDescription(post.description);
      setCode(post.code);
      setLanguage(post.language);
      setStyle(post.hljs);
      setColor(post.color);
    }
  }, [post]);

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

  function handleHighlightChange(e) {
    setHlStyle(hljs[e]);
    setStyle(e);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.put(`/codes/${postid}`, {
        projectName: name,
        description,
        code,
        language,
        hljs: style,
        color
      });
    } catch (error) {
      alert(error.message);
    }
    navigate('/community');
  }

  return (
    <section className='home'>
      <MainMenu />
      <Styled.EditorField>
        <Styled.Textarea style={{ background: color }}>
          <MacDots />
          {!hlActive ? (
            <textarea
              className='code'
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onInput={(e) => handleSize(e.target)}
              required
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
      </Styled.EditorField>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Fieldset>
          <h3>Seu projeto</h3>
          <label htmlFor='project__name' className='sr-only'>Digite o nome do seu projeto</label>
          <input
            id='project__name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nome do seu projeto'
            required
          />
          <label htmlFor='project__description' className='sr-only'>Digite uma descrição para o seu projeto</label>
          <input
            id='project__description'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
              value={style}
              required
            >
              <option value="Selecione um tema de highlight" disabled>Selecione um tema de highlight</option>
              {hljsKeys.map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
            <select
              onChange={(e) => setLanguage(e.target.value)}
              name="languages"
              id="project__languages"
              value={language}
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
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </Styled.Fieldset>
        <Styled.HightlightBtn type='submit'>Atualizar projeto</Styled.HightlightBtn>
      </Styled.Form>
    </section >
  );
};