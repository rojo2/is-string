/**
 * Returns if the value passed is a string
 *
 * @param {*} value - Value
 * @returns {string} - Returns if it is a string
 */
export default function isString(value) {
  return typeof value === "string" || value instanceof String;
}
