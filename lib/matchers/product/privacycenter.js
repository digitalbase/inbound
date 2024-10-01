
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (href.host && href.href.indexOf("utm_source=made-with-prezly") !== -1 && referrer.host === 'privacy.prezly.com') {
    var description = { type: 'product', engine: 'privacy-center', host: referrer.host };
    var query = querystring.parse(referrer.query).q;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};