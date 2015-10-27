var pkg = require('./package.json');

module.exports = function(options, callback) {
  var context = this;
  var replaceInfoList = options.replace || [];
  var contents = context.contents.toString();

  replaceInfoList.forEach(function(info) {
    contents = contents.replace(info.test, info.value);
  });

  context.contents = new Buffer(contents);
  callback();
};

module.exports.toString = function() {
  return [pkg.name, pkg.version].join('@');
};
