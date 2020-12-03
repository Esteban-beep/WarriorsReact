import capdy from "../../Recursos/img/capdy.PNG"
import intrologo from "../../Recursos/img/intrologo.png"
import "./cursos.css"
function Cursos() {
    return (
        <div className="cursos">
        <div className="containerDy"> 
            <div className="row">
                <div className="col-md-5 well">
                    <img className="cap-img-fluid" src={capdy}alt=""/>
                </div>
                    <div className="col-md-5 well">
                        <h2 className="tex-titulo">Cursos</h2>
                        <p className="texto-curso">Te explicamos paso a paso todo sobre nuestros cursos, desde sus precios por nivel y que se enseñara en cada uno de ellos</p>
                        <img className="imgcur img-fluid" src={intrologo} alt=""/>
                        <div className="NC"><a className="button" href="">Nuestros cursos</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cursos;