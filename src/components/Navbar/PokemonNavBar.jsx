import React from "react";
import "./styles.css";
import pokeballNext from "../../assets/pokeball-next.png";
import pokeballPrevious from "../../assets/pokeball-previous.png";

const PokemonNavBar = ({ onNext, onPrevious, showNext, showPrevious }) => {
  return (
    <div className="navbar__container">
      {showPrevious && (
        <div className="text-center" >
          <a className="text-reset fw-bold" href="#" onClick={() => onPrevious()}>
            <img
              className="navbar__paginator-icon"
              src={pokeballPrevious}
              alt="previous"
            />
            <br />Back
          </a>
        </div>
      )}

      <h1 className="navbar__title">POKE-API</h1>
      {showNext && (
        <div className="text-center">
          <a className="text-reset fw-bold" href="#" onClick={() => onNext()}>
            <img
              className="navbar__paginator-icon"
              src={pokeballNext}
              alt="next"
            />
            <br />Next
          </a>
        </div>
      )}
    </div>
  );
};

export default PokemonNavBar;
