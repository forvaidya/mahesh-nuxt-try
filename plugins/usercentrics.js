export default ({ app }) => {
    if (process.client) {
      (function (w, d, s, o, f, js, fjs) {
        w['Usercentrics'] = o;
        w[o] = w[o] || function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
        js = d.createElement(s);
        fjs = d.getElementsByTagName(s)[0];
        js.id = o;
        js.src = f;
        js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
      })(window, document, 'script', 'Usercentrics', 'https://app.usercentrics.eu/browser-ui/latest/loader.js');
  
      Usercentrics('init', {
        settingsId: 'YOUR_SETTINGS_ID',
        version: 1,
        language: 'en',
        // Additional configurations can be added here
      });
  
      Usercentrics('onConsentReady', function (consent) {
        // Handle consent changes
        console.log('User consent:', consent);
        // Save cookies or user preferences as needed
        document.cookie = `userConsent=${JSON.stringify(consent)}; path=/;`;
      });
    }
  };