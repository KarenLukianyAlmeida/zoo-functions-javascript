const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('1. Ao chamar a função handlreElephantes sem parametro, retorna undefined', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
  it('2. Ao chamar a função handlreElephantes com parametro diferente de string, retorna a mensagem "Parâmetro inválido, é necessário uma string"', () => {
    const actual = handlerElephants(10);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
  it('3. Ao chamar a função handlreElephantes com parametro "count", retorna o número inteiro 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('4. Ao chamar a função handlreElephantes com parametro "names", deve retornar um array de nomes que possua o nome "Jefferson"', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';
    expect(actual).toContain(expected);
  });
  it('5. Ao chamar a função handlreElephantes com parametro "averageAge", deve retornar o valor 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBe(expected);
  });
  it('6. Ao chamar a função handlreElephantes com parametro "location", deve retornar "NW"', () => {
    const actual = handlerElephants('location');
    expect(actual).toMatch('NW');
  });
  it('7. Ao chamar a função handlreElephantes com parametro "popularity", deve numero inteiro 5', () => {
    const actual = handlerElephants('popularity');
    expect(actual).toBe(5);
  });
  it('8. Ao chamar a função handlreElephantes com parametro "availability", deve numero inteiro 5', () => {
    const actual = handlerElephants('availability');
    expect(actual).not.toContain('Monday');
  });
  it('9. Ao chamar a função handlreElephantes com parametro "nome", deve retornar null', () => {
    const actual = handlerElephants('Name');
    expect(actual).toBeNull();
  });
});
