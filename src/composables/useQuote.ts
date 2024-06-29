import { getRandomNumber } from '@/helpers/math';
import quoteData from '../data/quotes.json';
import type { Quote } from '@/models/Quote';
import { validateIsQuote } from '@/helpers/validation';

export function useQuote() {
  const getQuote = function (): Quote | null {
    const quotes: Quote[] = [];

    for (const quote of quoteData) {
      try {
        quotes.push(validateIsQuote(quote));
      } catch (error) {
        console.error(error);
      }
    }

    return quotes.length ? quotes[getRandomNumber(quotes.length)] : null;
  };

  return { getQuote };
}
