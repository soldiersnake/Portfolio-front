import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { Blog } from "./Blog";
import { Formulario } from "./Formulario";
import { Article } from "./Article";
import { Slider } from "./Slider";

export const Routers = () => {
  const location = useLocation();
  return (
    <>
    {
      location.pathname !== '/formulario' && 
      <Slider />
    }
      <Routes>
        <Route path="/" element={<Home title={'Bienvenido a mi Blog'}/>} />
        <Route path="/blog" element={<Blog title={'Blog'}/>} />
        <Route path="/article" element={<Article title={'Article'}/>} />
        <Route path="/formulario" element={<Formulario title={'Contactame'}/>} />
        {/* Genera que siempre vayamos al home '/' si la ruta no es encontrada */}
        <Route path="*" element={<Navigate to="/" title={'Error'}/>} />
      </Routes>
    </>
  );
};
