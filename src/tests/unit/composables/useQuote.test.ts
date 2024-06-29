describe('getQuote', () => {
  afterEach(() => {
    vi.resetModules();
  });

  it('should return null if quotes are empty', async () => {
    vi.doMock('@/data/quotes.json', () => ({
      default: [],
    }));

    const { useQuote: mockedUseQuote } = await import('@/composables/useQuote');
    const { getQuote } = mockedUseQuote();

    expect(getQuote()).toBe(null);
  });

  it('should return a quote if quotes are non-empty', async () => {
    vi.doMock('@/data/quotes.json', () => ({
      default: [
        { author: 'foo', body: 'bar' },
        { author: 'test', body: '123' },
        { author: 'bar', body: 'foo' },
      ],
    }));

    const { useQuote: mockedUseQuote } = await import('@/composables/useQuote');
    const { getQuote } = mockedUseQuote();
    const result = getQuote();

    expect(result).not.toBe(null);
    expect(result).toHaveProperty('author');
    expect(result).toHaveProperty('body');
  });
});
