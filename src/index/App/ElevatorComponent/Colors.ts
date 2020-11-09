export const getRandomColorSet = (): Colorset =>
  colorSets[Math.floor(Math.random() * colorSets.length)];

export const getRandomPassengerColor = (): string =>
  passengerColors[Math.floor(Math.random() * passengerColors.length)];

export type Colorset = {
  bg: string;
  fg: string;
};

const colorSets: Colorset[] = [
  // blue
  {
    bg: "#89c4f4",
    fg: "#6bb9f0",
  },
  // white
  {
    bg: "#bdc3c7",
    fg: "#ecf0f1",
  },
  // orange
  {
    bg: "#dd893f",
    fg: "#e67e22",
  },
  // red
  {
    bg: "#e74c3c",
    fg: "#e83519",
  },
  // green
  {
    bg: "#54b980",
    fg: "#2ecc71",
  },
];

const passengerColors: string[] = [
  "#ffdd59",
  "#ef5777",
  "#1e272e",
  "#ffcccc",
  "#c56cf0",
];
