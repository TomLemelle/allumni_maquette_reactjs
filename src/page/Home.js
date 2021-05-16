import React, {useEffect, useState} from 'react';
import MobileNavigation from "../components/Navigation/MobileNavigation";
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Technologies from "../components/Technologies/Technologies";

const Home = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    let isMobile = width <= 1000;

    return (
        <main className="main home">
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
            <HeroBanner />
            <Technologies />
        </main>
    );
}

export default Home;
