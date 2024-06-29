export function getRandomNumber(max: number = 100): number {
  return Math.floor(max ? Math.random() * max : Math.random());
}
