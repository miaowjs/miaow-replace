module.exports = function (option, cb) {
  var replaceInfoList = option.replace || [];
  var contents = this.contents.toString();

  replaceInfoList.forEach(function (info) {
    contents = contents.replace(info.test, info.value);
  });

  this.contents = new Buffer(contents);
  cb();
};
