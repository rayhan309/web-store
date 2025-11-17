import { Suspense } from 'react';
import Banner from '../componetns/Banner';

const dataPromiss = fetch('apps.json').then(res => res.json())


const Home = () => {
    return (
        <>
            <Suspense fallback={<h1>loading.....</h1>}>
                <Banner dataPromiss={dataPromiss} />
            </Suspense>
        </>
    );
};

export default Home;