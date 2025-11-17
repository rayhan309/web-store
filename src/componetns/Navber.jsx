import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../assets/logo.png';

const Navber = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='font-medium text-gray-500'><Link to='/'>Home</Link></li>
                        <li className='font-medium text-gray-500'><Link to='/apps'>Apps</Link></li>
                        <li className='font-medium text-gray-500'><Link to='/installation'>Installation</Link></li>
                    </ul>
                </div>
                <Link to='/' className="flex items-center gap-2 font-semibold"><img className='w-[40px]' src={logo} alt="logo" /> HERO.IO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-medium text-gray-500'><Link to='/'>Home</Link></li>
                    <li className='font-medium text-gray-500'><Link to='/apps'>Apps</Link></li>
                    <li className='font-medium text-gray-500'><Link to='/installation'>Installation</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://github.com/rayhan309' className="btn text-white font-medium bg-linear-to-l to-[#632EE3] from-[#9F62F2]"><FaGithub /> Contribute</Link>
            </div>
        </div>
    );
};

export default Navber;