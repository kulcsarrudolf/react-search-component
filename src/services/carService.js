import fakeDataList from "./fakeData";

export const COLOURS = [
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

export const getAllCarsByColor = async (color) => {
  const result = fakeDataList.filter((data) => data.color === color);

  await sleep(250 + Math.floor(Math.random() * Math.floor(750)));

  if (result.length > 0) {
    return result.map((vehicle) => vehicle.id);
  } else {
    return [];
  }
};

export const getCarById = async (id) => {
  const result = fakeDataList.filter((data) => data.id === id);

  await sleep(250 + Math.floor(Math.random() * Math.floor(750)));

  if (result.length === 1) {
    return result[0];
  } else {
    return false;
  }
};
