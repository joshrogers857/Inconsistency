import type { Quote } from '@/models/Quote';

export const validateIsQuote = function (obj: object): Quote {
  if (
    obj &&
    (obj as Quote).author !== undefined &&
    (typeof (obj as Quote).author === 'string' ||
      (obj as Quote).author === null) &&
    (obj as Quote).body !== undefined &&
    typeof (obj as Quote).body === 'string'
  ) {
    return obj as Quote;
  } else {
    throw new Error(`Validation failed for object ${JSON.stringify(obj)}`);
  }
};
