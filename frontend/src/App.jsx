import './App.css'
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx'
import Home from './components/landingPage/Home.jsx';
import NewsLetter from './components/newsletterSection/NewsLetter.jsx';
function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <NewsLetter/>
     <Footer/>
    </>
  )
}

export default App
