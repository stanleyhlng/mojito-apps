Mojito Application Demo : Yahoo! News
=====================================

## TODO
* Data
	* YQL 
		* Creates the YQL statement
			* MediaTopStory
				* story_list: select * from media.content.ca.stories where list_id="53b6c5bd-3a0e-426b-8163-492f4e038259"
				* story_details: select * from media.content.ca.stories where ids="3002a938-e0c7-37d9-8f9e-6f04e7f73870"
		* Call the YQL Web services
			* staging: http://y.ahoo.it/i5NvI