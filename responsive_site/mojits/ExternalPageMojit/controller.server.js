/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ExternalPageMojit', function(Y, NAME) {

/**
 * The ExternalPageMojit module.
 *
 * @module ExternalPageMojit
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
            ac.models.ExternalPageMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.composite.done();
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'ExternalPageMojitModelFoo']});
