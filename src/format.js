import { getMonthName } from './hijri';

const config = require('./config');
const { wrapString } = require('./utils');

/**
 *
 *
 * @param {*} day
 * @param {*} month
 * @param {boolean} [inArabic=true]
 * @param {*} [year=config.YEAR]
 * @returns
 */
export const formatDate = (day, month, inArabic = true, year = config.YEAR) => {
  return inArabic
    ? [
        {
          name: year,
        },
        {
          name: getMonthName(month),
          isRtl: true,
        },
        {
          name: day,
        },
      ]
        .map(e => wrapString(e.name, e.isRtl))
        .join(' ')
        .trim('')
    : `${day} ${getMonthName(month, false)} ${year}`;
};
