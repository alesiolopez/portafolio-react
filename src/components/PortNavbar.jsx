import { DiReact } from "react-icons/di";

function PortNavbar() {
  return (
    <>
      <nav className="container-nav">
        <div className="navbar">
          <a href="">
            <h1>Alesio López <DiReact /></h1>
          </a>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">Contáctame</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default PortNavbar;
