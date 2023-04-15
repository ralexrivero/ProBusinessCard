import './App.css';
import Info from './components/info';
import About from './components/about';
import Interests from './components/interests';
import Footer from './components/footer';


function App() {

  return (
    <div className="App container container-mb-s pt-xs">
      <div className="grd-col-1">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App
