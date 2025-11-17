import { useLocation } from 'react-router';
import img from '../assets/demo-app (4).webp';
import ster from '../assets/icon-ratings.png';
import dounloade from '../assets/icon-downloads.png';
import like from '../assets/icon-review.png';

const App = () => {

    const location = useLocation();
    console.log(location.state?.app)

    const app = location.state?.app;

    return (
        <>
            <div className='mt-12 flex items-center gap-15 border-b-2 border-gray-300 pb-12'>
                <img className='shadow cards cursor-pointer rounded-lg' src={img} alt="" />

                {/* left div  */}
                <div className='w-full'>
                    <div className='pb-5 border-b-2 border-gray-300'>
                        <h2 className='text-3xl font-semibold'>{app.appName}</h2>
                        <p className='text-gray-500 mt-2.5'>Developed by <span className='text-blue-500'>productive.io</span></p>
                    </div>
                    {/* div 2 */}
                    <div className='mt-6 flex gap-12'>
                        <div className='border-r-2 border-gray-200 pr-10'>
                            <img className='w-10' src={dounloade} alt="sters" />
                            <p className='text-gray-500 my-2'>Dounloads</p>
                            <span className='text-3xl font-bold'>{app.downloads}</span>
                        </div>
                        <div className='border-r-2 border-gray-200 pr-10'>
                            <img className='w-10' src={ster} alt="sters" />
                            <p className='text-gray-500 my-2'>Average Ratings</p>
                            <span className='text-3xl font-bold'>{app.ratingAvg}</span>
                        </div>
                        <div>
                            <img className='w-10' src={like} alt="sters" />
                            <p className='text-gray-500 my-2'>Total Reviews</p>
                            <span className='text-3xl font-bold'>{app.reviews}K</span>
                        </div>
                    </div>
                    <button className='py-3 mt-4 text-white font-semibold shadow-2xl border-2 border-[#00D39080]  bg-[#00D390] px-4 rounded cursor-pointer '>Install Now ({app.size} MB)</button>
                </div>
            </div>


            {/* rechart */}
            

        </>
    );
};

export default App;