import React, {useEffect, useState} from 'react';
import MobileNavigation from "../components/Navigation/MobileNavigation";
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Technologies from "../components/Technologies/Technologies";
import Developer from "../components/Developer/Developer";
import MobileFooter from "../components/Footer/MobileFooter";
import DesktopFooter from "../components/Footer/DesktopFooter";

const Home = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    let isNavMobile = width <= 768;
    let isFooterMobile = width <= 1000;

    return (
        <main className="main home">
            {isNavMobile ? <MobileNavigation /> : <DesktopNavigation />}
            <HeroBanner />
            <Technologies />
            <Developer />
            {isFooterMobile ? <MobileFooter /> : <DesktopFooter />}
        </main>
    );
}

export default Home;
