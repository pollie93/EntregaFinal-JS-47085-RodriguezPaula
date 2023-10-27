const champsArray = [
  {
    championName: "Ahri",
    championType: "Asesino y mago",
    img: "../images/champion/champ-ahri.jpg",
  },
  {
    championName: "Caitlyn",
    championType: "Tirador",
    img: "../images/champion/champ-caitlyn.jpg",
  },
  {
    championName: "Camille",
    championType: "Luchador y Tanque",
    img: "../images/champion/champ-camille.jpg",
  },
  {
    championName: "Aatrox",
    championType: "Luchador y Tanque",
    img: "../images/champion/champ-aatrox.jpg",
  },
  {
    championName: "Jhin",
    championType: "Tirador y Mago",
    img: "../images/champion/champ-jhin.jpg",
  },
  {
    championName: "Akshan",
    championType: "Tirador y Asesino",
    img: "../images/champion/champ-akshan.jpg",
  },
  {
    championName: "Diana",
    championType: "Luchador y Mago",
    img: "../images/champion/champ-diana.jpg",
  },
  {
    championName: "Ekko",
    championType: "Asesino y Luchador",
    img: "../images/champion/champ-ekko.jpg",
  },
  {
    championName: "Gwen",
    championType: "Asesino y Luchador",
    img: "../images/champion/champ-gwen.jpg",
  },
  {
    championName: "Heimerdinger",
    championType: "Mago y Apoyo",
    img: "../images/champion/champ-heimerdinger.jpg",
  },
  {
    championName: "Jayce",
    championType: "Tirador y Luchador",
    img: "../images/champion/champ-jayce.jpg",
  },
  {
    championName: "Leona",
    championType: "Apoyo y Tanque",
    img: "../images/champion/champ-leona.jpg",
  },
  {
    championName: "Lux",
    championType: "Apoyo y Mago",
    img: "../images/champion/champ-lux.jpg",
  },
  {
    championName: "Nami",
    championType: "Mago y Apoyo",
    img: "../images/champion/champ-nami.jpg",
  },
  {
    championName: "Singed",
    championType: "Luchador y Tanque",
    img: "../images/champion/champ-singed.jpg",
  },
  {
    championName: "Swain",
    championType: "Luchador y Mago",
    img: "../images/champion/champ-swain.jpg",
  },
  {
    championName: "Vi",
    championType: "Asesino y Luchador",
    img: "../images/champion/champ-vi.jpg",
  },
  {
    championName: "Warwick",
    championType: "Luchador y Tanque",
    img: "../images/champion/champ-warwick.jpg",
  },
  {
    championName: "Yuumi",
    championType: "Mago y Apoyo",
    img: "../images/champion/champ-yuumi.jpg",
  },
  {
    championName: "Yasuo",
    championType: "Asesino y Luchador",
    img: "../images/champion/champ-yasuo.jpg",
  },
];

function showWelcomeUserName() {
  let nameSummonerSaveLocalStorage = localStorage.getItem("username");
  if (nameSummonerSaveLocalStorage)
    return (document.getElementById(
      "parrafo-dom"
    ).innerHTML = `Bienvenido ${nameSummonerSaveLocalStorage}!!, no sos vos?, ingresa tu nombre aquí`);
}

showWelcomeUserName();

const btnLoginUserName = document.querySelector("#summonerSave");
btnLoginUserName.addEventListener("click", () => {
  const inputElement = document.querySelector("#nameEntered");
  const userName = inputElement.value;
  if (userName !== "") {
    localStorage.setItem("username", userName);
    showWelcomeUserName();
  } else {
    console.log("error");
  }
});

const container = document.querySelector(".container-enfrentamiento");

const botonEnfrentar = document.getElementById("btn-enfrentar");
const ejecutarEnfrentamiento = (e) => {
  e.preventDefault();
  const winnerElement = document.getElementById("winner");
  if (winnerElement) winnerElement.remove();
  const firstChampionEntered = document.querySelector("#insertFirstNameChamp");
  const getFirstChampionEntered = firstChampionEntered.value;

  const secondChampionEntered = document.querySelector(
    "#insertSecondNameChamp"
  );
  const getSecondChampionEntered = secondChampionEntered.value;

  const championFirst = champsArray.find((champ) => {
    return (
      champ.championName.toLowerCase() === getFirstChampionEntered.toLowerCase()
    );
  });

  const championSecond = champsArray.find((champ) => {
    return (
      champ.championName.toLowerCase() ===
      getSecondChampionEntered.toLowerCase()
    );
  });

  if (!championFirst || !championSecond) {
    const hayError = document.querySelector(".errorChampions");
    if (hayError) return;
    botonEnfrentar.insertAdjacentHTML(
      "afterend",
      `
      <p class="errorChampions">Uno de los campeones ingresados, no es válido, por favor, ingresar uno del listado</p>
    `
    );
  } else {
    const hayError = document.querySelector(".errorChampions");
    if (hayError) hayError.remove();
    const selectionChamp = Math.round(Math.random() * 10);
    if (selectionChamp < 5) {
      botonEnfrentar.insertAdjacentHTML(
        "afterend",
        `
        <div id="winner">
          <p>GANADOR: ${championFirst.championName}</p>
          <img src=${championFirst.img}></img>
        </div>
      `
      );
    } else
      botonEnfrentar.insertAdjacentHTML(
        "afterend",
        `
       <div id="winner">
          <p>GANADOR: ${championSecond.championName}</p>
          <img src=${championSecond.img}></img>
        </div>
      `
      );
  }
};

botonEnfrentar.addEventListener("click", ejecutarEnfrentamiento);
