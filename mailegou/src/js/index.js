;(function($){

   var $gg=$('#header .gg span');
   $gg.on('click',function(){
   $gg.parent().hide();

   });
  var $mygou=$('#header .fr .mygou')
   $mygou.on('mouseenter',function(){
        $mygou.find('ul').show().animate({height:200},300);
        // .animate(height:200)
   }).on('mouseleave',function(){
        $mygou.find('ul').animate({height:31},200,function(){
             $mygou.find('ul').hide()
        });
   })
   var $dht=$('#header .dht')
  
   $dht.on('mouseenter','li',function(){
      $(this).stop().animate({paddingLeft:20,paddingRight:0})
    
   }).on('mouseleave','li',function(){
       $(this).stop().animate({paddingLeft:0,paddingRight:0})
   })
   var $ydt=$('.hfooterc .ydt')
    var $ydl=$('.hfooterc ul')
      var lefts=$ydt.offset().left;
     console.log(lefts);
   $ydl.on('mouseenter','li',function(){
        var left=$(this).offset().left-200;
       
        $ydt.stop().animate({left:left});
   }).on('mouseleave','li',function(){
      $ydt.stop().animate({left:15});
   })

})(jQuery);