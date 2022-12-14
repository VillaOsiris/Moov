import React from "react";
import "../styles/HeroStyles.css";

function Hero({ item }) {
  let airingDate = new Date(item.release_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`,
      }}
    >
      <div className="shadow--vertical">
        <div className="shadow--horizontal">
          <h2 className="hero--title">{item.title}</h2>
          <div className="hero--info">
            <div className="hero--rating">
              {Math.round(item.vote_average * 10) / 10} rating
            </div>
            <div className="hero--year">{airingDate.getFullYear()}</div>
          </div>
          <div className="hero--overview">{item.overview}</div>
          <div className="hero--buttons">
            <button className="btn btn--play">&#9654; Trailer</button>
            <button className="btn btn--add">+ Add List</button>
          </div>
          <div className="hero--genres">Genres: {genres.join(", ")}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
