/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ScrollMojit', function(Y, NAME) {

/**
 * The ScrollMojit module.
 *
 * @module ScrollMojit
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
          // Populate Template
          ac.done({
            title: 'Scroll View',
            photos: [
              {
                url: 'http://farm5.static.flickr.com/4136/4802088086_c621e0b501.jpg',
                alt: 'Above The City II'
              },
              {
                url: 'http://farm5.static.flickr.com/4114/4801461321_1373a0ef89.jpg',
                alt: 'Walls and Canyon'
              },
              {
                url: 'http://farm5.static.flickr.com/4100/4801614015_4303e8eaea.jpg',
                alt: 'Stairs Using In Situ Stone'
              },
              {
                url: 'http://farm5.static.flickr.com/4076/4801368583_854e8c0ef3.jpg',
                alt: 'Tree Silhouette'
              }
            ]
          });
        }

    };

}, '0.0.1', {requires: ['mojito', 'ScrollMojitModelFoo']});
