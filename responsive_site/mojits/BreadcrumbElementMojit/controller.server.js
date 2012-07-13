/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('BreadcrumbElementMojit', function(Y, NAME) {

/**
 * The BreadcrumbElementMojit module.
 *
 * @module BreadcrumbElementMojit
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
            ac.models.BreadcrumbElementMojitModelFoo.getData(function(err, data) {
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
            
            data.items = [];
            data.items.push({
                'markup': '<a href="' + routes['home'] + '">' + ac.intl.lang( "MENUITEM_HOME" ) + '</a>'
            });

        } else if ( path === routes['about'] ) {

            data.items = [];

            data.items.push({
                'markup': '<a href="' + routes['home'] + '">' + ac.intl.lang( 'MENUITEM_HOME' ) + '</a> / '
            });

            data.items.push({
                'markup': '<a href="' + routes['about'] + '">' + ac.intl.lang( 'MENUITEM_ABOUT' ) + '</a>'
            });

        }        

        return data;
    }


}, '0.0.1', {requires: ['mojito', 'mojito-intl-addon', 'BreadcrumbElementMojitModelFoo']});
