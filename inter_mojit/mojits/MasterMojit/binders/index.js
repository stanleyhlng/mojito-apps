/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MasterMojitBinderIndex', function(Y, NAME) {

/**
 * The MasterMojitBinderIndex module.
 *
 * @module MasterMojitBinderIndex
 */

    /**
     * Constructor for the MasterMojitBinderIndex class.
     *
     * @class MasterMojitBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            var mp = this.mp = this.mojitProxy = mojitProxy;
            Y.log("mojitProxy.getChildren(): ");
            Y.log("Entering MasterMojitBinderIndex");
            this.mojitProxy.listen('fire-link', function(payload) {
                var c = mp.getChildren();
                var receiverID = c["receiver"].viewId;
                Y.log('intercepted fire-link event: ' + payload.data.url, 'info', NAME);
                mojitProxy.broadcast('broadcast-link', {url: payload.data.url},{ target: {viewId:receiverID }});
                Y.log('broadcasted event to child mojit: ' + payload.data.url, 'info', NAME);
            });
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            this.node = node;
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
