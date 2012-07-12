(function(jQuery) {

    function main() 
    {
        console.log("toolbar.js");
        resize();
    }

    function getWindowHeight() 
    {
        var doc = document.documentElement;
        return self.innerHeight || (doc && doc.clientHeight) || document.body.clientHeight;
    }
        
    function getObjectHeight(obj) 
    {
        if (obj.offsetWidth) {
            return obj.offsetHeight;
        }
        return obj.clientHeight;
    }
        
    function resize() 
    {
        console.log("resize");
            
        var el = jQuery('#frame'); 
        if (el) 
        {
            el.hide();
            el.height( getWindowHeight() - getObjectHeight( document.getElementById('toolbar') ) );
            el.show();
            
            console.log( getWindowHeight() );
            console.log( getObjectHeight( document.getElementById('toolbar') ) );
        }
    }

    jQuery(document).ready(main);
    
    jQuery(window).resize(function() 
    {
        resize();
    });

}(jQuery));
