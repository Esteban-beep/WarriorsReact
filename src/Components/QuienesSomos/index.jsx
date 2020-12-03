import modelo1 from "../../Recursos/img/modelo1.png"

function QuienesSomos() {
    return (
        <section id="Quiénes somos" className="curso">
        <div className="container">
            <div className="row justify-content-center">
                <picture className="col-md-6">
                   <img className= "img-fluid patada" src={modelo1} alt=""/> 
                   <h2 className="eslogan">
                       Respira <br/> Piensa <br/> Actua.
                   </h2>
                </picture>
                <article className="col-md-6">
                    <h2 className="color">¿Quiénes somos?</h2>
                    <p className="black">Somos un equipo llamado Warriors,
                     encargado de velar por la seguridad de nuestros usuarios,
                       dando así unos cursos de defensa personal, los cuales podrás 
                       ver desde la comodidad de casa. En los cursos se  enseñara lo 
                       que es la defensa personal, acondicionamiento físico y sobre 
                       todo el auto-control que es necesario para entender como reaccionar 
                       en una situación de riesgo.
                    </p>
                </article>
            </div>
        </div>
        </section>
 )
}
export default QuienesSomos 