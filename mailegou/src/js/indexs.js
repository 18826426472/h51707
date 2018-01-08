;(function($){
    var $zdqul=$('#zdq .zdqul');
   
    var $banner=$('#banner').lxCarousel({
        imgs:['img/ban3.jpg','img/ban2.jpg','img/ban3.jpg','img/ban4.jpg'],buttons:true,width:800,height:474
    })
    $.getJSON('http://localhost:1707/mailegou/src/api/data/goodslist.json',fb)
 function fb(a){

    $zdqul.html(a.map(function(item){
        return `<li data-id=${item.id}><img src="src/${item.imgurl}" alt="" /><p>${item.title}</p><span>¥${item.price}</span><br /><button>加入购物车</button></li>`
 }).join(''));
    var lileft=$zdqul.find('li').eq(0).width();
    lileft=lileft*$zdqul.find('li').length;
   
    $zdqul.css({width:2500});

    var $tm=$('#tm');
   
        $tm.html(a.map(function(item){
            return `<li data-id=${item.id}><div class='tmm'><img src="src/${item.imgurl}" alt="" /></div><p>${item.title}</p><span>¥${item.price}</span><br /><button>加入购物车</button></li>`
 }).join(''));

}   
// #CB3E25
var $btn1=$('.qhbox .btn1');
var $btn2=$('.qhbox .btn2');
var $ppu=$('.pp u');
$btn2.on('click',function(){
    var val=$ppu.html();
    
    var Uleft=-1*val*1000;
   $ppu.html( val*1+1);
   if(val*1>=3){
   $ppu.html(1);
     $zdqul.css({left:0});
     return;
   }

   // var LLeft=$zdqul.css('left');
   // console.log(LLeft);
   $zdqul.css({left:Uleft});

})
  
// $btn1.on('click',function(){
//     console.log(1111)
//     var val=$ppu.html();
//    $ppu.html( val*1-1);
//    if(val*1<=1){
//     console.log(val)
//    $ppu.html(3);
//    }

// })
$btn1.on('click',function(){
    var val=$ppu.html();

    var Uleft=-1*(val-2)*1000;
   
   $ppu.html( val*1-1);
   if(val*1<=1){
   $ppu.html(3);
    Uleft=-2*1000;
     $zdqul.css({left:Uleft});

   }

   // var LLeft=$zdqul.css('left');
   // console.log(LLeft);
   $zdqul.css({left:Uleft});

})

var $jss=$('#zdq .jss');
$jss.on('click','li',function(){

    $(this).addClass('bgc').siblings().removeClass('bgc');
    var idx=$(this).index()
    var $qg=$('.qhbox ul')
    $qg.eq(idx).show().siblings().hide();
})

var $tm=$('#tm');
$tm.on('mouseenter','img',function(){
    $(this).animate({width:180})

}).on('mouseleave','img',function(){
    $(this).animate({width:160})

})

    var $littlerbanner=$('.littleban');
    console.log($littlerbanner);
    $littlerbanner.lxCar({
        imgs:['img/1f.jpg','img/1f.jpg','img/1f.jpg','img/1f.jpg'],buttons:false,width:100,height:50
    });


})(jQuery);


