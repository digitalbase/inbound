
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (href.host && href.href.indexOf("utm_source=github") !== -1 && (
      referrer.host === 'github.com' || referrer.host === 'npmjs.com' || referrer.host === 'www.npmjs.com'

  )) {
    var description = { type: 'product', engine: 'github', host: referrer.host };
    var query = querystring.parse(referrer.query).q;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};