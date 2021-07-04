import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Curso React Routes </h1>

      <ul className="nav">
        <li className="link-wrapper">
          <Link to="/">Inicio</Link>
        </li>
        <li className="link-wrapper">
          <Link to="/about">Acerca de</Link>
        </li>
        <li className="link-wrapper">
          <Link to="/profile">Perfiles</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
