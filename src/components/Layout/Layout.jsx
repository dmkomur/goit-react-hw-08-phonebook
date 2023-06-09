import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { loginSelector } from 'Redux/auth/authSelectors';

export const Layout = () => {
  const isLogin = useSelector(loginSelector);
  return (
    <>
      <Header>
        <h3 style={{ color: '#fff' }}>MYContatcs</h3>
        {isLogin ? <UserMenu /> : <AuthNavigation />}
      </Header>
      <main style={{ width: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <Outlet />
      </main>
    </>
  );
};
