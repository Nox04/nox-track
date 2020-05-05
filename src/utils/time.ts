const round = (value: number, precision: number) => {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

export const minutesToHours = (minutes: number) => {
  return round(minutes / 60, 1);
};
