import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { IoIosStar, IoMdArrowDropdown } from 'react-icons/io';
import img from '../assets/demo-app (4).webp'
import { HiMiniArrowDownTray } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import { CiTrash } from 'react-icons/ci';
import { MdOutlineInstallDesktop } from 'react-icons/md';
import Loading from '../componetns/Loading'

const Installation = () => {

    // all apps
    const allApps = useLoaderData()

    const [apps, setApps] = useState([])
    const [sort, setSort] = useState("")
    const [loading, setLoading] = useState(false)

    // get locale data
    useEffect(() => {
        // get stored IDs from localStorage
        const storedIds = JSON.parse(localStorage.getItem("app")) || [];

        if (storedIds.length > 0) {
            const installedApps = allApps?.filter(app => storedIds.includes(app.id));
            setApps(installedApps);
        }

        // map IDs to full app objects from allApps
    }, [allApps]);

    const unstallHandle = id => { 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your App has been deleted.",
                    icon: "success"
                });


                // remove from state
                const filteredApps = apps.filter(app => app.id !== id);
                setApps(filteredApps);

                // update localStorage
                const filteredIds = filteredApps.map(app => app.id);
                localStorage.setItem("app", JSON.stringify(filteredIds));
            }
        });


    };


    const sortHandle = type => {
        setLoading(true)
        setSort(type)
        if (type === "high") {
            const high = apps.sort((a, b) => {
                const parse2 = parseInt(a.downloadsInMillions);
                const parse = parseInt(b.downloadsInMillions);
                return parse - parse2;
            })
            setApps(high)
        }
        if (type === "low") {
            const high = apps.sort((a, b) => {
                const parse = parseInt(a.downloadsInMillions);
                const parse2 = parseInt(b.downloadsInMillions);
                return parse - parse2;
            })
            setApps(high)
        }

        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }
    // console.log(sort)

    return (
        <div className='mt-10 md:mt-28'>
            <h2 className='text-3xl md:text-5xl font-bold text-gray-700 flex justify-center items-center gap-3'>Your Installed Apps <MdOutlineInstallDesktop /></h2>
            <p className='text-gray-500 font-medium mt-3 md:mt-4 text-center'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex justify-between items-center mt-10'>
                <h3 className='text-xl md:text-3xl font-semibold '>( {apps.length} ) Apps Installed</h3>
                <details className="dropdown">
                    <summary className="btn m-1">Sort by {sort ? sort : ''}<IoMdArrowDropdown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-38 p-2 shadow-sm">
                        <li onClick={() => sortHandle("high")}><a>High</a></li>
                        <li onClick={() => sortHandle("low")}><a>Low</a></li>
                    </ul>
                </details>
            </div>

            {
                loading ? <Loading />
                    : (
                        apps.length > 0 &&
                        apps?.map(app =>
                            <div key={app.id} className='flex flex-col md:flex-row justify-between mt-8 p-2 rounded-lg items-center cards bg-white w-full'>

                                <div className='flex items-center gap-2 md:gap-10'>
                                    <img className='w-28 rounded-lg' src={img} alt="apps" />

                                    <div>

                                        <h3 className='text-xl font-medium '>{app.appName}</h3>

                                        <div className='flex items-center gap-4 mt-3'>
                                            <div>
                                                <span className='text-[#00D390] flex items-center gap-1 '><HiMiniArrowDownTray /> {app.downloads}</span>
                                            </div>
                                            <div>
                                                <span className='text-[#FF8811] flex items-center gap-1 '><IoIosStar /> {app.ratingAvg}</span>
                                            </div>
                                            <div>
                                                <span className='text-gray-500 flex items-center gap-1 '><HiMiniArrowDownTray />{app.size} MB</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <button onClick={() => unstallHandle(app.id)} className='btn mt-3 md:mt-0 md:py-6 md:px-6 bg-[#00D390] md:text-xl font-medium text-white'>Unstall <CiTrash /></button>
                            </div>
                        ))
            }
        </div>
    );
};

export default Installation;