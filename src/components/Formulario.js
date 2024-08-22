import React from "react";
import { Sidebar } from "./Sidebar";

export const Formulario = () => {
  return (
    <>
      <div className="center">
        <section id="content" style={{width:'100%'}}>
          <h2 className="subheader">Contactame</h2>
          <div>
            <p>Si deseas contactarme, puedes enviarme un mail vía este formulario y yo me contactaré contigo a la brevedad.</p>
          </div>
          <form className="mid-form" action="">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" required/>
            </div>

            <div className="form-group">
              <label htmlFor="motivo">Motivo de contacto</label>
              <input type="text" name="motivo" id="motivo" required/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required/>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" required></textarea>
            </div>

            <div className="form-group radibuttons">
              <input type="radio" name="tipoContacto" value="empresa" required/>
              Empresa
              <input type="radio" name="tipoContacto" value="recluiter" />
              Recluiter
              <input type="radio" name="tipoContacto" value="cliente" />
              Cliente
              <input type="radio" name="tipoContacto" value="otro" />
              Otro
            </div>

            <div className="clearfix"></div>

            <input type="submit" value="Enviar" className="btn-form btn-success-form" />
          </form>
        </section>

        {/* <Sidebar/> */}
        <div className="clearfix"></div>
      </div>
    </>
  );
};
