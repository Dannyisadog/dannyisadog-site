import ReactDom from 'react-dom';
import HomePage from './components/desktop/home/HomePage';
import MobileHomePage from './components/mobile/home/HomePage';

import { isMobile } from "react-device-detect";

let HomeComponent = HomePage;

if (isMobile) {
    HomeComponent = MobileHomePage;
}

ReactDom.render(
    <>
        <HomeComponent />
    </>,
document.getElementById('root'));