import { FaDownload } from 'react-icons/fa';
import appLogo from '../assets/demo-app (1).webp';
import ster from '../assets/icon-ratings.png';
import { useNavigate, useNavigation } from 'react-router';


const AppsShow = ({ app }) => {

    const navigation = useNavigation()

    const navigate = useNavigate()

    // installation Handle
    const installationHandle = (app, n) => {
        console.log(n.state)
        navigate(`/apps-ditailes/${app.id}`, { state: { app } })
    }

    return (
        <div
            onClick={() => installationHandle(app, navigation)}
            className='p-4 bg-white shadow rounded-lg cards cursor-pointer'>
            <img className='rounded-lg w-full max-h-[300px]' src={appLogo} alt="apps" />
            <h2 className='text-gray-600 mt-2'>{app.appName}</h2>
            <div className='flex justify-between items-center mt-6'>
                <p className='flex items-center gap-2 bg-[#00D39020] py-1 px-3 rounded-full text-[#00D390]'><FaDownload /> {app.downloads}</p>
                <p className='flex items-center gap-2 bg-amber-100 py-1 px-3 rounded-full text-amber-500'> <img className='w-4' src={ster} alt="icone" /> <span className='mt-0.5'>{app.ratingAvg}</span></p>
            </div>
        </div>
    );
};

export default AppsShow;