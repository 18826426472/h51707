;(function($){
var carlists = [];
carlists=cookie.get('carlists');
console.log(carlists);
console.log(carlists.length)

var $addcarf=$('.addcarf')




var params = location.search;//'?id=g001'
    params = params.slice(1);
    // console.log(params);

    // 拆分成数组
    params = params.split('&');

    // 遍历数组，还原成对象
    var data = {};
    params.forEach(function(item){
      var arr = item.split('=');
      // data[arr[0]] = decodeURI(arr[1]);
      data[arr[0]] =arr[1];
    });
    // console.log(data['data-id']);
   var shangping={};
  $.getJSON('http://localhost:1707/mailegou/src/api/data/goodslist.json',fbs);
 function fbs(a){

      a.map(function(item){
        if(item['id']==data['data-id']){
          shangping=item;
          
          return;
        }
      })
        var $img=$('.fimg')
          $img.attr({'src':shangping['imgurl']})
$addcarf.on('click',function(){


  //       //判断carlist中是否存在相同商品
  //       //判断循环是否跑完
  
        for(var i=0;i<carlists.length;i++){
     
          if(carlists[i].guid === data['data-id']){
            break;
          }
        }

        if(i===carlists.length){
          //不存在：创建对象，并且数量为1
          var goods = {
            guid: data['data-id'],
            imgurl:shangping['imgurl'],
            name:'car',
            price:990,
            qty:1
          }
           // carlists+=' ';
           // carlists.split(' ');
           // carlists=carlists[0];
          console.log(carlists,goods);
          carlists.push(goods);
          
        }else{
          //存在：数量+1
          carlists[i].qty++;
        }


        // 写入cookie
        document.cookie = 'carlists=' + JSON.stringify(carlists);
    //   }
    // }







})
     
    
 
        
}   





  
var $gds=$('.main-cl .gds');
$gds.gdsZoom();
var bb=$('.smallList img');

$('.smallList img').on('mouseenter',function(){
       
             $gds.find('img').attr({
                    'src':this.src,
                    'data-big':$(this).attr('data-big')||this.src
                })

            })

var $daipei=$('#dp .daipei');
    var $ul=$daipei.next();
   var $price=$('#dp .dapeiR .price');
   var $save=$('#dp .dapeiR .save');
$daipei.on('click','li',function(){
   var j=$(this).index();
    
   if(j==1){
   
    $ul.find('li').eq(j).show().nextAll().hide().find(':checkbox').prop('checked',false);
   }
   if(j==0){
    $ul.find('li').show();
   }
   if(j==2){
     $ul.find('li').find(':checkbox').prop('checked',false);
      $ul.find('li').eq(j-1).hide().nextAll().show();
     
   }
   var $checkbox=$ul.find(':checked');
   var $gs=$('#dp .dapeiR .gs');
   $gs.html( $checkbox.length);
   xx();

})
 $ul.on('click','input',function(){

    xx();
 // var $checkbox=$ul.find(':checked');
  
 //    if($checkbox.length>0){
 //        var pri1=$ul.find('li').find('span').eq(0).html()*1;
 //        var pri2=$ul.find('li').find('span').eq(1).html()*1;
      
 //       $checkbox.each(function(index,item){
 //            var $pri1=$(item).next();
 //            var $pri2=$pri1.next();
 //            var $pri3=$pri1.html()*1;
 //            var $pri4=$pri2.html()*1;
 //            // console.log($pri1.html(),$pri2.html())
 //            pri1+=$pri3;pri2+=$pri4;
           
 //            $price.html(pri1);
 //             $save.html(pri2-pri1);

 //       })

 //    }if($checkbox.length==0){
 //        var pri1=$ul.find('li').find('span').eq(0).html()*1;
 //        var pri2=$ul.find('li').find('span').eq(1).html()*1;
 //        $price.html(pri1);
 //         $save.html(pri2-pri1);
 //       }
 //   var $gs=$('#dp .dapeiR .gs');
 //   $gs.html( $checkbox.length);


})

    function xx(){

 var $checkbox=$ul.find(':checked');
 
    if($checkbox.length>0){
        var pri1=$ul.find('li').find('span').eq(0).html()*1;
        var pri2=$ul.find('li').find('span').eq(1).html()*1;
      
       $checkbox.each(function(index,item){
            var $pri1=$(item).next();
            var $pri2=$pri1.next();
            var $pri3=$pri1.html()*1;
            var $pri4=$pri2.html()*1;
            // console.log($pri1.html(),$pri2.html())
            pri1+=$pri3;pri2+=$pri4;
           
            $price.html(pri1);
             $save.html(pri2-pri1);

       })

    }if($checkbox.length==0){
        var pri1=$ul.find('li').find('span').eq(0).html()*1;
        var pri2=$ul.find('li').find('span').eq(1).html()*1;
        $price.html(pri1);
         $save.html(pri2-pri1);
       }
   var $gs=$('#dp .dapeiR .gs');
   $gs.html( $checkbox.length);

        
    }

var $xpcxk=$('#jieshao .jieshao-l .xpcxk')
$.getJSON('http://localhost:1707/mailegou/src/api/data/goodslist.json',fb)
 function fb(a){

    $xpcxk.html(a.map(function(item){
        return `<li data-id=${item.id}><img src="src/../${item.imgurl}" alt="" /><p>${item.title}</p><span>짜${item.price}</span><br /></li>`
 }).join(''));

}
  var $allp=$('.jieshao-c .allp');
  var $alls=$('.jieshao-c .alls');
  var $allpj=$('.jieshao-c .allpj');
  var $allphoto=$('.jieshao-c .allphoto');
  var $sqpj=$('.jieshao-c .sqpj');
  var $jydh=$('.jydh')
  var $h33=$('.h33');
  $allp.on('click',function(){
    $allpj.show();
    $allphoto.hide();
  })
  $alls.on('click',function(){
    $allphoto.show();
    $allpj.hide();
  })
  $sqpj.on('click',function(){
   

    scrollTo(0,$h33.offset().top);
    $jydh.show();
  })
  $(window).scroll(function(){
  //   console.log(11111)
    var s=$(window).scrollTop();
   if(s>=($h33.offset().top)){
       $jydh.show();
     
  }
  if(s<=1500){
    $jydh.hide();
  }
})
  // console.log($jydh.find('span').eq(0))
$jydh.find('span').eq(0).on('click',function(){
  scrollTo(0,$sqpj.offset().top);
})
})(jQuery);