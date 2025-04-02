import { createContext, useState } from "react";

export const InfoContext = createContext();

const infoMasculino = ["Jose", "Roberto", "Pyro", "Ignacio", "Lautaro"];
const infoFemenino = ["Gabriela", "Catalina", "Bianca", "Laira", "Josefa"];

const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState(infoMasculino);

  const toggleInfo = () => {
    setInfo((cambio) =>
      cambio === infoMasculino ? infoFemenino : infoMasculino
    );
  };

  return (
    <InfoContext.Provider value={{ info, toggleInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;
