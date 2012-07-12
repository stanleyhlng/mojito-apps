/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('NavigationElementMojit', function(Y, NAME) {

/**
 * The NavigationElementMojit module.
 *
 * @module NavigationElementMojit
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
            ac.models.NavigationElementMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }

                var path = ac.http.getRequest().url;
                console.log( path );

                ac.done({
                    status: 'Mojito is working.',
                    data: get_data(ac) 
                });
            });
        },

    };


    function  get_data(ac) {
        var data = {};

        var routes = {};
        routes['home'] = ac.url.make( 'home-page', 'index' );
        routes['about'] = ac.url.make( 'about-page', 'index' );
        routes['external'] = ac.url.make( 'external-page', 'index' );

        var path = ac.http.getRequest().url;
        if ( path === routes['external'] ) {

            // navigation: external
            data.current_path = path;

            data.items = [];
            
            data.items.push({
                'markup': '<li><a href="http://www.responsivewebdesign.co.uk/" target="_blank">http://www.responsivewebdesign.co.uk/</a></li>'
            });

            data.items.push({
                'markup': '<li><a href="/"><i class="icon-remove icon-white"></i></a></li>'
            });

        } else {

            // navigation: site 
            data.current_path = path;
            
            data.items = [];
            Object.keys( routes ).forEach( function( n ) {
                if ( path === routes[n] ) {
                    active = "active";
                } else {
                    active = "";
                }
                data.items.push({
                    'markup': '<li class="' + active + '"><a href="' + routes[n] + '">' + n + '</a></li>'
                });
            } );
        }

Y.log( data, "debug" );

        return data;

    }

}, '0.0.1', {requires: ['mojito', 'NavigationElementMojitModelFoo']});
