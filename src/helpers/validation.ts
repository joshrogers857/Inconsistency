import type { Quote } from '@/models/Quote';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateIsQuote = function (obj: any): Quote {
  if (
    obj &&
    obj.author !== undefined &&
    (typeof obj.author === 'string' || obj.author === null) &&
    obj.body !== undefined &&
    typeof obj.body === 'string'
  ) {
    return {
      author: obj.author,
      body: obj.body,
    };
  } else {
    throw new Error(`Validation failed for object ${JSON.stringify(obj)}`);
  }
};
