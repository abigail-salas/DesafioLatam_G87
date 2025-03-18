import React, { useEffect, useState } from "react";

function ConsumoApis() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    // const url = "https://api.gameofthronesquotes.xyz/v1/random";

    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=valparaiso&APPID=799edad109b009ce1a9a4a6bc519ccf1";

    const response = await fetch(url);
    const data = await response.json();

    /* Api Game of Thrones */
    // setInfo(`${data.sentence} - ${data.character.name}`);

    /* Api Weather Map */
    const kelvinACelsius = (kelvin) => (kelvin - 273.15).toFixed();

    setInfo(
      `${data.name}, ${data.sys.country} - °C ${kelvinACelsius(data.main.temp)}`
    );

    console.log(data, "<---- data en la consulta");
  };

  return (
    <div>
      <h4>{info}</h4>
    </div>
  );
}

export default ConsumoApis;
