import html2canvas from 'html2canvas';
import styled from 'styled-components';
import { useState } from 'react';

import { FaCamera, FaClipboardCheck } from 'react-icons/fa';

const Tooltip = styled.p`
  background: #fff;
  color: #141414;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  position: absolute;
  right: 0;
  white-space: nowrap;
  &[data-open='true'] {
    animation: slideIn 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-open='false'] {
    display: none;
  }

  @keyframes slideIn {
    from {
      transform: translateX(calc(0% - 25px));
    }
    to {
      transform: translateX(0);
    }
  }
`;

// eslint-disable-next-line react/display-name
export const ActionBtn = ({ element, icon, code }) => {
  const [isHover, setIsHover] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  async function handleScreenshot(id) {
    const canvas = await html2canvas(document.getElementById(id), {
      backgroundColor: '#141414',
      useCORS: true
    });
    const base64image = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = base64image;
    downloadLink.download = `${element}.png`;
    downloadLink.click();
  }

  async function handleClipboard() {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.warn('Failed to copy: ', error);
    }
  }

  return (
    <>
      {icon === 'screenshot' ? (
        <FaCamera
          aria-label='Salvar screenshot'
          title='Salvar screenshot'
          size={32}
          id='screenshot'
          onClick={() => handleScreenshot(element)}
          style={{ padding: '4px', borderRadius: '4px', backgroundColor: isHover && 'rgba(255, 255, 255, .16)' }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          data-html2canvas-ignore
        />
      ) : (
        <>
          <FaClipboardCheck
            aria-label='Copiar para a área de transferência'
            title='Copiar para a área de transferência'
            size={32}
            id='screenshot'
            onClick={handleClipboard}
            style={{ padding: '4px', borderRadius: '4px', backgroundColor: isHover && 'rgba(255, 255, 255, .16)' }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            data-html2canvas-ignore
          />
          {isCopied ? (
            <Tooltip data-open={isCopied}>Código copiado!</Tooltip>
          ) : ''}
        </>
      )}
    </>
  );
};
