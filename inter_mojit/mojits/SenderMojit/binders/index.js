/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('SenderMojitBinderIndex', function(Y, NAME) {

/**
 * The SenderMojitBinderIndex module.
 *
 * @module SenderMojitBinderIndex
 */

    /**
     * Constructor for the SenderMojitBinderIndex class.
     *
     * @class SenderMojitBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mp = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
          var mp = this.mp;
          this.node = node;
          // capture all events on "ul li a"
          this.node.all('ul li a').on('click', function(evt) {
            var url = evt.currentTarget.get('href');
            evt.halt();
            Y.log('Triggering fire-link event: ' + url, 'info', NAME);
            mp.broadcast('fire-link', {url: url});
          });
        }

    };

}, '0.0.1', {requires: ['node', 'mojito-client']});
