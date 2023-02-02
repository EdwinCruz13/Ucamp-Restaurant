import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

//componente
import { Header } from "../../components/header/Header";

export const Home = () => {
  return (
    <div id="home-page">
      <Header />

      <section id="home-body">
        <h2>DISCOVER THE</h2>
        <br />
        <h2>GOURMENT CUISINE</h2>
      </section>

      <section id="home-articles">
        <div>
          <article>
            <h2>
              <Link to="/Contact">Contact</Link>
            </h2>
            <br />
            <p>
              From your contact, we will contact you to review dates and
              schedule availability.
            </p>
          </article>
          <article>
            <h2>
              <a href="#">Address</a>
            </h2>
            <br />
            <p>Managua, Nicaragua, Bo La fuente, Duya Mágica 1C Sur.</p>
            <br />
            <p>Granada, Nicaragua, Bo La fuente, Duya Mágica 1C Sur.</p>
          </article>
        </div>
      </section>
    </div>
  );
};
