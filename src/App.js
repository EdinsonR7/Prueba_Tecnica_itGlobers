import LandingPage from './components/LandingPage/LandingPage.js';
import Articulos from './components/Articulos/Articulos.js'
import Form  from './components/Form/Form.js';
import Footer from './components/Footer/Footer.js'
import Articulos1 from './components/Articulos1/Articulos1.js'
import Articulos2 from './components/Articulos2/Articulos2.js'
import Articulos3 from './components/Articulos3/Articulos3.js'
import Colash from './components/Colash/Colash.js'
// import Articules from './components/Articulos/Articules.jsx';


function App() {
  return (
    <div>
     <>
      <LandingPage />
      <Articulos />
      <Articulos1 />
      {/* <Articulos2 />
      <Articulos3 /> */}
      {/* <Articules /> */}
      <Colash /> 
      <Form />
      <Footer />
      </>
    </div>
  );
}

export default App;
