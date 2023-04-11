export const timeConverter = (t:number):string => {
  const minutes = Math.floor(t / 60);
  const seconds = t % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds} min`;
};
