/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('PagerMojit', function(Y, NAME) {

/**
 * The PagerMojit module.
 *
 * @module PagerMojit
 */
    var PAGE_SIZE = 10;

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
            var page = ac.params.getFromMerged('page');
            var start;
                page = parseInt(page) || 1;
            if ((!page) || (page<1)) {
                page = 1;
            }
            // Page param is 1 based, but the model is 0 based
            start = (page - 1) * PAGE_SIZE;

            var model = ac.models.PagerMojit;
            // Data is an array of images
            model.getData('mojito', start, PAGE_SIZE, function(data) {
                Y.log('DATA: ' + Y.dump(data));
                var theData = {
                    data: data, // images
                    hasLink: false,
                    prev: {
                        title: "prev" // opportunity to localize
                    },
                    next: {
                        link: createLink(ac, {page: page+1}),
                        title: "next"
                    },
                    query: 'mojito'
                };
                if (page > 1) {
                    theData.prev.link = createLink(ac, {page: page-1});
                    theData.hasLink = true;
                }
                ac.done(theData);
            });
        }
    };

    // Generate the link to the next page based on:
    // - mojit id
    // - action
    // - params
    function createLink(actionContext, params) {
        var mergedParams = Y.mojito.util.copy(actionContext.params.getFromMerged());
        for (var k in params) {
            mergedParams[k] = params[k];
        }
        return actionContext.url.make('framed', 'index', Y.QueryString.stringify(mergedParams));
    }

}, '0.0.1', {requires: ['mojito', 'dump', 'PagerMojitModelFoo']});
