export const NavBtn = ({ src, children }) => {
  return (
    <a>
      <img src={src} alt='' aria-hidden='true' />
      {children}
    </a>
  );
};
