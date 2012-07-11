/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('HelloWorldMojit-tests', function(Y) {

    var suite = new YUITest.TestSuite('HelloWorldMojit-tests'),
        controller = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'HelloWorldMojit user tests',
        
        setUp: function() {
            controller = Y.mojito.controllers.HelloWorldMojit;
        },
        tearDown: function() {
            controller = null;
        },
        
        'test mojit': function() {
            var ac,
                modelData,
                assetsResults,
                doneResults;
            modelData = { x:'y' };
            ac = {
                assets: {
                    addCss: function(css) {
                        assetsResults = css;
                    }
                },
                models: {
                    HelloWorldMojitModelFoo: {
                        getData: function(cb) {
                            cb(null, modelData);
                        }
                    }
                },
                done: function(data) {
                    doneResults = data;
                }
            };

            A.isNotNull(controller);
            A.isFunction(controller.index);
            controller.index(ac);
            A.areSame('./index.css', assetsResults);
            A.isObject(doneResults);
            A.areSame('Mojito is working.', doneResults.status);
            A.areSame('{"x":"y"}', doneResults.data);

        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'HelloWorldMojit']});
