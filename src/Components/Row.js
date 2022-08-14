import React from "react";
import Card from "./Card";



function Row({ imgUrl,title, arr = [] }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => {
          return <Card key={index} imag={`${imgUrl}/${item.poster_path}`} />;
        })}
      </div>
    </div>
  );
}

export default Row;
