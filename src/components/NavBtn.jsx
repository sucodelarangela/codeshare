import { NavLink } from 'react-router-dom';

export const NavBtn = ({ children, route }) => {
  return (
    <NavLink to={route}>
      {children}
    </NavLink>
  );
};
