/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('QueryMojit', function(Y, NAME) {

/**
 * The QueryMojit module.
 *
 * @module QueryMojit
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
            ac.done('Mojito is working.');
        },
    
        // Read from query string
        // e.g. GET /example1?foo=bar
        example1: function(actionContext) {
            var params = actionContext.params.getFromUrl(),
                paramsArray = [];
            Y.Object.each(params, function(param, key) {
                paramsArray.push({key: key, value: param});
            });
            actionContext.done(
                {
                title: "Show all query string parameters",
                params: paramsArray
                },
                {name: 'index'}
            );
        },

        // Read parameters from POST body
        // e.g. POST /example2 with POST body
        example2: function(actionContext) {
            var params = actionContext.params.getFromBody(),
                paramsArray = [];
            Y.Object.each(params, function(param, key) {
                paramsArray.push({key: key, value: param});
            });
            actionContext.done(
                {
                title: "Show all POST parameters",
                params: paramsArray
                },
                {name: 'index'}
            );
        },
    
        // Read parameters from routing system
        example3: function(actionContext) {
            var params = actionContext.params.getFromRoute(),
                paramsArray = [];
            Y.Object.each(params, function(param, key) {
                paramsArray.push({key: key, value: param});
            });
            actionContext.done(
                {
                title: "Show all ROUTING parameters (see routes.json)",
                params: paramsArray
                },
                { name: 'index'}
            );
        },

        // Read the merged map created by Mojito
        // of all input parameters from URL query
        // string (GET), the POST body, and any
        // routing parameters that may have been
        // attached during routing look up..
        // Priority of merging is : Route -> GET -> POST
        example4: function(actionContext) {
            var params = actionContext.params.getFromMerged(),
                paramsArray = [];
            Y.Object.each(params, function(param, key) {
                paramsArray.push({key: key, value: param});
            });
            actionContext.done(
                {
                title: "Show all ROUTING parameters (see routes.json)",
                params: paramsArray
                },
                {name: 'index'}
            );
        }
    };

}, '0.0.1', {requires: ['mojito', 'QueryMojitModelFoo']});
