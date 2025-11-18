import { Suspense } from 'react';
import Banner from '../componetns/Banner';
import Loading from '../componetns/Loading';

const dataPromiss = fetch('apps.json').then(res => res.json())


const Home = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Banner dataPromiss={dataPromiss} />
            </Suspense>
        </>
    );
};

export default Home;