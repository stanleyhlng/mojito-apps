/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('FrameMojit', function(Y, NAME) {

/**
 * The FrameMojit module.
 *
 * @module FrameMojit
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
            ac.composite.done({template: {title: "Parent Frame"}});
        }

    };

}, '0.0.1', {requires: ['mojito', 'FrameMojitModelFoo']});
