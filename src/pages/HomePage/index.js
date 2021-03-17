import { Link } from "react-router-dom";
import "./style.scss";

function HomePage() {
  return (
    <div className="homeContainer">
      <img
        className="logo"
        src="https://imagenes.milenio.com/hKT4JbDNL_JeETy1Dgcw5_xYDbY=/936x566/https://www.milenio.com/uploads/media/2020/03/19/codo-codo-mercado-libre-cambia_0_40_768_477.png"
      />

      <div className="countriesContainer">

        <div className="countryContainer">
        <Link to="/products" className="link">
        <img
          className="flags"
          src="https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg"
        />
          <p className="country">Argentina </p>
        </Link>
        </div>

        <div className="countryContainer">
        <Link to="/products">
        <img
          className="flags"
          src="https://lipis.github.io/flag-icon-css/flags/4x3/br.svg"
        />
        <p className="country">Brasil </p>
        </Link>
        </div>

        <div className="countryContainer">
        <Link to="/products">
        <img
          className="flags"
          src="https://lipis.github.io/flag-icon-css/flags/4x3/co.svg"
        />
        <p className="country">Colombia </p>
        </Link>
        </div>
        </div>

    </div>
  );
}

export default HomePage;
