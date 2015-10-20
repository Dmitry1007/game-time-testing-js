const chai = require('chai');
const assert = chai.assert;

describe('my test suite', function () {
  it('should work', function () {
    assert(true);
  });

  it('should add two plus two', function (){
    let four = 2 + 2;
    assert.equal(four, 4);
    // assert.strictEqual("4", 4); This will fail
  })

  it('should be deep equal', function (){
    let x = [1,2,3];
    // assert.deepEqual(x, [1,2,3]);
  });
});
