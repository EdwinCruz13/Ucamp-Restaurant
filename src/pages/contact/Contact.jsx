import React from "react";
import "./Contact.css";

//componente
import { Header } from "../../components/header/Header";

export const Contact = () => {
  return (
    <div id="contact-page">
      <Header />

      <section id="contact-body">
        <h2>Contact us</h2>
        <br />
        <form>
          <div className="input-control">
            <label htmlFor="inputName">Tu Nombre</label>
            <input type="text" name="inputName" id="inputName" />
          </div>

          <div className="input-control">
            <label htmlFor="inputEmail">Correo Electrónico</label>
            <input type="text" name="inputEmail" id="inputEmail" />
          </div>

          <div className="input-control">
            <label htmlFor="inputPhone">Telefono</label>
            <input type="text" name="inputPhone" id="inputPhone" />
          </div>

          <div className="input-control">
            <label htmlFor="inputComentario">Comentario</label>
            <textarea name="inputComentario" id="inputComentario" cols="30" rows="10"></textarea>
          </div>

          <div className="input-control">
          <button className="btn btn-primary"><i class="fa fa-paper-plane" aria-hidden="true"></i> Enviar datos</button>
          </div>
        </form>
      </section>

      

    </div>
  );
};
