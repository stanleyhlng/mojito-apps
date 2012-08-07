/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ReceiverMojit', function(Y, NAME) {

/**
 * The ReceiverMojit module.
 *
 * @module ReceiverMojit
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
            ac.done({title: 'This is the receiver mojit'});
        },

        show: function(ac) {
            var url = ac.params.getFromMerged('url') || "http://farm1.static.flickr.com/21/35282840_8155ba1a22_o.jpg";
            ac.done({title: 'Image matching the link clicked on the left.', url: url});
        }

    };

}, '0.0.1', {requires: ['mojito', 'ReceiverMojitModelFoo']});
