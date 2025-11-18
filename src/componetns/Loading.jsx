import logo from '../assets/logo.png'

const Loading = () => {
    return (
        <div className="max-w-[300px] mx-auto my-14 flex justify-center">
            <h2 className="text-5xl flex items-center gap-2 font-bold text-gray-500">
                L
                <img
                    className="w-10 animate-spin"
                    src={logo}
                    alt="loading"
                />
                OADING..
            </h2>
        </div>
    );
};

export default Loading;
