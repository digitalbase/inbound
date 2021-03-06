
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('alltheweb.com') !== -1 ) {
    var description = { type: 'search', engine: 'alltheweb' };
    var query = querystring.parse(referrer.query).q;
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
