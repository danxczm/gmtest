import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <main className="p-[30px] mx-auto w-full max-w-screen-desktop">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default Layout;
