console.log("object");

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");

  const data = await res.json();

  console.log(data, "<--- data");

  // console.log(data.results[0].gender, "<--- gender");

  const img = document.querySelector(".img");
  const name = document.querySelector(".name");
  const phone = document.querySelector(".phone");
  const city = document.querySelector(".city");

  name.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;

  phone.innerHTML = data.results[0].phone;

  img.setAttribute("src", data.results[0].picture.large);

  city.innerHTML = `${data.results[0].location.city}, ${data.results[0].location.country}`;
}

getRandomUser();

/* -------- SENTENCIA TRY - CATCH -------- */

async function getSomething() {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=londres&APPID="
    );

    const data = await res.json();

    console.log(data, "<--- data en TRY");
  } catch (error) {
    console.error(error.message);
  }
}

getSomething();
