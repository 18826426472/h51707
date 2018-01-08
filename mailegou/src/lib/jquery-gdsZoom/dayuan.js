;(function($){
    $.fn.dy=function(options){
        var defaults={
            width:300,
            height:300,
            position:'right',
            gap:15
        }
        return this.each(function(){
            var opt=$.extend({},defaults,options);
            var $small=$(this);
            var $smallImg=$small.children('img');
            
        })
    }
})(jQuery);