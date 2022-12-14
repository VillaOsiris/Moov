import React, { useEffect, useState, useContext } from "react";
import { ToggleContainer } from "../App";
import tmdb from "../tmdb";
import List from "./List";
import Hero from "./Hero";
import "../styles/MainStyles.css";
import Spinner from "./Spinner";

function Main() {
  const [MoviesList, setMoviesList] = useState([]);
  const [HeroData, setHeroData] = useState(null);
  const { theme } = useContext(ToggleContainer);

  useEffect(() => {
    const loadData = async () => {
      let data = await tmdb.getMoviesList();
      setMoviesList(data);

      let trending = data.filter((i) => i.slug === "trending");
      let random = Math.floor(
        Math.random() * (trending[0].items.results.length - 1)
      );
      let randomMovie = trending[0].items.results[random];
      let randomTrend = await tmdb.getMovieInfo(randomMovie.id);
      setHeroData(randomTrend);
    };

    loadData();
  }, []);
  if (!HeroData) return <Spinner />;

  return (
    <div className={theme ? "container--lightmode" : "container--darkmode"}>
      {HeroData && <Hero item={HeroData} />}
      <section className="lists">
        {MoviesList.map((item, key) => (
          <List key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default Main;
