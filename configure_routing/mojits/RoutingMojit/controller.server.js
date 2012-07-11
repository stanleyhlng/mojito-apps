/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('RoutingMojit', function(Y, NAME) {

/**
 * The RoutingMojit module.
 *
 * @module RoutingMojit
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
            ac.done( route_info(ac) );
        },

        show: function(ac) {
            ac.done( route_info(ac) ); 
        }

    };

    // Build object containing route information
    function route_info(ac) {
        var methods = "";
        var name = "";
        var action = ac.action;
        var path = ac.http.getRequest().url;
        if (path === "/" && action === "index") {
            name = ac.app.routes.root_route.name;
            Object.keys(ac.app.routes.root_route.verbs).forEach( function(n) {
                methods += n + ", ";
            });
        } else if (action === "index") {
            path = ac.app.routes.index_route.path;
            name = ac.app.routes.index_route.name;
            Object.keys(ac.app.routes.index_route.verbs).forEach( function(n) {
                methods += n + ", ";
            });
        } else if (action === "show") {
            path = ac.app.routes.show_route.path;
            name = ac.app.routes.show_route.name;
            Object.keys(ac.app.routes.show_route.verbs).forEach( function(n) {
                methods += n + ", ";
            });
        }
        return {
            "path": path,
            "name": name,
            "methods": methods.replace(/, $/, "")
        };
    };

}, '0.0.1', {requires: ['mojito', 'RoutingMojitModelFoo']});
