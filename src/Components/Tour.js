import React from "react";

const Tour = ({ img, date, title, text, country, day, money }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {country}
          </p>
          <p>{`${day} days`}</p>
          <p>{`From $${money}`}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
