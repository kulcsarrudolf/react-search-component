const listOfId = [
  "AB0123456781",
  "AB0123456782",
  "AB0123456783",
  "AB0123456784",
  "AB0123456785",
  "AB0123456786",
  "AB0123456787",
  "AB0123456788",
  "AB0123456789",
  "AB0123456790",
  "AB0123456791",
];

const CAR_MAKERS = ["AUDI", "BMW", "VW", "Tesla", "Mercedes", "Porsche"];
const COLOURS = [
  "BLACK",
  "BROWN",
  "GRAY",
  "WHITE",
  "YELLOW",
  "ORANGE",
  "RED",
  "PINK",
  "PURPLE",
  "BLUE",
  "GREEN",
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getRandomCarId = () => {
  const random = Math.floor(Math.random() * listOfId.length);
  return listOfId[random];
};

export const getRandomCarIdList = () => {
  const result = [];

  const numberOfElements = Math.floor(Math.random() * listOfId.length);

  for (let i = 0; i < numberOfElements; i++) {
    result.push(getRandomCarId());
  }

  return Array.from(new Set(result));
};

const getRandomCarDataById = (carId) => {
  const maker = CAR_MAKERS[Math.floor(Math.random() * CAR_MAKERS.length)];
  const color = COLOURS[Math.floor(Math.random() * COLOURS.length)];

  return { id: carId, maker: maker, color: color };
};

export const getCarById = async (id) => {
  const resultFound = Math.random() >= 0.1;
  await sleep(250 + Math.floor(Math.random() * Math.floor(750)));

  if (resultFound) {
    return getRandomCarDataById(id);
  } else {
    return null;
  }
};
