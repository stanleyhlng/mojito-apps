/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('i18nMojit', function(Y, NAME) {

/**
 * The i18nMojit module.
 *
 * @module i18nMojit
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
          // Default.
          ac.done(
            {
              title: ac.intl.lang("TITLE"),
              today: ac.intl.formatDate(new Date())
            }
          );        
        }

    };

}, '0.0.1', {requires: ['mojito-intl-addon', 'i18nMojitModelFoo']});
