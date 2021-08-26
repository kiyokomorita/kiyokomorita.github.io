if (!Sephora.configurationSettings.isCCPABannerEnabled || bt_cookie('ccpaConsentCookie') == 1) {
 
        const script = document.createElement('script');
    
        script.src = 'https://apps.bazaarvoice.com/deployments/sephora/main_site/production/en_US/bv.js';
        script.async = true;
    
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    
}