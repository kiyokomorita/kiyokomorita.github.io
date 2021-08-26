!function () {
  var $, websiteId, chatDocument;


  //#region common functions
  function deferWait(callback, test) {
    if (test()) {
      callback();
      return;
    }
    var _interval = 10;
    var _spin = function () {
      if (test()) {
        callback();
      }
      else {
        _interval = _interval >= 1000 ? 1000 : _interval * 2;
        setTimeout(_spin, _interval);
      }
    };
    setTimeout(_spin, _interval);
  }

  function observeElement(element, callback, config) {
    try {
      // Options for the observer (which mutations to observe)
      if(typeof config == "undefined") config = { attributes: true, childList: true, subtree: true };
      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(function (mutationsList, observer) {
        if (typeof callback === 'function') {
          callback(mutationsList, observer);
        }
      });

      observer.observe(element, config);
    } catch (e) {

    }
  }

  function loadCustomCss(filePath, callback) {
    _insideGraph.loadCSS(filePath, function () {
      if (callback) callback();
      insideFrontInterface.scale();
    });
  }

  function loadCustomCssForTheme(filePath, id) {
    chatDocument.find('head').append('<link id="' + id + '" rel="stylesheet" type="text/css" media="all" href="' + filePath + '">');
  }

  function getCustomFilePath(fileName) {
    return _insideCDN + 'custom/' + websiteId + '-' + fileName + '?v=' + _insideScriptVersion;
  }

  //#endregion

  function loadLegacyFiles() {
    loadCustomCss(getCustomFilePath('sephora-legacy.css'));
    _insideGraph.loadJS(getCustomFilePath('sephora-legacy.js'));
  }

  // wait until Inside is loaded
  deferWait(function () {
    $ = _insideGraph.jQuery;
    websiteId = insideFrontInterface.chat.userid.split(':')[1];

    if (insideFrontInterface.chat.version == 1)
      loadLegacyFiles();
    else deferWait(initCustomTheme, function() { return typeof insideChatPane !== "undefined" });
  }, function () {
    return typeof insideFrontInterface != "undefined" && insideFrontInterface.chat && insideFrontInterface.chat.version;
  });

  function initCustomTheme() {
    chatDocument = $(document.getElementById('insideChatFrame').contentWindow.document);
    loadCustomCss(getCustomFilePath('sephora-custom-theme.css'));

    $('#inside_holder').attr('page-type', window.powerfront && window.powerfront.pageType);

    // setup vh-offset
    if ($('#inside_holder').attr('device') > 1) {
      function throttle(callback, limit) {
        var tick = false;
        return function () {
          if (!tick) {
            callback.call();
            tick = true;
            setTimeout(function () {
              tick = false;
            }, limit);
          }
        }
      }

      function calculateBottomOffset() {
        var footerH = 0;
        if ($('[data-at="bottom_nav"]').length > 0)
          footerH += $('[data-at="bottom_nav"]').outerHeight();
        if ($('[data-comp*="StickyFooter"]').length > 0)
          footerH += $('[data-comp*="StickyFooter"]').outerHeight();

        document.documentElement.style.setProperty('--inside-bottom-offset', footerH + 'px');
      }

      calculateBottomOffset()
      window.addEventListener("scroll", throttle(calculateBottomOffset, 250));
      window.addEventListener("resize", throttle(calculateBottomOffset, 250));
    }

    // observe chat pane element
    deferWait(function() {
      observeElement(insideChatPane.chatPane, checkChatPane, { attributes: true });
      checkChatPane();
    }, function() {
      return typeof insideChatPane.chatPane != "undefined";
    });
  }

  function checkChatPane() {
    if($(insideChatPane.chatPane).hasClass('prechat')) 
      $('#inside_holder').addClass('prechat');
    else $('#inside_holder').removeClass('prechat');
  }

}()