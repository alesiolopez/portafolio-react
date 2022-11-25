import { useState } from "react";

function PortPresentation() {
  const [counter, setCounter] = useState(0);

  document.addEventListener("scroll", (e) => {
    window.scrollY;
  });

  if (counter == 10) {
    window.scroll(0, 852);
    setCounter(0);
  }

  return (
    <div className="presentation-container">
      <div className="presentation">
          <h1>ALESIO LÓPEZ</h1>
        <h2>
          <span className="maquina-escribir">Desarrollador Web Front End</span>
        </h2>
        <button
          className="button-present"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Contemos hasta 10
        </button>
        <span className="counter-present">{counter}</span>
      </div>

      <div className="redes-sociales">
        <ul>
          <a href="https://www.linkedin.com/in/alesio-lopez/" target="_blank">
            <li className="bg-linkedin bg-logo">
              <img src="../src/icons/icons8-linkedin-96.png" alt="logo-linkedin" className="logo logo-linkedin" />
            </li>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5491125607402&text=Hola%20Alesio,%20¿Qué%20tal?%20Estoy%20interesado%20en%20contactarme%20con%20vos." target="_blank">
            <li className="bg-whatsapp bg-logo">
              <img src="../src/icons/icons8-whatsapp-96.png" alt="logo-whatsapp" className="logo logo-whatsapp" />
            </li>
          </a>
          <a href="mailto:alesiolopez26@gmail.com?Subject=Contacto%20desde%20portafolio%20Alesio%20López" target="_blank">
            <li className="bg-gmail bg-logo">
              <img src="../src/icons/icons8-gmail-96.png" alt="logo-gmail" className="logo logo-gmail" />
            </li>
          </a>
          <a href="https://drive.google.com/file/d/1l5c7MCr9bxAWVrim-15gCSr5r3BlU_gr/view" target="_blank">
          <li className="bg-pdf bg-logo">
            <img src="../src/icons/icons8-pdf-2-96.png" alt="logo-pdf" className="logo logo-pdf" />
          </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default PortPresentation;
