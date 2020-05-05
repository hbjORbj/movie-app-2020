import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, title, summary, year, genres, rating, poster }) {
  return (
    /*<Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          genres,
          rating,
          poster,
        },
      }}
    >*/
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__description">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, idx) => (
              <li key={idx}>{genre}</li>
            ))}
          </ul>
          <h3 className="movie__summary">{summary.slice(0, 180)}...</h3>
          <h5 className="movie__rating">⭐️{rating}</h5>
        </div>
      </div>
    //</Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
