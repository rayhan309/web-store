import { useLocation } from 'react-router';
import img from '../assets/demo-app (4).webp';
import ster from '../assets/icon-ratings.png';
import dounloade from '../assets/icon-downloads.png';
import like from '../assets/icon-review.png';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import Swal from 'sweetalert2';
import { IoIosStarOutline } from 'react-icons/io';
import { addToStoredDB, getStoredApp } from '../utility/localeData';
import { useEffect, useState } from 'react';

const App = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const location = useLocation();
    // console.log(location.state?.app)

    const app = location.state?.app;

    const copyApp = { ...app }.ratings;
    // console.log(copyApp, app)

    const [disabled, setDisabled] = useState(false)
    // const [installed, setInstalled] = useState(false)

    useEffect(() => {
        const getId = getStoredApp()
        const signleId = getId.find(id => app.id === id)
        if (signleId) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, []);

    // installHandle btn
    const installHandle = (id) => {

        // setDisabled(true)
        console.log(id)
        addToStoredDB(id)
    }

    return (
        <>
            <div className='mt-12 flex flex-col md:flex-row items-center gap-5 md:gap-15 border-b-2 border-gray-300 md:pb-12 pb-6'>
                <img className='shadow cards cursor-pointer rounded-lg' src={img} alt="" />

                {/* left div  */}
                <div className='w-full px-2 md:px-0'>
                    <div className='md:pb-5 pb-2 border-b-2 border-gray-300'>
                        <h2 className='md:text-3xl text-xl font-semibold'>{app.appName}</h2>
                        <p className='text-gray-500 text-xs md:text-[16px] md:mt-2.5'>Developed by <span className='text-blue-500'>productive.io</span></p>
                    </div>
                    {/* div 2 */}
                    <div className='md:mt-6 mt-2 flex md:gap-12 gap-4'>
                        <div className='border-r-2 border-gray-200 md:pr-10 pr-5'>
                            <img className='md:w-10 w-5 mb-2' src={dounloade} alt="sters" />
                            <p className='text-gray-500 md:my-2 text-xs md:text-[16px]'>Dounloads</p>
                            <span className='text-xl md:text-3xl font-semibold md:font-bold'>{app.downloads}</span>
                        </div>
                        <div className='border-r-2 border-gray-200 md:pr-10 pr-5'>
                            <img className='md:w-10 w-5 mb-2' src={ster} alt="sters" />
                            <p className='text-gray-500 md:my-2 text-xs md:text-[16px]'>Average Ratings</p>
                            <span className='text-xl md:text-3xl font-semibold md:font-bold'>{app.ratingAvg}</span>
                        </div>
                        <div>
                            <img className='md:w-10 w-5 mb-2' src={like} alt="sters" />
                            <p className='text-gray-500 md:my-2 text-xs md:text-[16px]'>Total Reviews</p>
                            <span className='text-xl md:text-3xl font-semibold md:font-bold'>{app.reviews}K</span>
                        </div>
                    </div>
                    <button disabled={disabled && true} id={`btn-${app.id}`} onClick={() => installHandle(app.id)} className={`py-3 mt-4 text-white font-semibold shadow-2xl border-2 border-[#00D39080]  bg-[#00D390] px-4 rounded ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>{disabled ? "Installed" : `Install Now (${app.size} MB)`}</button>
                </div>
            </div>


            {/* rechart */}
            <div className='md:mt-14 mt-7 pr-2 border-b-2 border-gray-300 pb-4'>
                <p className='text-xl font-semibold mb-3'>Ratings</p>
                <BarChart
                    width="100%"
                    height={300}
                    data={copyApp}
                    layout="vertical"
                >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#00D390" />
                </BarChart>
            </div>

            {/* descriptions */}
            <div className='md:mt-10 mt-5'>
                <p className='text-xl font-semibold'>Description</p>
                <p className='mt-2.5 text-gray-500'>{app.description}</p>

                <p className='mt-5 text-gray-500'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>

                <p className='mt-5 text-gray-500'> A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>

                <p className='mt-5 text-gray-500'>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
            </div>

            <div className='mt-8'>
                <div className='flex items-center gap-3'>
                    <img
                        className='w-10 h-10 rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    <h3 className=''>{app.title}</h3>
                </div>
                <div className='flex items-center gap-3 ml-8 mt-3'>
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                </div>
                <p className='mt-2.5 text-gray-500'>{app.description}</p>
            </div>
            <div className='mt-8'>
                <div className='flex items-center gap-3'>
                    <img
                        className='w-10 h-10 rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    <h3 className=''>{app.title}</h3>
                </div>
                <div className='flex items-center gap-3 ml-8 mt-3'>
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <IoIosStarOutline className='w-5' />
                    <IoIosStarOutline className='w-5' />
                </div>
                <p className='mt-2.5 text-gray-500'>{app.description}</p>
            </div>
            <div className='mt-8'>
                <div className='flex items-center gap-3'>
                    <img
                        className='w-10 h-10 rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    <h3 className=''>{app.title}</h3>
                </div>
                <div className='flex items-center gap-3 ml-8 mt-3'>
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <IoIosStarOutline className='w-5' />
                </div>
                <p className='mt-2.5 text-gray-500'>{app.description}</p>
            </div>
            <div className='mt-8'>
                <div className='flex items-center gap-3'>
                    <img
                        className='w-10 h-10 rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    <h3 className=''>{app.title}</h3>
                </div>
                <div className='flex items-center gap-3 ml-8 mt-3'>
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                </div>
                <p className='mt-2.5 text-gray-500'>{app.description}</p>
            </div>
            <div className='mt-8'>
                <div className='flex items-center gap-3'>
                    <img
                        className='w-10 h-10 rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    <h3 className=''>{app.title}</h3>
                </div>
                <div className='flex items-center gap-3 ml-8 mt-3'>
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <IoIosStarOutline className='w-5' />
                    <IoIosStarOutline className='w-5' />
                    <IoIosStarOutline className='w-5' />
                </div>
                <p className='mt-2.5 text-gray-500'>{app.description}</p>
            </div>
            <div className='mt-8'>
                <div className='flex items-center gap-3'>
                    <img
                        className='w-10 h-10 rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    <h3 className=''>{app.title}</h3>
                </div>
                <div className='flex items-center gap-3 ml-8 mt-3'>
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <IoIosStarOutline className='w-5' />
                    <IoIosStarOutline className='w-5' />
                    <IoIosStarOutline className='w-5' />
                </div>
                <p className='mt-2.5 text-gray-500'>{app.description}</p>
            </div>
            <div className='mt-8'>
                <div className='flex items-center gap-3'>
                    <img
                        className='w-10 h-10 rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    <h3 className=''>{app.title}</h3>
                </div>
                <div className='flex items-center gap-3 ml-8 mt-3'>
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <img className='w-5' src={ster} alt="sters" />
                    <IoIosStarOutline className='w-5' />
                </div>
                <p className='mt-2.5 text-gray-500'>{app.description}</p>
            </div>

        </>
    );
};

export default App;