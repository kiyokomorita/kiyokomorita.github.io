if (!Sephora.configurationSettings.isCCPABannerEnabled || bt_cookie('ccpaConsentCookie') == 1) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments) };
    window.addEventListener("pageLoadEvent", function() {
        gtag('js', new Date());
        gtag('config', 'DC-5878462',{ 'allow_enhanced_conversions': true });
        gtag('config', 'AW-969432509', { 'allow_enhanced_conversions': true });
        gtag('config', 'AW-876588114', { 'allow_enhanced_conversions': true });
        gtag('config', 'AW-857992431', { 'allow_enhanced_conversions': true });
        gtag('config', 'AW-1072439557', { 'allow_enhanced_conversions': true });
        gtag('config', 'UA-165841114-1', {
            'send_page_view': false,
            'user_id': digitalData.user[0].segment.biAccountId,
            'custom_map': {
                'dimension1': 'profileId',
                'dimension2': 'biAccountId',
                'dimension3': 'biStatus',
                'dimension4': 'biPoints',
                'dimension5': 'firstFivePIDs',
                'dimension6': 'loginStatus',
                'dimension7': 'userLocale',
                'dimension8': 'userLanguage',
                'dimension9': 'ropisValue',
                'dimension10': 'ropisCurrency',
                'dimension11': 'ropisOrderId',
                'dimension12': 'ropisProductSkus',
                'dimension13': 'bopisValue',  // These dimensions are set for BOPIS orders but for ROPIS orders it will be undefined
                'dimension14': 'bopisCurrency',
                'dimension15': 'bopisOrderId',
                'dimension16': 'bopisProductSkus'
            }
        });
    });
}