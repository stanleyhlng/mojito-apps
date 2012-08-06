/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('myMojit', function(Y, NAME) {

/**
 * The myMojit module.
 *
 * @module myMojit
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
            ac.models.myMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },

        view_mu: function(ac) {
           ac.done({
            "title": "Mustache at work!",
            "view_engines": [
              {"name": "Handlebars"},
              {"name": "EJS"},
              {"name": "Jade"},
              {"name": "dust"},
              {"name": "underscore" }
            ],
            "ul": { "title": 'Here are some of the other available rendering engines:' },
          });       
        },

        view_hb: function(ac) {
          ac.done({
            "title": "Handlebars at work!",
            "view_engines": [ "Mustache","EJS","Jade", "dust","underscore" ],
            "ul": { "title": 'Here are some of the other available rendering engines:' }
          });
        }

    };

}, '0.0.1', {requires: ['mojito', 'myMojitModelFoo']});
