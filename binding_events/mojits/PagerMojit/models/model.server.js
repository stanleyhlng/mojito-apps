YUI.add('PagerMojitModel', function(Y,NAME) {
    /**
     * The PagerMojitModel module.
     * @module PagerMojitModel
     */
    /**
     * Constructor for the Model class.
     * @class Model
     * @constructor
     */
    Y.mojito.models.PagerMojit = {
        init: function(config) {
            this.config = config;
        },
        getData: function(query, start, count, callback) {
            var q = null;
            // Get Flickr API key: http://www.flickr.com/services/api/keys/apply/
            var API_KEY = "9cc79c8bf1942c683b0d4e30b838ee9c";
            start = parseInt(start) || 0;
            count = parseInt(count) || 10;
            q = 'select * from flickr.photos.search(' + start + ',' + count + ')  where text="%' + query + '%" and api_key="' + API_KEY+'"';
            Y.YQL(q, function(rawData) {
                if (!rawData.query.results) {
                    callback([]);
                    return;
                }
                var rawImages = rawData.query.results.photo, rawImage = null,images = [], image = null, i = 0;
                for (; i<rawImages.length; i++) {
                    rawImage = rawImages[i];
                    image = {
                        title: rawImage.title,
                        location: 'http://farm' + rawImage.farm + '.static.flickr.com/' + rawImage.server + '/' + rawImage.id + '_' + rawImage.secret + '.jpg',
                        farm: rawImage.farm,
                        server: rawImage.server,
                        image_id: rawImage.id,
                        secret: rawImage.secret
                    };
                    if (!image.title) {
                        image.title = "Generic Title: " + query;
                    }
                    images.push(image);
                }
                callback(images);
            });
        }
    };

}, '0.0.1', {requires: ['yql']});
