import Propiedades from "./components/Propiedades";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <h1>HOLA desde React!</h1>

      <Titulo />

      <Propiedades
        title="Mouse"
        price="1200"
        desc="Lorem ipsum dolor sit amet."
      />

      <Propiedades
        title="Gabinete"
        price="4500"
        desc="Lorem ipsum dolor sit amet."
      />

      <Propiedades
        title="Monitor"
        price="3200"
        desc="Lorem ipsum dolor sit amet."
      />

      <Propiedades
        title="Teclado"
        price="2300"
        desc="Lorem ipsum dolor sit amet."
      />
    </>
  );
}

export default App;
