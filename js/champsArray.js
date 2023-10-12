const champsArray = [
  {
    championName: "Ahri",
    championType: "Asesino y mago",
    championCost: 3150,
  },
  {
    championName: "Caitlyn",
    championType: "Tirador",
    championCost: 450,
  },
  {
    championName: "Camille",
    championType: "Luchador y Tanque",
    championCost: 4800,
  },
  {
    championName: "Aatrox",
    championType: "Luchador y Tanque",
    championCost: 4800,
  },
  {
    championName: "Jhin",
    championType: "Tirador y Mago",
    championCost: 4444,
  },
  {
    championName: "Akshan",
    championType: "Tirador y Asesino",
    championCost: 4800,
  },
  {
    championName: "Diana",
    championType: "Luchador y Mago",
    championCost: 450,
  },
  {
    championName: "Ekko",
    championType: "Asesino y Luchador",
    championCost: 3150,
  },
  {
    championName: "Gwen",
    championType: "Asesino y Luchador",
    championCost: 4800,
  },
  {
    championName: "Heimerdinger",
    championType: "Mago y Apoyo",
    championCost: 3150,
  },
  {
    championName: "Jayce",
    championType: "Tirador y Luchador",
    championCost: 4800,
  },
  {
    championName: "Leona",
    championType: "Apoyo y Tanque",
    championCost: 450,
  },
  {
    championName: "Lux",
    championType: "Apoyo y Mago",
    championCost: 450,
  },
  {
    championName: "Nami",
    championType: "Mago y Apoyo",
    championCost: 3150,
  },
  {
    championName: "Singed",
    championType: "Luchador y Tanque",
    championCost: 4800,
  },
  {
    championName: "Swain",
    championType: "Luchador y Mago",
    championCost: 3150,
  },
  {
    championName: "Vi",
    championType: "Asesino y Luchador",
    championCost: 13,
  },
  {
    championName: "Warwick",
    championType: "Luchador y Tanque",
    championCost: 450,
  },
  {
    championName: "Yuumi",
    championType: "Mago y Apoyo",
    championCost: 450,
  },
  {
    championName: "Yasuo",
    championType: "Asesino y Luchador",
    championCost: 1350,
  },
];

const nameFirstBattle = prompt(
  "Ingresa el nombre del primer campeón para iniciar el combate\npor ejemplo, ahri"
).toLowerCase();

const nameSecondBattle = prompt(
  "Ingresa el nombre del segundo campeón para inciar el combate\npor ejemplo, yuumi"
).toLowerCase();

const validateFirstNameChamp = champsArray.find((champ) => {
  return champ.championName.toLowerCase() === nameFirstBattle;
});

const validateSecondNameChamp = champsArray.find((champ) => {
  return champ.championName.toLowerCase() === nameSecondBattle;
});

if (!validateFirstNameChamp || !validateSecondNameChamp) {
  alert("Ingresa un campeón válido");
  window.location.reload();
} else {
  const selectionChamp = Math.round(Math.random() * 10);
  if (selectionChamp < 5) {
    alert(
      `Ganó ${validateFirstNameChamp.championName}, que es ${validateFirstNameChamp.championType}`
    );
  } else
    alert(
      `Ganó ${validateSecondNameChamp.championName}, que es ${validateSecondNameChamp.championType}`
    );
}
