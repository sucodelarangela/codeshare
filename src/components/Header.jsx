import * as Styled from './styles.jsx';

import logo from 'assets/logo.svg';

export const Header = () => {
  return (
    <Styled.Header>
      <img src={logo} alt="Codeshare home" />
      <label htmlFor="home__search" className='sr-only'>Busque por algo</label>
      <Styled.Search id='home__search' type='text' placeholder='Busque por algo...' />
      <Styled.MenuWrapper>
        <Styled.HeaderIcons />
        <Styled.HeaderIcons />
      </Styled.MenuWrapper>
      <Styled.User href='#'>
        <img src="https://github.com/sucodelarangela.png" alt="" aria-hidden='true' />
        sucodelarangela
      </Styled.User>
    </Styled.Header>
  );
};
