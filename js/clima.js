const btnConsultarClima = document.getElementById("btn-weather");
const ciudadInput = document.querySelector("#consultaCiudad");
const paisInput = document.querySelector("#consultaPais");
const resultadoDiv = document.getElementById("resultado");
const formularioNuevaConsulta = document.getElementById("nuevoResultado");

const consultarApiClima = async (ciudad, pais) => {
  const appId = "378fc4d55a04965a14e1b2058cc245f2";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

  const resultadoDiv = document.getElementById("resultado");
  formularioNuevaConsulta.classList.add("hidden");

  try {
    resultadoDiv.innerHTML = `<p  style="color: white">Consultando clima para:${ciudad}. ${pais}</p>`;

    const respuestaApi = await fetch(url);

    const datosRespuestaApi = await respuestaApi.json();

    resultadoDiv.innerHTML = `
        <p style="color: white;">Ciudad: ${datosRespuestaApi.name}</p>
        <p style="color: white;">Temperatura: ${datosRespuestaApi.main.temp} K</p>
        <p style="color: white;">Sensacion Termica: ${datosRespuestaApi.main.feels_like} K</p>
        <p style="color: white;">Humedad: ${datosRespuestaApi.main.humidity}%</p>
      `;
  } catch (error) {
    console.error(error);
    resultadoDiv.innerHTML =
      '<p style="color: white;">Error al consultar el clima.</p>';
  }
  setTimeout(() => {
    resultadoDiv.innerHTML = "";

    console.log("nueva", resultadoDiv);
    formularioNuevaConsulta.classList.remove("hidden");
  }, 5000);
};

const mostrarError = (mensaje) => {
  const mensajeDeErrorClima = document.createElement("div");
  mensajeDeErrorClima.innerHTML = `
    <div id="mensajeDeErrorClima">
        <p>Error</p>
        <span>${mensaje}</span>
    </div>
  `;
  resultadoDiv.appendChild(mensajeDeErrorClima);
  setTimeout(() => {
    mensajeDeErrorClima.remove();
  }, 3500);
};

const ejecutarConsultaClima = (e) => {
  e.preventDefault();
  const ciudad = ciudadInput.value;
  const pais = paisInput.value;

  if (ciudad === "" || pais === "") {
    mostrarError("Campos obligatorios");
    return;
  }
  consultarApiClima(ciudad, pais);
};

btnConsultarClima.addEventListener("click", ejecutarConsultaClima);
