var assert = require('assert');
var find = require('lodash.find');
var fs = require('fs');
var miaow = require('miaow');
var path = require('path');

var parse = require('../index');
describe('miaow-replace', function() {
  this.timeout(10e3);

  var log;

  before(function(done) {
    miaow({
      context: path.resolve(__dirname, './fixtures')
    }, function(err) {
      if (err) {
        console.error(err.toString(), err.stack);
        process.exit(1);
      }

      log = JSON.parse(fs.readFileSync(path.resolve(__dirname, './output/miaow.log.json')));
      done();
    });
  });

  it('接口是否存在', function() {
    assert(!!parse);
  });

  it('替换成功', function() {
    assert.equal(find(log.modules, {src: 'foo.js'}).destHash, 'b15db9d19c427998217db870f41aecb6');
  });
});
