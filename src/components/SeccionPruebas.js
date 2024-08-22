import React from "react";
import { Articulos } from "./Articulos";

export const SeccionPruebas = () => {
  return (
    <>
      <section id="content">
        <h2 className="subheader">Ultimos Articulos</h2>

        <section className="componentes">
          <Articulos/>
        </section>
      </section>
    </>
  );
};
