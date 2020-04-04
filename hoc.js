const STORE = require('./store');

console.log('hoc.js', STORE);

module.exports.logStore = function() {
  console.log('logStore', STORE);
}
