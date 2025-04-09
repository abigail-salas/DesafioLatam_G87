import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Personajes from "./views/Personajes";
import Register from "./views/Register";
import Login from "./views/Login";
import Admin from "./views/Admin";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" element={<Personajes />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
