import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";
import Unidades from "./components/Unidades";
import Secuencias from "./components/Secuencias";
import Plan from "./components/Plan";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container flex justify-center items-center flex-row space-x-20 top-20 relative">
        <Proyectos />
        <Unidades />
        <Secuencias />
        <Plan />
      </div>
    </div>
  );
}

export default App;
