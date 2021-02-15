export function getISOFormattedDate(date) {
  return date.toISOString().split("T")[0];
}

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
