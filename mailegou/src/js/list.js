;(function($){

$(window).scroll(function(){
    var s=$(window).scrollTop();
    if(s>400){
        var $fixes=$('.fixes');
        $fixes.show();
        var aa=1;
        clearInterval(times)
        var times=setInterval(function(){
           if(aa>=1.4){
            clearInterval(times)
             $fixes.css({'transform':'scale(1.4)'})
           }
            $fixes.css({'transform':'scale('+aa+')'})
           aa+=0.1;
        })
        // animate({width:100}){'transform':'scale(3)'

    }
    if(s<200){
        // clearInterval(times)
        var $fixes=$('.fixes')
        // var aa=1.8;
        //  var times=setInterval(function(){
        //     $fixes.css({'transform':'scale('+aa+')'})
        //    if(aa<=1){
        //     clearInterval(times)
        //      $fixes.css({'transform':'scale(1)'})
             $fixes.hide().css({'transform':'scale(1)'});
        //    }
        //    aa+=0.1;
        // })
        // $fixes.stop().animate({'transform':'scale(3)'},300,function(){
        //      $fixes.hide();
        // });
     

    }
    });
 var $mainUL=$('#main ul');

 $.getJSON('http://localhost:1707/mailegou/src/api/data/goodslist.json',fb)
 function fb(a){

    $mainUL.html(a.map(function(item){
        return `<li data-id=${item.id}><img src="src/../${item.imgurl}" alt="" /><p>${item.title}</p><span>¥${item.price}</span><br /><button>加入购物车</button></li>`
 }).join(''));

}
$mainUL.on('click','li',function(){
    var params = '?';
        console.log()
           
     params += 'data-id' + '=' + $(this).attr('data-id');
     // encodeURI(data[attr]) 
            
            // alert(params)

            // 删除多余的&
           
            

            // 跳转页面
            location.href = 'http://localhost:1707/mailegou/src/html/goodlist.html' + params



})


})(jQuery);