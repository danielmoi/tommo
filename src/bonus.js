const isBananaman = require('bananaman');
const tommo = require('../lib');
console.log('tommo:', tommo);

const check = guess => isBananaman(guess);
tommo('dan');

module.exports = check;
