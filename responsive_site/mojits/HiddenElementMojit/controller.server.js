/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('HiddenElementMojit', function(Y, NAME) {

/**
 * The HiddenElementMojit module.
 *
 * @module HiddenElementMojit
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
            ac.models.HiddenElementMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                /*
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
                */
                ac.composite.done();
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'HiddenElementMojitModelFoo']});
