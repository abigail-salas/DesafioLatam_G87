import ConsumoApis from "./components/ConsumoApis";
import EjemploUseEffect from "./components/EjemploUseEffect";
import EjemploUseRef from "./components/EjemploUseRef";

function App() {
  return (
    <>
      <h1>Consumo de APIS</h1>

      <h3>Ejemplo useEffect</h3>
      <EjemploUseEffect />

      <h3>Ejemplo API</h3>
      <ConsumoApis />

      <h3>Ejemplo useRef</h3>
      <EjemploUseRef />
    </>
  );
}

export default App;
