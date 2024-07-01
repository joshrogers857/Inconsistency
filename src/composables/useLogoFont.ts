import { getRandomNumber } from '@/helpers/math';

export function useLogoFont() {
  const getLogoFont = function (): string {
    const random = getRandomNumber(10);

    if (random >= 8) {
      return 'nabla-regular';
    } else if (random < 8 && random >= 4) {
      return 'cairo-play-regular';
    } else {
      return 'bungee-spice-regular';
    }
  };

  return { getLogoFont };
}
