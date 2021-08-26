const scriptElement = document.createElement('script');

scriptElement.src = '/js/sot/sephora-one-tag.min.js';
scriptElement.async = true;

var sotUfeEnv = Sephora && Sephora.UFE_ENV;

if (sotUfeEnv && (sotUfeEnv.indexOf('LOCAL') !== -1)) {
    scriptElement.src = 'https://qa4.sephora.com/js/sot/sephora-one-tag.min.js';
}

const firstScriptElement = document.getElementsByTagName('script')[0];
firstScriptElement.parentNode.insertBefore(scriptElement, firstScriptElement);


var sotBaseURL;
var sotAPIKey;
if (sotUfeEnv && (sotUfeEnv.indexOf('QA') !== -1)) {
    sotBaseURL = "//qa-api-developer.sephora.com/v1/sot";
} else if (sotUfeEnv && (sotUfeEnv.indexOf('PROD') !== -1)) {
    sotBaseURL = "//api-developer.sephora.com/v1/sot";
    sotAPIKey = "nQc7BFt78yJBvfYDKtle9APd5RrX984i";
}

if (sotBaseURL) {
    (window.sephoraOneTag_cmds = window.sephoraOneTag_cmds || []).push(['setBaseURL', sotBaseURL]);
}

if (sotAPIKey) {
    (window.sephoraOneTag_cmds = window.sephoraOneTag_cmds || []).push(['setApiKey', sotAPIKey]);
}