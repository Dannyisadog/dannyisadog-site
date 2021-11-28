import ReactDom from 'react-dom';
import HomePage from './components/desktop/home/HomePage';

let HomeComponent = HomePage;

ReactDom.render(
    <>
        <HomeComponent />
    </>,
document.getElementById('root'));