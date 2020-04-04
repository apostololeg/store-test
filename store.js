var STORE = {};

function create(name, obj) {
  STORE[name] = obj;
  console.log('create', STORE);
}

module.exports = {
  STORE: STORE,
  create: create
};
