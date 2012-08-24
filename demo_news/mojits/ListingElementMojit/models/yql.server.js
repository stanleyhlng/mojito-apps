YUI.add('ListingElementMojitModelYQL', function(Y, NAME) {

    var util = require('util');

	Y.mojito.models[NAME] = {

		init: function(config) {
			this.config = config;
		},

        getData: function(callback) {
            callback(null, {some: 'data'});
        },

		getStories: function(options, start, count, callback) {
            console.log("get_stories");

            // validate options
            if (null === options || typeof options !== "object" || 0 === Object.keys(options).length) {
                callback("invalid options", []);
                return;
            }

            // construct yql query
            start /= 1;
            count /= 1;

            var where = '';
            var sep = "";
            Object.keys(options).forEach(function(v) {
                where += sep + v + '=' + '"' + options[v] + '"';
                sep = '&';
            });

            var query = 'select * from media.content.ca.stories(' + (start || 0) + ', ' + (count || 0) + ') where ' + where + ';',
                params = {'env': 'store://LsGqh48XKLlUgOMMzQLRYw'},
                opts = {'base': ':/' + '/staging.media.query.yahoo.com/v1/public/yql?'};

            console.log("INFO", "query", query);
            console.log("INFO", "params", params);
            console.log("INFO", "opts", opts);
    
            Y.YQL(query, function(response) {
                console.log("INFO", "response", response);
                
                // validate response 
                if (null === response || 0 === response.query.count) {
                    callback("invalid response", []);
                    return;
                }

                // process data
                var items = [],
                    item = null;
                response.query.results.contents.forEach(function(data) {
                    //console.log(util.inspect(data, true, null));
                    item = data.content;
                    items.push(item);
                });
                
                callback(null, items);
                return;

            }, params, opts);
            
		}
	};

}, '0.0.1', {requires: ['yql']});
