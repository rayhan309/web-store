import { Link } from "react-router";
import google from '../assets/googleStore.png';
import logo2 from '../assets/hero.png';
import { Suspense, use } from "react";
import AppsShow from "./AppsShow";
import Loading from "./Loading";

const Banner = ({ dataPromiss }) => {

    const appsData = use(dataPromiss)

    return (
        <>
            <div className="pt-14 bg-gray-100 mb-14\">
                <h2 className='text-6xl text-center font-bold'>We Build <br /> <span className='gradient'>Productive</span> Apps</h2>
                <p className="text-gray-500 mt-4 text-center">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> ?Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                {/* link btn */}
                <div className="flex justify-center mt-10">
                    <div className="flex items-center gap-10 mx-auto">
                        <Link to="https://play.google.com/store/games?hl=en" className="btn shadow-xl bnts"><img className="w-6" src={google} alt="" />Google Play</Link>
                        <Link to="https://www.apple.com/app-store/" className="btn shadow-xl bnts"><img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="" />App Store</Link>
                    </div>
                </div>

                <img className=" md:max-w-[650px] mx-auto mt-10" src={logo2} alt="" />

                <div className="bg-linear-to-l to-[#632EE3] from-[#9F62F2] text-white py-14">
                    <h1 className="text-4xl md:text-5xl font-semibold text-center">Trusted by Millions, Built for You</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                        <div className="text-center">
                            <p className="mb-3">Total Downloads</p>
                            <span className="text-5xl md:text-6xl font-extrabold">29.6M</span>
                            <p className="mt-3">21% more than last month</p>
                        </div>
                        <div className="text-center">
                            <p className="mb-3">Total Downloads</p>
                            <span className="text-5xl md:text-6xl font-extrabold">29.6M</span>
                            <p className="mt-3">21% more than last month</p>
                        </div>
                        <div className="text-center">
                            <p className="mb-3">Total Downloads</p>
                            <span className="text-5xl md:text-6xl font-extrabold">29.6M</span>
                            <p className="mt-3">21% more than last month</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* apps show display */}
            <div className="mt-20">
                <h1 className="text-5xl font-bold text-center text-gray-800">Trending Apps</h1>
                <p className="text-center text-gray-500 mt-3">Explore All Trending Apps on the Market developed by us</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-15">
                    {
                        appsData.map(app => <Suspense fallback={<Loading />}><AppsShow key={app.id} app={app} /></Suspense>)
                    }

                </div>
            </div>
            <div className="w-[100px] mx-auto mt-14">
                <Link to='/apps' className="btn text-white font-medium bg-linear-to-l to-[#632EE3] from-[#9F62F2]"> Show All</Link>
            </div>
        </>
    );
};

export default Banner;