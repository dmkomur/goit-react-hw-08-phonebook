import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { tokenSelector } from 'Redux/auth/authSelectors';

export const Layout = () => {
  const isToken = useSelector(tokenSelector);
  return (
    <>
      <Header>
        <h3 style={{ color: '#fff' }}>MYContatcs</h3>
        {isToken ? <UserMenu /> : <AuthNavigation />}
        {/* <AuthNavigation />
        <UserMenu /> */}
      </Header>
      <main style={{ width: '1200px', margin: '0 auto' }}>
        <Outlet />
      </main>
    </>
  );
};
