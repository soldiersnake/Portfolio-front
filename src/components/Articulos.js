import React from "react";

export const Articulos = () => {
  return (
    <>
      {/* <!-- LISTADO ARTICULOS --> */}
      <div id="articles">
        <article className="article-item" id="article-template">
          <div className="imagen-wrap">
            <img
              src="https://t4.ftcdn.net/jpg/07/06/72/43/360_F_706724331_mXKLYjQ48TnJjR3d5H5DON2Llrfy7PHX.webp"
              alt="Paisaje"
            />
          </div>

          <h2>Articulo de prueba</h2>
          <span className="date">Hace 5 min</span>
          <a href="#">Leer mas</a>
          <div className="clearfix"></div>
        </article>
      </div>
    </>
  );
};
