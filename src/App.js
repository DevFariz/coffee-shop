import About from './components/About/About';
import Best from './components/Best/Best';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainIntro from './components/MainIntro/MainIntro';
import './index.css'

const App = () => {
    return (
        <>
            <Header />
            <MainIntro />
            <About />
            <Best />
            <Footer />
        </>
    )
}

export default App;