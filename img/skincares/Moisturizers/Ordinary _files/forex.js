(function (Bt) {
  var RATES = {"AED":3.6732,"AFN":86.14481,"ALL":103.636198,"AMD":491.087591,"ANG":1.795355,"AOA":636.084,"ARS":97.4103,"AUD":1.374162,"AWG":1.8005,"AZN":1.700805,"BAM":1.66528,"BBD":2,"BDT":85.355795,"BGN":1.66067,"BHD":0.377015,"BIF":1984.452482,"BMD":1,"BND":1.35351,"BOB":6.90649,"BRL":5.212956,"BSD":1,"BTC":2.0418305e-05,"BTN":74.243136,"BWP":11.200664,"BYN":2.506312,"BZD":2.016135,"CAD":1.258951,"CDF":1986.660833,"CHF":0.913705,"CLF":0.028412,"CLP":783.971645,"CNH":6.47066,"CNY":6.476,"COP":3859.086858,"CRC":621.383358,"CUC":1,"CUP":25.75,"CVE":94.2,"CZK":21.709,"DJF":178.05,"DKK":6.31712,"DOP":56.982048,"DZD":135.271473,"EGP":15.700149,"ERN":15.004907,"ETB":45.25,"EUR":0.849437,"FJD":2.10265,"FKP":0.726519,"GBP":0.726519,"GEL":3.1175,"GGP":0.726519,"GHS":6.040669,"GIP":0.726519,"GMD":51.12,"GNF":9807.5,"GTQ":7.741672,"GYD":209.182863,"HKD":7.783746,"HNL":23.869999,"HRK":6.3644,"HTG":99.521914,"HUF":296.034,"IDR":14413.05,"ILS":3.22988,"IMP":0.726519,"INR":74.102542,"IQD":1459.5,"IRR":42219.999839,"ISK":126.23,"JEP":0.726519,"JMD":152.79338,"JOD":0.709,"JPY":109.9795,"KES":109.75,"KGS":84.66995,"KHR":4081,"KMF":418.85,"KPW":900,"KRW":1164.329096,"KWD":0.30095,"KYD":0.833479,"KZT":426.139301,"LAK":9610,"LBP":1527.439025,"LKR":199.513511,"LRD":171.849942,"LSL":14.97,"LYD":4.525,"MAD":8.983155,"MDL":17.630558,"MGA":3922.876064,"MKD":52.342294,"MMK":1646.113004,"MNT":2856.390572,"MOP":8.018389,"MRO":356.999828,"MRU":36.07,"MUR":42.7,"MVR":15.47,"MWK":811.34326,"MXN":20.231099,"MYR":4.205,"MZN":63.749989,"NAD":14.97,"NGN":411.696767,"NIO":35.1,"NOK":8.813128,"NPR":118.789443,"NZD":1.43435,"OMR":0.384994,"PAB":1,"PEN":4.0825,"PGK":3.556463,"PHP":49.843,"PKR":165.937139,"PLN":3.885891,"PYG":6932.973715,"QAR":3.641,"RON":4.1869,"RSD":100.112799,"RUB":73.829,"RWF":1008.867795,"SAR":3.750632,"SBD":8.051577,"SCR":13.070774,"SDG":443.5,"SEK":8.68646,"SGD":1.352686,"SHP":0.726519,"SLL":10279.850038,"SOS":578.64152,"SRD":21.3955,"SSP":130.26,"STD":20817.440504,"STN":21.175,"SVC":8.751996,"SYP":1257.677991,"SZL":14.98,"THB":32.744833,"TJS":11.412503,"TMT":3.5,"TND":2.7875,"TOP":2.270532,"TRY":8.381223,"TTD":6.794355,"TWD":27.899901,"TZS":2319,"UAH":26.730668,"UGX":3535.794042,"USD":1,"UYU":42.823321,"UZS":10650,"VES":4135382.42,"VND":22745.239456,"VUV":112.186963,"WST":2.577717,"XAF":557.194318,"XAG":0.04190588,"XAU":0.00055813,"XCD":2.70255,"XDR":0.705339,"XOF":557.194318,"XPD":0.00041137,"XPF":101.364828,"XPT":0.00100001,"YER":250.8,"ZAR":14.95625,"ZMW":16.478597,"ZWL":322};

  function rate(from, to) {
    if (!RATES[from]) { throw "Currency Error (" + from + ")"; }
    if (!RATES[to]) { throw "Currency Error (" + to + ")"; }
    if (from === 'USD') {
      return RATES[to];
    }
    if (to === 'USD') {
      return 1 / RATES[from];
    }
    return RATES[to] * (1 / RATES[from]);
  }

  Bt.Currency = {
    /**
     * Converts a numerical value from a given currency to the specified currency. Note: only
     * currencies supported by https://openexchangerates.org/ are supported.
     */
    convert: function (value, from, to) {
      return ((from === to) ? value : (value * rate(from, to))).toFixed(2);
    }
  };
})(BrightTag || {});
