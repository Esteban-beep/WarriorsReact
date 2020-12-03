import patada from "../../Recursos/img/patada.png"
import llave from "../../Recursos/img/llave.png"
import rombo2 from "../../Recursos/img/rombo2.png"
import "./fotografias.css"
function Fotografias() {
    return (
        <section className="posturas">
          <div className="container">
           <div className="row justify-content-center">
               <article className=" posicion col-md-6">
                   <img className="img-fluid position" src={patada} alt="patada"/>
                   <h3>Patada defensiva</h3>
                   <img className="img-fluid position" src={llave} alt="postura"/>
                   <h3>Posición en el suelo</h3>
               </article>
               <picture className="col-md-6">
                   <img  className="rombo img-fluid" src={rombo2} alt="postura2"/>
               </picture>
           </div>
          </div>
       </section>
    )
}
export default Fotografias