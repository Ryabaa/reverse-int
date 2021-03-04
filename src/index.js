module.exports = function reverse (n) {
  let s = `${n}`
  return s.split('').reverse().join('');
}
