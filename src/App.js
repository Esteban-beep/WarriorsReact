import "./styles/estilos.css";
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";
import QuienesSomos from "./Components/QuienesSomos";
import Niveles from "./Components/Niveles";
import Fotografias from "./Components/Fotografias";
import Cursos from "./Components/Cursos";
import Equipo from "./Components/Equipo"; 
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Header />
      <QuienesSomos />
      <Inicio />
      <Niveles />
      <Fotografias />
      <Cursos />
      <Equipo />
      <Footer />
   </>
  );
}

export default App;
