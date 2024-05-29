export function getRandomNumber(max?: number): number {
  return Math.floor(max ? Math.random() * max : Math.random());
}
