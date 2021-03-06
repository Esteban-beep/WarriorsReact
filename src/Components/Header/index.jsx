import logo from "../../Recursos/img/logo.png"
import "./header.css"
function header() {
    return (
        <section id="home" className="home">
                  <header className="container">
                      <nav className="navbar navbar-expand-lg ">
                           <a href="#home" /><img className="navbar-brand" src={logo} alt="logo"/>
                              <button className="navbar-toggler" data-toggle="collapse" data-target="#maiMenu">
                                  <span className="fas fa-bars icon-menu"></span>
                                </button>
                                <div className="collapse navbar-collapse  " id="maiMenu">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                         <a className="nav-link" href="#Quiénes somos">Quiénes somos</a>
                                        </li>
                                        <li className="nav-item">
                                         <a className="nav-link" href="#Niveles">Niveles</a>
                                        </li>
                                        <li className="nav-item">
                                         <a className="nav-link" href="#Cursos">Cursos</a>
                                        </li>
                                        <li className="nav-item">
                                         <a className="nav-link" href="#Equipo">Administradores</a>
                                        </li>
                                    </ul>
                                </div>
                          </nav>
                  </header>
                  <div className="row">
                      <article>
                          <h2 className="tienes">TÚ TIENES <br/> El CONTROL</h2>
                          <p>Se parte de la nueva generación de <br/> entrenamiento de defensa personal <br/> desde casa.</p>
                      </article>
                  </div>
       </section>
    )
}
export default header