if (!Sephora.configurationSettings.isCCPABannerEnabled || bt_cookie('ccpaConsentCookie') == 1) {
    const script = document.createElement('script');

    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-165841114-1';
    script.async = true;

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);   
}