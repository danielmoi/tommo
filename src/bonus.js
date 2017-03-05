import isBananaman from 'bananaman';

const check = guess => isBananaman(guess);

const answer = base => `${check(base)}, mate`;

export default answer;
