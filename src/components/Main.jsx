import React from "react";
import axios from "axios";

function Main() {
  const Api =
    "https://api.themoviedb.org/3/movie/550?api_key=52ca5cfb8dc99b3611152d5057dab45b";
  // https://api.themoviedb.org/3/genre/movie/list?api_key=52ca5cfb8dc99b3611152d5057dab45b&language=en-US

  const ApiCall = async () => {
    const data = await axios.get(Api);
    console.log(data);
  };

  return <div onClick={ApiCall}>Main</div>;
}

export default Main;
