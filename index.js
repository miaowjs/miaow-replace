var _ = require('lodash');
var pkg = require('./package.json');

module.exports = function(options, callback) {
  var context = this;
  var replaceInfoList = options.replace || [];
  var contents = context.contents.toString();

  replaceInfoList.forEach(function(info) {
    var value = _.template(info.value)(context);
    contents = contents.replace(info.test, value);
  });

  context.contents = new Buffer(contents);
  callback();
};

module.exports.toString = function() {
  return [pkg.name, pkg.version].join('@');
};
