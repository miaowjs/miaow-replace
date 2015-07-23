var mutil = require('miaow-util');

var pkg = require('./package.json');

function replace(option, cb) {
  var replaceInfoList = option.replace || [];
  var contents = this.contents.toString();

  replaceInfoList.forEach(function (info) {
    contents = contents.replace(info.test, info.value);
  });

  this.contents = new Buffer(contents);
  cb();
}

module.exports = mutil.plugin(pkg.name, pkg.version, replace);
