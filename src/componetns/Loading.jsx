import logo from '../assets/logo.png'

const Loading = () => {
    return (
        <div className='flex justify-center items-center mt-48'>
            <h2 className='text-5xl flex items-center gap-2 font-bold text-gray-500'>L<img className='w-10 animate-spin' src={logo} alt="" />ADING..</h2>
        </div>
    );
};

export default Loading;