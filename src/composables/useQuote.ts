import { getRandomNumber } from '@/helpers/math';
import quoteData from '../data/quotes.json';
import type { Quote } from '@/models/Quote';

export function useQuote() {
  const getQuote = function() {
    // TODO: validation
    // TODO: use URL code not random
    return quoteData[getRandomNumber(quoteData.length)] as Quote;
  };

  return { getQuote };
}
