const today = new Date().getDay();

function getDay(day) {
  switch (day) {
    case 0:
      return "Domenica";

    case 1:
      return "Lunedì";

    case 2:
      return "Martedì";

    case 3:
      return "Mercoledì";

    case 4:
      return "Giovedì";

    case 5:
      return "Venerdì";

    case 6:
      return "Sabato";

    default:
      return "Boh...";
  }
}

function getDayObj(day) {
  const days = {
    0: "Domenica",
    1: "Luned'",
    2: "Martedì",
    3: "Mercoledì",
    4: "Giovedì",
    5: "Venerdì",
    6: "Sabato",
  };

  return days[day];
}

console.time("switch");
console.log(getDay(today));
console.timeEnd("switch");

console.time("obj");
console.log(getDayObj(today));
console.timeEnd("obj");
