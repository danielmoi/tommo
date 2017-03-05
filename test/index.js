const tommo = require('../lib');
console.log('tommo:', tommo);

const answer = tommo.mate('Dan');
const answer2 = tommo.default('Dan');
console.log('answer:', answer);
console.log('answer2:', answer2);

const what = tommo.bonus('Dan');
console.log('what:', what);
