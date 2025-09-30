/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let objArr = Object.entries(obj);
  return Object.fromEntries(objArr.filter((i) => fields.includes(i[0])));
};
