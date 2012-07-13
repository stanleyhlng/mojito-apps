/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('PageGuideElementMojit', function(Y, NAME) {

/**
 * The PageGuideElementMojit module.
 *
 * @module PageGuideElementMojit
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
            ac.models.PageGuideElementMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: get_data(ac)
                });
            });
        }

    };


    function get_data(ac) {
        var data = {};
        
        var routes = {};
        routes['home'] = ac.url.make( 'home-page', 'index' );
        routes['about'] = ac.url.make( 'about-page', 'index' );
        routes['external'] = ac.url.make( 'external-page', 'index' );

        var path = ac.http.getRequest().path;
        if ( path === routes['home'] ) {

            data.items  = [];

            data.items.push({
                'markup': '<li data-id="header" data-options="tipLocation:top;tipAnimation:fade" data-text="Next: Logo" class="page-guide-popup"><div>This is <strong>HEADER</strong> section. </div></li>'
            });
            data.items.push({
                'markup': '<li data-id="logo" data-options="tipLocation:top;tipAnimation:fade" data-text="Next: Navigation" class="page-guide-popup"><div>This is <strong>LOGO</strong> module. </div></li>'
            });
            data.items.push({
                'markup': '<li data-id="navigation" data-options="tipLocation:top;tipAnimation:fade" data-text="Next: Content" class="page-guide-popup"><div>This is <strong>NAVIGATION</strong> module. </div></li>'
            });
            data.items.push({
                'markup': '<li data-id="content" data-options="tipLocation:top;tipAnimation:fade" data-text="Next: Breadcrumb" class="page-guide-popup"><div>This is <strong>CONTENT</strong> section. </div></li>'
            });
            data.items.push({
                'markup': '<li data-id="breadcrumb" data-options="tipLocation:top;tipAnimation:fade" data-text="Next: Sidebar" class="page-guide-popup"><div>This is <strong>BREADCRUMB</strong> module. </div></li>'
            });
            data.items.push({
                'markup': '<li data-id="sidebar" data-options="tipLocation:top;tipAnimation:fade" data-text="Next: Footer" class="page-guide-popup"><div>This is <strong>SIDEBAR</strong> section. </div></li>'
            });
            data.items.push({
                'markup': '<li data-id="footer" data-options="tipLocation:top;tipAnimation:fade" data-text="Close" class="page-guide-popup"><div>This is <strong>FOOTER</strong> section. </div></li>'
            });

        } else if ( path === routes['about'] ) {

            data.items  = [];

        }

        return data;
    }

}, '0.0.1', {requires: ['mojito', 'PageGuideElementMojitModelFoo']});
