var wa = wa || {};

wa.setCookie = function (name, value, days) {
  try {
    if(typeof(days)==="undefined") { days = 365; }
    var millis = days*86400000;
    var expires = '';
    if(millis!==0) {
        var now = new Date();
        var then = new Date(now.getTime() + millis);
        var exp = then.toGMTString();
        expires += "; expires=" + exp;
      }
    document.cookie = name + '=' + escape(value) + expires + '; path=/';

  } catch (e) {}
};

wa.getCookie = function (name) {
  try {
    var results = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    var result = ( results && results.length > 2 ) ? unescape(results[2]) : "";
    if (results) {
      return result;
    } else {
      return null;
    }
  } catch (e) {}
};

wa.deleteCookie = function (name) {
  this.setCookie(name, '', -1);
};

wa.isEmpty = function (a) {
  return a === null || typeof a == 'undefined' || a === '';
};