import { useLoaderData } from "react-router";
import AppsShow from "../componetns/AppsShow";
import { IoSearchOutline } from "react-icons/io5";

const Apps = () => {

    const appsData = useLoaderData()
    // console.log(appsData)

    return (
        <>
            <h1 className="mt-10 text-5xl font-semibold text-gray-700 text-center">Our All Applications</h1>
            <p className="text-gray-500 text-center mt-3">Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="mt-20 flex justify-between items-center">
                <p className="text-2xl font-semibold text-gray-700">({appsData.length}) Apps Found</p>
                <div className="relative">
                    <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                    <input
                        className="border border-gray-300 rounded-lg py-2 pl-10 pr-3 w-[250px]"
                        type="text"
                        name="name"
                        placeholder="Search App"
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-6">
                {
                    appsData.map(app => <AppsShow key={app.id} app={app} />)
                }
            </div>
        </>
    );
};

export default Apps;