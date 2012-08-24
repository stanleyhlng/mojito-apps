/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ListingElementMojit', function(Y, NAME) {

/**
 * The ListingElementMojit module.
 *
 * @module ListingElementMojit
 */

	var util = require('util');

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
/*
            ac.models.ListingElementMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'ListingElementMojit: Mojito is working.',
                    data: util.inspect(data, true, null)
                });
            });
*/
			var data = {},
				start = 0,
				count = 5,
				options = {
					list_id: ac.app.config.custom.services.yql.params.list_id.stories
				},
				debug = {
					device: ac.context.device,
					lang: ac.context.lang
				};

			ac.models.ListingElementMojitModelYQL.getStories(options, start, count, function(err, data) { 
				if (err) {
					ac.error(err);
					return;
				}
				ac.done({
					status: 'ListingElementMojit: Mojito is working.',
					options: util.inspect(options, true, null),
					debug: util.inspect(debug, true, null),
					data: util.inspect(data, true, null)
				});
			});
        }

    };

}, '0.0.1', {requires: ['mojito', 'ListingElementMojitModelYQL']});
