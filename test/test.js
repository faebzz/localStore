var assert = require('assert');
require('mock-local-storage');
var localStore = require('../dist/localStore');

describe('localStore', function() {
  describe('set(key, value)', function() {
    it('should return true', function() {
      assert.equal(localStore.set('id', 'value'), true);
      assert.equal(localStore.set('myValue', [1,2,3]), true);
    });
    it('should return false', function() {
      assert.equal(localStore.set('id'), false);
      assert.equal(localStore.set(null, null), false);
      assert.equal(localStore.set(), false);
      assert.equal(localStore.set(null, []), false);
    });
  });
  describe('get(key)', function() {
    it('should return value as string', function() {
      assert.equal(localStore.get('id'), 'value');
    });
    it('should return length of array', function() {
      assert.equal(localStore.get('myValue').length, 3);
    });
  });
});
