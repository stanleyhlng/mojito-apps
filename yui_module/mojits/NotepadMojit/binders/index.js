/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('NotepadMojitBinderIndex', function(Y, NAME) {

/**
 * The NotepadMojitBinderIndex module.
 *
 * @module NotepadMojitBinderIndex
 */

    /**
     * Constructor for the NotepadMojitBinderIndex class.
     *
     * @class NotepadMojitBinderIndex
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
            // Based on http://yuilibrary.com/gallery/show/storage-lite
            var keyname = 'storage-lite-example', 
                notes = node.one('#notes');
            // Populate the textarea with the stored
            // note text on page load.
            notes.set('value', Y.StorageLite.getItem(keyname) || '');
            // Save the contents of the textarea after
            // each keystroke.
            notes.on('keyup', function() {
                Y.StorageLite.setItem(keyname, notes.get('value'));
            });
        }

    };

}, '0.0.1', {requires: ['gallery-storage-lite', 'mojito-client']});
