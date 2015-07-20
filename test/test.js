var assert = require('assert');
var fs = require('fs');
var miaow = require('miaow');
var path = require('path');

var parse = require('../index');
describe('miaow-replace', function () {
  this.timeout(10e3);

  var log;

  before(function (done) {
    miaow.compile({
      cwd: path.resolve(__dirname, './fixtures'),
      output: path.resolve(__dirname, './output'),
      pack: false,
      module: {
        tasks: [
          {
            test: /.*/,
            plugins: [
              {
                plugin: parse,
                option: {
                  replace: [
                    {
                      test: '__debug__',
                      value: 'false'
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }, function (err) {
      if (err) {
        console.error(err.toString());
        process.exit(1);
      }
      log = JSON.parse(fs.readFileSync(path.resolve(__dirname, './output/miaow.log.json')));
      done();
    });
  });

  it('接口是否存在', function () {
    assert(!!parse);
  });

  it('替换成功', function () {
    assert.equal(log.modules['foo.js'].hash, '819d8280b8b703a109c792092e440d0a');
  });
});
