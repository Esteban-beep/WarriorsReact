import pesas from "../../Recursos/img/pesas.png"
import patada from "../../Recursos/img/patada-ico.png"
import arma from "../../Recursos/img/arma.png"
import "./niveles.css"
function Niveles() {
    return (
        <section id="niveles" className="cursos1 tex-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div>
                        <h2 className="title">Niveles de nuestro curso</h2>
                        <h3 className="sub">NIVEL 1</h3>
                        <p className="parrafo">Se vera acondicionamiento físico y  reconocimiento de <br/> diversas situaciones de  riesgo que podemos vivir <br/>en nuestro día a día.</p>
                        <h3 className="sub">NIVEL 2</h3>
                        <p className="parrafo">Se continuará con el acondicionamento físico,<br/> se comenzarán con técnicas básicas de defensa <br />como por ejemplo el cómo zafarnos ante una <br/>intimidación, respuesta a un ataque frontal,<br/> técnica de pateo (1), etc</p>
                        <h3 className="sub">NIVEL 3</h3>
                        <p className="parrafo">Como desarmar un atacante, múltiples armas.</p>
                   </div>
                   <div className="item">
                      <p>
                          <img className="arriba" src={pesas}/>
                          <img className="centro" src={patada}/>
                          <img className="abajo" src={arma}/>

                          El curso esta dividido en 3 niveles dependiendo de la experiencia que tengas
                        </p>
                   </div>
               </div>
           </div>
        </section>
 )
}
export default Niveles;