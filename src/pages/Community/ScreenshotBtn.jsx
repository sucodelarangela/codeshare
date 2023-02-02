import html2canvas from 'html2canvas';

import { FaCamera } from 'react-icons/fa';

// eslint-disable-next-line react/display-name
export const ScreenshotBtn = ({ element }) => {
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

  return (
    <FaCamera aria-label='Salvar screenshot' size={28} id='screenshot' onClick={() => handleScreenshot(element)} style={{ backgroundColor: '#141414', padding: '4px', borderRadius: '4px' }} />
  );
};
