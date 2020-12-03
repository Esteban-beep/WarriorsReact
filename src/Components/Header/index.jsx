import logo from "../../Recursos/img/logo.png"
import "./header.css"

function Header() {
    return (
        <section id="home" className="home">
            <header className="container">
                <nav className="navbar navbar-expand-lg">
                    <a href="#home" className="navbar-brand"><img src={logo} alt="logo" /></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#maiMenu">
                        <span className="fas fa-bars icon-menu"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="maiMenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#Quiénes somos">Quiénes somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Cursos">Cursos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contáctanos">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
          
        </section>
    )
}
export default Header