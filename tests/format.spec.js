const { formatDate } = require('../src/format');

const arabicDate = '‪1442‬ ‫ذي القعدة‬ ‪1‬';
const LatinDate = "1 Thul-Qi'dah 1442";

describe('Formating dates in different formats', () => {
  it('Should be able to format in a standard arabic format', () => {
    const date = formatDate(1, 11);
    expect(date).toBe(arabicDate);
  });
  it('Should be able to format in a fr/en', () => {
    const date = formatDate(1, 11, false);
    expect(date).toBe(LatinDate);
  });
});
