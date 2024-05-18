import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main className='p-[30px] mx-auto w-full max-w-screen-desktop'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
