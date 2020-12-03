import mesa from "../../Recursos/img/mesa.png"
import bonil from "../../Recursos/img/bonil.png"
import rojo from "../../Recursos/img/rojo.png"
import botero from "../../Recursos/img/botero.png"
import "./equipo.css"

function Equipo() {
    return (
        
        <section className="equipo">
        <div className="container">
            <div className="row">
                <div className="col-md-3 well">
                    <img className="fotos" src={mesa}alt=""/>
                    <p className="nombres">Valentina Mesa</p>
                </div>
                <div className="col-md-3 well">
                    <img className="fotos" src={bonil} alt=""/>
                    <p className="nombres">Wilfer Bonil</p>
                </div>
                <div className="col-md-3 well">
                    <img className="fotos" src={rojo} alt=""/>
                    <p className="nombres">Dylan Rojo</p>
                </div>
                <div className="col-md-3 well">
                    <img className="fotos" src={botero} alt=""/>
                    <p className="nombres">Breiner Botero</p>
                </div>
              </div>
           </div>
    </section>
    )
}
export default Equipo;
