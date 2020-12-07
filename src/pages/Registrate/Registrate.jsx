import "Registrate/Registrate.css"
import "from./.js"
function Registrate (){
  return(
    <form id="msform">
 
    <ul id="progressbar">
      <li className="active">Ajustes cuenta</li>
      <li>Perfiles sociales</li>
      <li>Datos personales</li>
    </ul>
   
    <fieldset>
      <h2 className="fs-title">Crea tu cuenta</h2>
      <h3 className="fs-subtitle">Este es el paso 1</h3>
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="pass" placeholder="Password" />
      <input type="password" name="cpass" placeholder="Confirm Password" />
      <input type="button" name="next" className="next action-button" value="Next" />
    </fieldset>
    <fieldset>
      <h2 className="fs-title">Perfiles sociales</h2>
      <h3 className="fs-subtitle">Tu presencia en redes sociales</h3>
      <input type="text" name="twitter" placeholder="Twitter" />
      <input type="text" name="facebook" placeholder="Facebook" />
      <input type="text" name="gplus" placeholder="Google Plus" />
      <input type="button" name="previous" className="previous action-button" value="Previous" />
      <input type="button" name="next" className="next action-button" value="Next" />
    </fieldset>
    <fieldset>
      <h2 className="fs-title">Datos personales</h2>
      <h3 className="fs-subtitle">We will never sell it</h3>
      <input type="text" name="fname" placeholder="First Name" />
      <input type="text" name="lname" placeholder="Last Name" />
      <input type="text" name="phone" placeholder="Phone" />
      <textarea name="address" placeholder="Address"></textarea>
      <input type="button" name="previous" className="previous action-button" value="Previous" />
      <input type="submit" name="submit" className="submit action-button" value="Submit" />
    </fieldset>
    <link rel="stylesheet" href="Styles/stylesform.css"/>
    <link rel="stylesheet" href="Jquery/From.js"/>
  
   </form>
  )
}
export default Registrate;