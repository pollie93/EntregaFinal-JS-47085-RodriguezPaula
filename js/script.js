let saludoInicial = "Contesta estas preguntas y ganá esencia azul!\n";
let nombreUsuario = prompt(saludoInicial + "Ingresá tu nombre de usuario");

while (!nombreUsuario) {
  nombreUsuario = prompt("Por favor, ingresá tu nombre de usuario");
}

alert("Bienvenido/a " + nombreUsuario + "!! \n" + saludoInicial);

let cantidadIntentos = 3;
let esenciaAzul = 0;
const esenciaAzulRespuestaCorrecta = 5000;

const respuestaIncorrecta = () => {
  if (cantidadIntentos > 0) {
    cantidadIntentos--;
    alert(
      "La respuesta ingresada, es incorrecta, te quedan " +
        cantidadIntentos +
        " intentos"
    );
    return;
  }
  if (cantidadIntentos === 0) {
    alert("Lo siento!, te quedaste sin intentos, perdiste!");
    return;
  } else {
    alert("algo salio mal");
  }
};

const pregunta1 = alert(
  "¿Qué grupo famoso compuso la canción de los Worlds del año 2014?"
);
let respuesta1 = prompt(
  "Elegí la respuesta correcta \n1 - Twenty One Pilots \n2 - One Republic \n3 - Nickelback \n4 - Imagine Dragons \nEscribí Cancelar para salir"
);

while (respuesta1 !== "cancelar" && respuesta1 !== "4") {
  switch (respuesta1) {
    case "1":
      respuestaIncorrecta();
      break;
    case "2":
      respuestaIncorrecta();
      break;
    case "3":
      respuestaIncorrecta();
      break;
    case "4":
      alert(
        `Respuesta correcta! Ganaste ${esenciaAzulRespuestaCorrecta} de esencia azul, tenes acumulado ${esenciaAzul}!`
      );
    default:
      alert("Elegiste una opción inválida");
      break;
  }
  respuesta1 = prompt(
    "Elegí la respuesta correcta \n1 - Twenty One Pilots \n2 - One Republic \n3 - Nickelback \n4 - Imagine Dragons \nEscribí Cancelar para salir"
  );
}

if (respuesta1 !== "cancelar") {
  esenciaAzul = esenciaAzul + esenciaAzulRespuestaCorrecta;
  cantidadIntentos = 3;

  const pregunta2 = alert(
    `Respuesta correcta! Ganaste ${esenciaAzulRespuestaCorrecta} de esencia azul, tenes acumulado ${esenciaAzul}! \n ¿En qué año se publicó la primera versión de League of Legends?`
  );
  let respuesta2 = prompt(
    "Elegí la respuesta correcta \n1 - 2011 \n2 - 2013 \n3 - 2009 \n4 - 2014 \nEscribí Cancelar para salir"
  );

  while (respuesta2 !== "cancelar" && respuesta2 !== "3") {
    switch (respuesta2) {
      case "1":
        respuestaIncorrecta();
        break;
      case "2":
        respuestaIncorrecta();
        break;
      case "4":
        respuestaIncorrecta();
        break;
      case "3":
        alert(
          `Respuesta correcta! Ganaste ${esenciaAzulRespuestaCorrecta} de esencia azul, tenes acumulado ${esenciaAzul}!`
        );
        cantidadIntentos = 3;
        break;
      default:
        alert("Elegiste una opción inválida");
        break;
    }
    respuesta2 = prompt(
      "Elegí la respuesta correcta \n1 - 2011 \n2 - 2013 \n3 - 2009 \n4 - 2014 \nEscribí Cancelar para salir"
    );
  }

  if (respuesta2 !== "cancelar") {
    esenciaAzul = esenciaAzul + esenciaAzulRespuestaCorrecta;
    cantidadIntentos = 3;

    const pregunta3 = alert(
      `Respuesta correcta! Ganaste ${esenciaAzulRespuestaCorrecta} de esencia azul, tenes acumulado ${esenciaAzul}!\n ¿Qué empresa es la desarrolladora de League of Legends? `
    );
    let respuesta3 = prompt(
      "Elegí la respuesta correcta \n1 - Supercell \n2 - Riot Games \n3 - Rockstar Games \n4 - Epic Games \nEscribí Cancelar para salir"
    );

    while (respuesta3 !== "cancelar" && respuesta3 !== "2") {
      switch (respuesta3) {
        case "1":
          respuestaIncorrecta();
          break;
        case "3":
          respuestaIncorrecta();
          break;
        case "4":
          respuestaIncorrecta();
          break;
        case "2":
          alert(
            `Respuesta correcta! Ganaste ${esenciaAzulRespuestaCorrecta} de esencia azul, tenes acumulado ${esenciaAzul}!`
          );
          break;
        default:
          alert("Elegiste una opción inválida");
          break;
      }
      respuesta3 = prompt(
        "Elegí la respuesta correcta \n1 - Supercell \n2 - Riot Games \n3 - Rockstar Games \n4 - Epic Games \nEscribí Cancelar para salir"
      );
    }

    // if (respuesta3 === "cancelar") return;

    esenciaAzul = esenciaAzul + esenciaAzulRespuestaCorrecta;
    cantidadIntentos = 3;
    alert(
      "FELICITACIONES!, ACCEDISTE A LA TIENDA, TENES " +
        esenciaAzul +
        " DE ESENCIA AZUL"
    );

    if ((esenciaAzul = 0)) {
      alert("No podes comprar campeones, tu esencia azul es 0");
    } else {
      alert("Gracias por participar");
    }
  }

  // VER XQ LA ESENCIA AL FINAL ACUMULADA ES 0
  // VER QUE PASA SI ESCRIBE  CANCELAR EL USUARIO
}
