import React from 'react';
import { useLocation } from 'react-router-dom';

export const Slider = () => {
  const location = useLocation();

  
  // TEXTO ESCRITO CON EFECTO MAQUINA DE ESCRIBIR CON CODIGO JS
  // const [text, setText] = useState(''); // Estado para el texto que aparece poco a poco
  // const [escribiendo, setEscribiendo] = useState(true); // Estado para controlar si estamos escribiendo o borrando
  // const mensaje = '  Bienvenido a mi Portfolio'; // El mensaje completo que se va a mostrar
  // const velocidad = 100; // La velocidad de aparición o borrado (milisegundos)
  // const indexRef = useRef(0); // Usamos una referencia para manejar el índice
  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //     if (escribiendo) {
  //       // Fase de escritura
  //       setText((prevText) => prevText + mensaje.charAt(indexRef.current));
  //       indexRef.current += 1;

  //       // Cuando termina de escribir, pasamos a la fase de borrado
  //       if (indexRef.current >= mensaje.length) {
  //         setEscribiendo(false); // Cambiamos a la fase de borrado
  //       }
  //     } else {
  //       // Fase de borrado
  //       setText((prevText) => prevText.slice(0, -1)); // Elimina el último carácter

  //       // Cuando el texto se ha borrado completamente, volvemos a escribir
  //       if (text.length === 0) {
  //         setEscribiendo(true); // Cambiamos a la fase de escritura
  //         indexRef.current = 0; // Reiniciamos el índice
  //       }
  //     }
  //   }, velocidad);

  //   return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonta
  // }, [escribiendo, text, mensaje]); // Dependemos de las fases y del texto

    
  return (
    <>
        <div id="slider" className={location.pathname === '/' ? "slider-big" : "slider-small"}>
            <h1 className={'typewriter-container'} style={{ fontFamily: "'Edu AU VIC WA NT Hand', cursive", fontSize:50 }}>
              {location.pathname === '/'              ? 'Bienvenido a mi Portfolio'
                : location.pathname === '/blog'       ? 'Blog'
                : location.pathname === '/formulario' ? 'Contactame'
                : location.pathname === '/article'    ? 'Article'
                : ''
              }
            </h1>
              {/* <Link to='blog' className="btn-white">Sobre Mí</Link> */}
        </div>
    </>
  )
}
