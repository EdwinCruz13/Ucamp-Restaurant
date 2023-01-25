import React from "react";
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
                <h2><a href="#">Ingredients</a></h2>
                <br />
                <p>
                    For special plates you need unique
                    ingredients and we dow everything with
                    the heart and passion.
                </p>
            </article>
            <article>
                <h2><a href="#">Recipes</a></h2>
                <br />
                <p>
                    Each recipe tells a story. Come and visit us
                    in our restaurants.
                </p>
            </article>
        </div>
      </section>
    </div>
  );
};
