import './App.css'
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx'
import Home from './components/landingPage/Home.jsx';
import News from './components/newsletterSection/News.jsx';
import PromoSection from './components/promoSection/PromoSection.jsx';
function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <PromoSection/>
     <News/>
     <Footer/>
    </>
  )
}

export default App
