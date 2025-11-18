import app from '../assets/App-Error.png'

const Error_2 = () => {
    return (
        <div className='flex justify-center mt-[120px] bg-white'>
            <div>
                <img src={app} alt="" />
                <img src={app} alt="" />
                <h2 className='text-5xl font-semibold text-center mt-10'>Oops, App not found!</h2>
                <p className='text-gray-500 text-center mt-2'>The App you are looking for is not available.</p>
                <Link to='/apps' className="btn mt-4 ml-[38%] bg-linear-to-l text-white font-medium to-[#632EE3] from-[#9F62F2]">Go Back</Link>
            </div>
        </div>
    );
};

export default Error_2;