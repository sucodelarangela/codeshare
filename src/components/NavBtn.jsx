import { NavLink } from 'react-router-dom';

export const NavBtn = ({ src, children, route }) => {
  return (
    <NavLink to={route}>
      <img src={src} alt='' aria-hidden='true' />
      {children}
    </NavLink>
  );
};
