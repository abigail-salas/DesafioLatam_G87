import Tareas from "./components/Tareas";
import TareasConObjetos from "./components/TareasConObjetos";

function App() {
  return (
    <>
      <h1>Renderizacion Dinamica de Componentes</h1>

      <h2>Tareas</h2>
      <Tareas />

      <h2>Tareas con Objetos</h2>
      <TareasConObjetos />
    </>
  );
}

export default App;
