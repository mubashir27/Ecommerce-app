import React from "react";
const Rating = ({ value, text }) => {
  const [stars, setStars] = React.useState([
    { i: 1, f: 0.5 },
    { i: 2, f: 1.5 },
    { i: 3, f: 2.5 },
    { i: 4, f: 3.5 },
    { i: 5, f: 4.5 },
  ]);

  return (
    <React.Fragment>
      {stars.map((m) => (
        <span>
          <i
            className={
              value >= m.i
                ? "fas fa-star"
                : value >= m.f
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span> {text && text}</span>
    </React.Fragment>
  );
};

export default Rating;