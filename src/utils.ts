export const randomNumber = (min: number, max: number) => {
  const res = Math.random() * (max - min) + min;
  return res;
};

export const randomColor = (colors: string[]): string => {
  return colors[Math.round(randomNumber(0, colors.length - 1))];
};
