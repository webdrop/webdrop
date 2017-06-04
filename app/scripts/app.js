(function(document) {
    'use strict';

    var app = document.querySelector('#app');

    // Sets app default base URL
    app.baseUrl = '/';


    // don't display the install prompt if the user has *already* installed
    window.addEventListener('beforeinstallprompt', function(event) {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        return event.preventDefault();
      }
    });


    app.displayInstalledToast = function() {
        // Check to make sure caching is actually enabled—it won't be in the dev environment.
        if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
            Polymer.dom(document).querySelector('#caching-complete').show();
        }
    };

    app.displayToast = function(msg) {
        var toast = Polymer.dom(document).querySelector('#toast');
        toast.text = msg;
        toast.show();
    };

    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function() {
        console.log('Webdrop is ready to rock!');
        app.conn = document.querySelector('connection-wrapper');
    });

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered

    });

    app._showAbout=function(){
        document.querySelector('#pages').select(0);
    };
})(document);
