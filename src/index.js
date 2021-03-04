module.exports = function reverse (n) {
    let s = ''
    if (n >= 0) {
        s = `${n}`
    } else {
        s = `${-n}`
    }
    
    return s.split('').reverse().join('')
}
