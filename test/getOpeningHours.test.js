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
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toMatch(expected);
  });

  it('3. Para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toMatch(expected);
  });

  it('4. Para os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toMatch(expected);
  });

  it('5. Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(expected);
  });

  it('6. Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('7. Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    const expected = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(expected);
  });

  it('8. Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    const expected = 'The minutes should represent a number';
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(expected);
  });

  it('9. Para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(expected);
  });

  it('10. Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(expected);
  });
});
