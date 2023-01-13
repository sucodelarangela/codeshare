import LoginModal from 'components/Header/LoginModal';
import MainMenu from 'components/MainMenu';

export const Login = () => {
  return (
    <section className="dashboard">
      <MainMenu />
      <div className="codelist">
        <LoginModal />
      </div>
    </section>
  );
};
