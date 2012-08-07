/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('DeviceMojit', function(Y, NAME) {

/**
 * The DeviceMojit module.
 *
 * @module DeviceMojit
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
          var device = ac.context.device, css = '/static/DeviceMojit/assets/simple';
          if (device === 'iphone') {
            // Attach viewport meta-data
            ac.assets.addBlob('<meta name = "viewport" content = "width = device-width">', 'top');
            ac.assets.addBlob('<meta name = "viewport" content = "initial-scale = 1.0">', 'top');
            // Modify the style sheet name.
            css += '.' + device;
          }
          // Attach the style sheet.
          css += '.css';
          ac.assets.addCss(css, 'top');
          // Push data to the template.
          ac.done({
            title: "Device Assets",
            colors: [
              {id: "green", rgb: "#616536"},
              {id: "brown", rgb: "#593E1A"},
              {id: "grey",  rgb: "#777B88"},
              {id: "blue",  rgb: "#3D72A4"},
              {id: "red",   rgb: "#990033"}
            ]
          });
        }

    };

}, '0.0.1', {requires: ['mojito', 'DeviceMojitModelFoo']});
