import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import "./assets/css/App.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import { Routers } from './components/Routers';

function App() {
  return (

    <Router>
      <div className="App">
        {/* Aquí puedes colocar un navbar o links */}
        <Header />

       
        <Routers/> {/* EN ESTE COMPONETE MANEJO LAS RUTAS */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/article" element={<Article />} />
           Genera que siempre vayamos al home '/' si la ruta no es encontrada 
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes> */}
      </div>
      <div className='clearfix'>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
