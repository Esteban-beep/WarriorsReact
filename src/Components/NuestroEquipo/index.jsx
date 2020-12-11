import mesa from "../../Recursos/img/mesa.png"
import bonil from "../../Recursos/img/bonil.png"
import rojo from "../../Recursos/img/rojo.png"
import botero from "../../Recursos/img/botero.png"
import "./nuestroequipo.css"

function NuestroEquipo() {
    return (
        <section id="Equipo" className="equipo">
        <div className="container">
           <div className="row">
               <div className="equi1 col-md-12 well">
                   <h2>Nuestro equipo</h2>
               </div>
           </div>
           <div className="row">
               <div className="col-md-12 well">
                <h4>Buscamos como equipo de trabajo que nuestros aprendices  
                    tengan un nuevo estilo de vida generando asi confianza,
                    seguridad y tranquilidad en cada uno de ellos.</h4>
               </div>
           </div>
       </div>

       <div className="container">
           <div className="row">
               <div className="col-md-3 well">
                   <img className="fotos" src={mesa}alt="mesa"/>
                   <p className="nombres">Valentina Mesa</p>
               </div>
               <div className="col-md-3 well">
                   <img className="fotos" src={bonil} alt="bonil"/>
                   <p className="nombres">Wilfer Bonil</p>
               </div>
               <div className="col-md-3 well">
                   <img className="fotos" src={rojo} alt="rojo"/>
                   <p className="nombres">Dylan Rojo</p>
               </div>
               <div className="col-md-3 well">
                   <img className="fotos" src={botero} alt="stin"/>
                   <p className="nombres">Breiner Botero</p>
               </div>
             </div>
          </div>
   </section>
    )
}
export default NuestroEquipo;
