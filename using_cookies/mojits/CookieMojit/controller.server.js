/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('CookieMojit', function(Y, NAME) {

/**
 * The CookieMojit module.
 *
 * @module CookieMojit
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
          var requestCookieValue = ac.cookie.get('request_cookie');
          // Or use this API to set a session cookie
          // with default properties set by Mojito
          ac.cookie.set("response_cookie", "Hello from the server!");
          ac.done(
            {
              title: "Cookie Demo",
              request_cookie_value: requestCookieValue
            }
          );
        }

    };

}, '0.0.1', {requires: ['mojito', 'CookieMojitModelFoo']});
