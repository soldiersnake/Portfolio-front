import React from "react";
import { Sidebar } from "./Sidebar";

export const Formulario = () => {
  return (
    <>
      <div className="center">
        <section id="content">
          <h1 className="subheader">Formulario</h1>
          <form className="mid-form" action="">
            <div className="form-group">
              <label for="nombre">Nombre</label>
              <input type="text" name="nombre" />
            </div>

            <div className="form-group">
              <label for="apellidos">Apellidos</label>
              <input type="text" name="apellidos" />
            </div>

            <div className="form-group">
              <label for="bio">Biografia</label>
              <textarea name="bio"></textarea>
            </div>

            <div className="form-group radibuttons">
              <input type="radio" name="genero" value="hombre" />
              Hombre
              <input type="radio" name="genero" value="mujer" />
              Mujer
              <input type="radio" name="genero" value="otro" />
              Otro
            </div>

            <div className="clearfix"></div>

            <input type="submit" value="Enviar" className="btn btn-success" />
          </form>
        </section>

        <Sidebar/>
        <div className="clearfix"></div>
      </div>
    </>
  );
};
