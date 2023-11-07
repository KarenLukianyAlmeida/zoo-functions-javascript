const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao chamar a função handlreElephantes sem parametro, retorna undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  it('ao chamar a função handlreElephantes com parametro diferente de string, retorna a mensagem "Parâmetro inválido, é necessário uma string"', () => {
    const actual = handlerElephants(10);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
  it('ao chamar a função handlreElephantes com parametro "count", retorna o número inteiro 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
});
