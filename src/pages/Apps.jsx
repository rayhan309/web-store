import { useLoaderData, useNavigation } from "react-router";
import AppsShow from "../componetns/AppsShow";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Loading from "../componetns/Loading";
import { FaAppStore } from "react-icons/fa";

const Apps = () => {

    const appsData = useLoaderData();

    const [apps, setApps] = useState(appsData);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    console.log(navigation.state);

    // search input handle
    const searchHandle = (e) => {
        setLoading(true);
        const input = e.target.value.toLowerCase();

        const filteredApps = appsData.filter(app =>
            app.appName.toLowerCase().includes(input)
        );

        setApps(filteredApps);
        setTimeout(()=> setLoading(false), 1500)
    };

    return (
        <>
            <h1 className="mt-9 md:mt-14 text-4xl md:text-5xl font-semibold text-gray-700 flex md:gap-3 justify-center items-center">
                Our All Applications <FaAppStore />
            </h1>
            <p className="text-gray-500 text-center mt-2 md:mt-4">
                Explore All Apps on the Market developed by us. We code for Millions
            </p>

            <div className="md:mt-20 mt-10 flex flex-col md:flex-row justify-between items-center">
                <p className="text-2xl font-semibold text-gray-700">
                    ({appsData.length}) Apps Found
                </p>
                <div className="relative">
                    <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                    <input
                        onChange={searchHandle}
                        className="border mt-3 md:mt-0 border-gray-300 rounded-lg py-2 pl-10 pr-3 w-[250px]"
                        type="text"
                        name="name"
                        placeholder="Search App"
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-6">
                {loading ? (
                    <Loading />
                ) : (
                    apps.length === 0 ? (
                        <div className="col-span-4">
                            <h2 className="mt-14 text-4xl font-bold text-gray-600 text-center">
                                No Apps Founds!
                            </h2>
                            <a
                                href="/apps"
                                className="btn ml-[46%] mt-5 text-white font-medium bg-linear-to-l to-[#632EE3] from-[#9F62F2]"
                            >
                                Show All Apps
                            </a>
                        </div>
                    ) : (
                        apps.map(app => (
                            <AppsShow key={app.id} app={app} />
                        ))
                    )
                )}
            </div>
        </>
    );
};

export default Apps;
