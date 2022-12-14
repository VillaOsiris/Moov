import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../styles/ListStyles.css";

function List({ title, items }) {
  const [scrollX, setScrollX] = useState(-400);

  const HandleMoveLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const HandleMoveRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listTotalX = items.results.length * 200;
    if (window.innerWidth - listTotalX > x) {
      x = window.innerWidth - listTotalX - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="list">
      <h2 className="list--title">{title}</h2>
      <div className="list--area">
        <div className="list--arrow_left" onClick={HandleMoveLeft}>
          <KeyboardArrowLeftIcon className="arrow" fontSize="inherit" />
        </div>
        <div className="list--arrow_right" onClick={HandleMoveRight}>
          <KeyboardArrowRightIcon className="arrow" fontSize="inherit" />
        </div>
        <div
          className="list--row"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 200,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="list--item" key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default List;
