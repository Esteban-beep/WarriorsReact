import logo from "../../Recursos/img/logo.png"


function Header() {
    return (
        <section id="home" classNameName="home">
            <header classNameName="container">
                <nav classNameName="navbar navbar-expand-lg">
                    <a href="#home" classNameName="navbar-brand"><img src={logo} alt="logo" /></a>
                    <button classNameName="navbar-toggler" data-toggle="collapse" data-target="#maiMenu">
                        <span classNameName="fas fa-bars icon-menu"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse " id="maiMenu">
                        <ul classNameName="navbar-nav ml-auto">
                            <li classNameName="nav-item">
                                <a classNameName="nav-link" href="#Quiénes somos">Quiénes somos</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link" href="#Cursos">Cursos</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link" href="#Contáctanos">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
          
        </section>
    )
}
export default Header