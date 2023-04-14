import React from "react";

function Card({ day, icon, min_temp, max_temp, active }) {
  return (
    <div className={`card ${active ? "active" : ""}`}>
      {active && <div className="today">Today</div>}
      <div className="card__day">{day}</div>
      <div className="card__icon">
        <img
          src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
          alt="icon"
          width={50}
          height={50}
        />
      </div>
      <div className="card__temp">
        <span className="card__temp--min">{min_temp}°</span>
        <span className="card__temp--max">{max_temp}°</span>
      </div>
    </div>
  );
}

export default Card;
