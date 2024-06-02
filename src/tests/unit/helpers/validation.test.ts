import { validateIsQuote } from '@/helpers/validation';

describe('validateIsQuote', () => {
  it('returns Quote for valid input', () => {
    const VALID_QUOTE = { author: 'foo', body: 'bar' };

    expect(validateIsQuote(VALID_QUOTE)).toStrictEqual(VALID_QUOTE);
  });

  it('returns Quote for valid input with null author', () => {
    const VALID_QUOTE_NULL_AUTHOR = { author: null, body: 'bar' };

    expect(validateIsQuote(VALID_QUOTE_NULL_AUTHOR)).toStrictEqual(
      VALID_QUOTE_NULL_AUTHOR,
    );
  });

  it('returns Quote for valid input with additional property', () => {
    const VALID_QUOTE_ADDITIONAL_PROPERTY = {
      author: 'foo',
      body: 'bar',
      test: '123',
    };

    expect(validateIsQuote(VALID_QUOTE_ADDITIONAL_PROPERTY)).toStrictEqual({
      author: 'foo',
      body: 'bar',
    });
  });

  it('throws error for input with missing author', () => {
    const INVALID_QUOTE_MISSING_AUTHOR = { body: 'bar' };
    const ERROR = 'Validation failed for object {"body":"bar"}';

    expect(() => validateIsQuote(INVALID_QUOTE_MISSING_AUTHOR)).toThrowError(
      ERROR,
    );
  });

  it('throws error for input with missing body', () => {
    const INVALID_QUOTE_MISSING_BODY = { author: 'foo' };
    const ERROR = 'Validation failed for object {"author":"foo"}';

    expect(() => validateIsQuote(INVALID_QUOTE_MISSING_BODY)).toThrowError(
      ERROR,
    );
  });

  it('throws error for input with null body', () => {
    const INVALID_QUOTE_NULL_BODY = { author: 'foo', body: null };
    const ERROR = 'Validation failed for object {"author":"foo","body":null}';

    expect(() => validateIsQuote(INVALID_QUOTE_NULL_BODY)).toThrowError(ERROR);
  });

  it('throws error for input with invalid type author', () => {
    const INVALID_QUOTE_AUTHOR_NUMBER = { author: 1, body: 'bar' };
    const ERROR = 'Validation failed for object {"author":1,"body":"bar"}';

    expect(() => validateIsQuote(INVALID_QUOTE_AUTHOR_NUMBER)).toThrowError(
      ERROR,
    );
  });

  it('throws error for input with invalid type body', () => {
    const INVALID_QUOTE_BODY_NUMBER = { author: 'foo', body: 1 };
    const ERROR = 'Validation failed for object {"author":"foo","body":1}';

    expect(() => validateIsQuote(INVALID_QUOTE_BODY_NUMBER)).toThrowError(
      ERROR,
    );
  });
});
