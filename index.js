const store = require('./store');
const hoc = require('./hoc');

store.create('user', {a:1});
hoc.logStore();
