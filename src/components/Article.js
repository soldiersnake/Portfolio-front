import React from "react";
import { Sidebar } from "./Sidebar";

export const Article = () => {
  return (
    <>
    <div className="center">
      <section id="content">
        <article className="article-item article-detail">
          <div className="imagen-wrap">
            <img
              src="https://t4.ftcdn.net/jpg/07/06/72/43/360_F_706724331_mXKLYjQ48TnJjR3d5H5DON2Llrfy7PHX.webp"
              alt="Paisaje"
            />
          </div>
          <h1 className="subheader">Articulo de prueba</h1>

          <span className="date">Hace 5 min</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            dolores iusto ullam temporibus rem accusamus, numquam praesentium
            cumque culpa veniam excepturi unde quibusdam consectetur explicabo
            enim tempora repellat quidem impedit?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium recusandae, illo numquam sequi pariatur nihil nisi nobis
            voluptas sit est? Voluptatibus error nesciunt nam cum ea, quod
            ratione maiores sint.
          </p>
          <div className="clearfix"></div>
        </article>
      </section>
      <Sidebar/>
    </div>
    </>
  );
};
