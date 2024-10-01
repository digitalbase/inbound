
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (href.host && href.href.indexOf("utm_source=capterra") !== -1) {
    var description = { type: 'directory', engine: 'capterra', host: referrer.host };
    var query = querystring.parse(referrer.query).q;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};