import { Link } from 'react-router';
import img from '../assets/logo.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineLinkedin, AiOutlineX } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
        <footer className="footer mt-7 md:mt-14 sm:footer-horizontal bg-gray-800 text-neutral-content p-10">
            <nav className='max-w-[250px]'>
                <span className='flex items-center gap-2'>
                    <img
                        className='w-12 opacity-55'
                        src={img} alt="logo" />
                    <span className='text-lg font-bold text-gray-400'>Hero.Io</span>
                </span>
                <a className="text-gray-500 mt-3">Hero Apps Is A best Populer Apps In Banglades, This Apps Supported In Androed & Desktop & All Divece Supported!</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className='link link-hover'>productive.io</a>
                <a className="link link-hover">About us</a>
                 <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Socale Links</h6>
                <div className='flex items-center gap-4 mt-5'>
                    <Link to="https://www.linkedin.com/in/abu-rayhan-undefined-2514b5390/" className='text-2xl text-gray-500'><AiOutlineX /></Link>
                    <Link to="https://www.facebook.com/profile.php?id=100082830604559" className='text-2xl text-gray-500'><FaFacebookSquare /></Link>
                    <Link to="https://www.linkedin.com/in/abu-rayhan-undefined-2514b5390/" className='text-2xl text-gray-500'><AiOutlineLinkedin /></Link>
                </div>
            </nav>
        </footer>
        <div className='bg-gray-900 py-8 text-center'>
                <p className='text-gray-500'>@Copyright © 2025 - All right reserved</p>
            </div>
            </>
    );
};

export default Footer;