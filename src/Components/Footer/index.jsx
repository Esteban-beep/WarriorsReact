import logo from "../../Recursos/img/logo.png"
import twitter from "../../Recursos/img/twitter.png"
import facebook from "../../Recursos/img/facebook.png"
import whatsapp from "../../Recursos/img/whatsapp.png"
import instagram from "../../Recursos/img/instagram.png"
import "./footer.css"
function Footer() {
    return (
        <footer className="text-light fondo py-5">
        <div className="container1">
            <div className="row">
            <div className="col-md-4 ">
                <div>
                    <img className="img" src={logo} alt="logo" width="300px"/>
                    <h3>©copyright.warriors.2020</h3>
                </div>
            </div>
            <div className="col-md-4 ">
                <div>
                    <h3 className="siguenos">Síguenos</h3>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <a href="link.redes" target="blank"><img className="img-fluid" src={twitter} /></a> 
                        </div>
                        <div className="col-md-3">
                            <a href="link.redes" target="blank"><img className="img-fluid" src={whatsapp}  /></a> 
                        </div>
                        <div className="col-md-3">
                            <a href="link.redes" target="blank"><img className="img-fluid" src={facebook} /></a> 
                        </div>
                        <div className="col-md-3">
                            <a href="link.redes" target="blank"><img className="img-fluid" src={instagram} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h3 className="text">10% De descuento si te inscribes ahora</h3>
                    <form action="">
                        <div className="form-group"><input type="text" className="form-control" placeholder="Ingresa tu correo"/></div>
                        <div className="form-group d-flex align-items-end">
                            <button className="Nm">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;