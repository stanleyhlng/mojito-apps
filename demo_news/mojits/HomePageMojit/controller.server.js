/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('HomePageMojit', function(Y, NAME) {

/**
 * The HomePageMojit module.
 *
 * @module HomePageMojit
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
            ac.models.HomePageMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                /*
                ac.assets.addCss('./index.css');
                ac.composite.done({
                    status: 'Mojito is working.',
                    data: data
                });
                */
                ac.composite.done();
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'HomePageMojitModelFoo']});
