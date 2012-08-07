/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('FlickrMojit', function(Y, NAME) {

/**
 * The FlickrMojit module.
 *
 * @module FlickrMojit
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
          var q = ac.params.getFromUrl('q') || 'muppet',
          page = (ac.params.getFromUrl('page') || 0) / 1,
          count = (ac.params.getFromUrl('size') || 20) / 1,
          start = page * count;
          var model = ac.models.flickr;
          model.search (q, start, count, function(photos) {
          ac.done (
            {
              photos: photos,
              page: page,
              count: count,
              start: start
            });
          });
        }

    };

}, '0.0.1', {requires: ['mojito', 'FlickrMojitModelFoo']});
