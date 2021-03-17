import "./style.scss";

function Navbar(props) {
  function handleChange(e) {
    props.handleCallback(e.target.value);
  }

  return (
    <div className="navContainer">
      <img
        className="logoChico"
        src="https://imagenes.milenio.com/hKT4JbDNL_JeETy1Dgcw5_xYDbY=/936x566/https://www.milenio.com/uploads/media/2020/03/19/codo-codo-mercado-libre-cambia_0_40_768_477.png"
      />
      <div className="inputContainer">
        <input
          type="text"
          onChange={handleChange}
          className="search"
          placeholder="  Buscar productos, marcas y más..."
        />
        <span className="slogan">Comprá hoy y pagá después</span>
      </div>
    </div>
  );
}
export default Navbar;
