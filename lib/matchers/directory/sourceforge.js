module.exports = function (href, referrer, callback) {
  if (href.host && href.href.indexOf("utm_source=sourceforge") !== -1) {
    var description = { type: 'directory', engine: 'sourceforge' };
    return callback(null, description);
  } else {
    return callback(null, false);
  }
};