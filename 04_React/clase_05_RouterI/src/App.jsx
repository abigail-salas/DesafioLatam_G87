import Navigation from "./components/Navigation";
import Home from "./views/Home";

import { Routes, Route } from "react-router-dom";
import Register from "./views/Register";
import Login from "./views/Login";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div style={{ backgroundColor: "#3C3C3B", color: "white" }}>
      <Navigation />
      <h1>React Router I</h1>

      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />

        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
