/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('GenURLMojit', function(Y, NAME) {

/**
 * The GenURLMojit module.
 *
 * @module GenURLMojit
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
            var url = ac.url.make('mymojit', 'contactus', '');
            ac.done({
                contactus_url: url
            });
        },

        contactus: function(ac) {
            //var currentTime = ac.intl.formatDate(new Date());
            var currentTime = ac.intl.formatDate(new Date().toUTCString());
            //var currentTime = new Date();
            ac.done({
                current_time: currentTime
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-intl-addon', 'GenURLMojitModelFoo']});
