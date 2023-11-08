const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('1. Retorna o objeto de zoo_data.hours', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(actual).toEqual(expected);
  });

  it('2. Para os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed" (Já que o Zoo está sempre fechado na segunda)', () => {
    const actual = getOpeningHours('Monday', '00:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toMatch(expected);
  });

  it('3. Para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toMatch(expected);
  });
});
