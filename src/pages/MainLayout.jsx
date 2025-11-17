import { Outlet } from 'react-router';
import Navber from '../componetns/Navber';
import Footer from '../componetns/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navber />
            <div className='min-h-[calc(100vh-285px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;