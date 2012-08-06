/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('FramedMojit', function(Y, NAME) {

/**
 * The FramedMojit module.
 *
 * @module FramedMojit
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
          var data = {
            title: "Framed Assets",
            colors: [
              {id: "green", rgb: "#616536"},
              {id: "brown", rgb: "#593E1A"},
              {id: "grey",  rgb: "#777B88"},
              {id: "blue",  rgb: "#3D72A4"},
              {id: "red",  rgb: "#990033"}
            ]
          };
          ac.done(data);
        }

    };

}, '0.0.1', {requires: ['mojito', 'FramedMojitModelFoo']});
