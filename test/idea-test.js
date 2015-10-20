const chai   = require('chai');
// const assert = chai.assert;
const assert = require('assert');
const Idea   = require('../lib/idea');

describe('my test suite', function () {
  it('should work', function () {
    assert(true);
  });

  it('should add two plus two', function (){
    let four = 2 + 2;
    assert.equal(four, 4);
    // assert.strictEqual("4", 4);
  })

  it('should be deep equal', function (){
    let x = [1,2,3];
    assert.deepEqual(x, [1,2,3]);
  });
});

describe('idea', function () {
  it('should instantiate with a title and body', function (){
    let idea = new Idea({title: 'title', body: 'body'});
    assert.equal(idea.title, 'title')
    assert.equal(idea.body, 'body')
  });

  it('should have a render method', function (){
    let idea = new Idea({title: 'title', body: 'body'});
    assert(idea.render, 'It does not have a render method');
  });

  it('should have and element with an H2 tag', function(){
    let idea = new Idea({title: 'title', body: 'body'});
    let renderedIdea = idea.render();
    assert.equal(renderedIdea.find('h2').length, 1);
  });
});
