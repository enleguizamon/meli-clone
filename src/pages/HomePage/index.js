import { Link } from "react-router-dom";
import "./style.scss";
import sites from "../../data/sites.json";

function HomePage() {
  return (
    <div className="homeContainer">
      <img
        className="logo"
        src="https://imagenes.milenio.com/hKT4JbDNL_JeETy1Dgcw5_xYDbY=/936x566/https://www.milenio.com/uploads/media/2020/03/19/codo-codo-mercado-libre-cambia_0_40_768_477.png"
      />

      <ul className="countriesContainer">
        {sites.map((site, key) => {
          return (
            <li key={key} className="countryContainer">
              <Link to={`/products/${site.site}`}>
                <img src={site.flag} className="flags"/>
                <p className="country">{site.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
