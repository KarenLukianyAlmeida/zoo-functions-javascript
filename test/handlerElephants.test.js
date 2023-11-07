const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao chamar a função handlreElephantes sem parametro, retorna undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
});
