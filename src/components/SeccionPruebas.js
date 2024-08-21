import React from "react";
import { MiComponente } from "./MiComponente";
import { Peliculas } from "./Peliculas";
import { Articulos } from "./Articulos";

export const SeccionPruebas = () => {
  return (
    <>
      <section id="content">
        <h2 className="subheader">Ultimos Articulos</h2>

        <section className="componentes">
          {/* <MiComponente />
          <Peliculas /> */}
          <Articulos/>
        </section>
      </section>
    </>
  );
};
