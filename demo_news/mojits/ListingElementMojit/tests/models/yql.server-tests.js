/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('ListingElementMojitModelYQL-tests', function(Y, NAME) {
    
    var suite = new YUITest.TestSuite(NAME),
        model = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'ListingElementMojitModelYQL user tests',
        
        setUp: function() {
            model = Y.mojito.models.ListingElementMojitModelYQL;
        },
        tearDown: function() {
            model = null;
        },
        
        'test mojit model': function() {
            var called = false;
            A.isNotNull(model);
            A.isFunction(model.getData);
            model.getData(function(err, data) {
                called = true;
                A.isTrue(!err);
                A.isObject(data);
                A.areSame('data', data.some);
            });
            A.isTrue(called);
        },
        
        'test mojit model getStories list_id': function() {
            var called = false;
            A.isNotNull(model);
            A.isFunction(model.getStories);
            model.getStories({'list_id':'53b6c5bd-3a0e-426b-8163-492f4e038259'}, 0, 5, function(err, data) {
                console.log(err, data);

                called = true; 
                A.isTrue(!err);
                A.isObject(data);
            });

            this.wait(function() {
                A.isTrue(called);
            }, 3000);
        },

        'test mojito model getStories ids': function() {
            var called = false;
            A.isNotNull(model);
            A.isFunction(model.getStory);
            model.getStory({'ids':'da68b335-ee94-3a18-8ebe-6cb3c7b7cc45'}, function(err, data) {
                console.log(err, data);

                called = true; 
                A.isTrue(!err);
                A.isObject(data);
            });

            this.wait(function() {
                A.isTrue(called);
            }, 3000);
        }

    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'ListingElementMojitModelYQL']});
