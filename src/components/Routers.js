import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Blog } from "./Blog";
import { Formulario } from "./Formulario";
import { Article } from "./Article";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home title={'Bienvenido a mi Blog'}/>} />
        <Route path="/blog" element={<Blog title={'Blog'}/>} />
        <Route path="/formulario" element={<Formulario title={'Contactame'}/>} />
        <Route path="/article" element={<Article title={'Article'}/>} />
        {/* Genera que siempre vayamos al home '/' si la ruta no es encontrada */}
        <Route path="*" element={<Navigate to="/" title={'Error'}/>} />
      </Routes>
    </>
  );
};
