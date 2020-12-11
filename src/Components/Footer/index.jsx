import logo from "../../Recursos/img/logo.png"
import twitter from "../../Recursos/img/twitter.png"
import facebook from "../../Recursos/img/facebook.png"
import whatsapp from "../../Recursos/img/whatsapp.png"
import instagram from "../../Recursos/img/instagram.png"
import "./footer.css"

function Footer() {
    return(
        <section className="text-ligth fondo py-4">
            <div className="container">
                <div className="row">
                    <div className="rs mx-4">
                        <div>
                            <h3 className="siguenos">Síguenos</h3>
                            <div className="rs py-4 d-flex">
                                <div className="mx-4">
                                    <a href="https://twitter.com/warriors298?s=08" target="blank"/><img src={twitter}/>
                                </div>
                                <div className="mx-4">
                                    <a href="https://wa.link/yn11do" target="blank"/><img src={whatsapp}/>
                                </div>
                                <div className="mx-4">
                                    <a href="https://www.facebook.com/Warriors-102761384691720/" target="blank"/><img src={facebook}/>
                                <div className="mx-4">
                                    <a href="https://www.instagram.com/warriors_cursos/" target="blank"/><img src={instagram}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="formulario mx-4">
                <div>
                    <h3 className="text">¡Inscríbete Ya</h3>
                    <form className="for">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Ingresa tu correo"/>
                        </div>
                        <div className="form-group d-flex align-items-end" >
                            <button type="submit" className="boton2 color1 ml-auto">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <footer className="d-flex justify-content-center align-items-end flex-wrap">
                <div className="logoW mx-2">
                      <img className="img" src={logo}/>
                </div> 
                <p className="textC text-white">
                ©Copyright Warriors 2020
            </p> 
        </footer>
    )
}
export default Footer;