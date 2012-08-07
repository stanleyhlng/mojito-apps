/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('PagerMojitBinderIndex', function(Y, NAME) {

/**
 * The PagerMojitBinderIndex module.
 *
 * @module PagerMojitBinderIndex
 */

    /**
     * Constructor for the PagerMojitBinderIndex class.
     *
     * @class PagerMojitBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var thatNode = node;
            Y.log('NODE: ' + Y.dump(this.node));
            
            // define the action when user click on prev/next
            var flipper = function(event) {
                var target = event.target;
                // get the link to the page
                var page = parsePage(target.get('href'));
                Y.log('PAGE: ' + page);
                var updateDOM = function(markup) {
                    thatNode.set('innerHTML', markup);
                    thatNode.all('#nav a').on('click', flipper, this);
                    thatNode.all('#master ul li a').on('mouseover', showOverlay, this);
                    thatNode.all('#master ul li a').on('mouseout', showOverlay, this);
                };
                this.mojitProxy.invoke('index',
                    {
                    params: {page: page}
                    }, updateDOM
                );
            };
          
            var showOverlay = function(event) {
                var target = event.target;
                var href = target.get('href');
                var imageId = parseImageId(href);
                if (target.hasClass('overlayed')) {
                    target.removeClass('overlayed');
                    thatNode.one('#display').setContent('');
                } else {
                    Y.log('HREF: ' + href);
                    Y.log('IMAGE ID: ' + imageId);
                    target.addClass('overlayed');
                    // Query for the image metadata
                    var query = 'select * from flickr.photos.info where photo_id="' + imageId + '"';
                    thatNode.one('#display').setContent('Loading ...');
                    Y.YQL(query, function(raw) {
                        if (!raw.query.results.photo) {
                            Y.log('No results found for photoId: ' + imageId);
                            return;
                        }
                        var props = raw.query.results.photo;
                        var snippet = '<ul style="list-style-type: square;">';
                        for (var key in props) {
                            if (typeof(props[key]) == 'object') {
                                continue;
                            }
                            snippet += '<li>' + key + ': ' + props[key] + '</li>';
                        }
                        snippet += '</ul>';
                        thatNode.one('#display').setContent(snippet);
                    });
                }
          };
          // Bind all the image links to showOverlay
          thatNode.all('#master ul li a').on('mouseover', showOverlay, this);
          thatNode.all('#master ul li a').on('mouseout', showOverlay, this);
          // Bind the prev + next links to flipper
          thatNode.all('#nav a').on('click', flipper, this);
        }

    };
  function parseImageId(link) {
    var matches = link.match(/com\/(\d+)\/(\d+)_([0-9a-z]+)\.jpg$/);
    return matches[2];
  }
  function parsePage(link) {
    var matches = link.match(/page=(\d+)/);
    return matches[1];
  }
}, '0.0.1', {requires: ['yql', 'io', 'dump', 'mojito-client']});
