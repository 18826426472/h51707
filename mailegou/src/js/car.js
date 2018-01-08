;(function($){
var total=0;
var toqty=0;
var $tqty=$('.tqty');
var $totals=$('.totals')
var carlists = [];
carlists=cookie.get('carlists');

if(carlists.length>0){
var $ullls=$('.lbuls');

$ullls[0].innerHTML=carlists.map(function(item){
  
    total+=item.price*item.qty;
    var nprice=item.price*item.qty;
    // *${item.qty};
    toqty+=item.qty;
    return` <li data-id='${item.guid}'><input type="checkbox" checked /><img src="${item.imgurl}" alt="" /><span>颜色：三色</span>
    $ <span>${item.price}</span>
         <input type="number" value='${item.qty}'/>$ <span class='danjia'>${nprice}</span>
        <button class='sbtn' style='color:blue;'>删除</button></li> `



}).join('')

$totals.html(total);
$tqty.html(toqty);

}


    var $changebtn=$('.changebtn');
    var $lbul=$('.lbul');
    $.getJSON('http://localhost:1707/mailegou/src/api/data/goodslist.json',fb)
 function fb(a){

    $lbul[0].innerHTML=a.map(function(item){
        return `<li data-id=${item.id}><img src="${item.imgurl}" alt="" /><p>${item.title}</p><p>${item.star}</p><span>¥${item.price}</span><br /><span>${item.off}</span><br /><button >加入购物车</button></li>`
 }).join('');
}   
        var $lbul=$('.lbul');
        var $liss=$lbul.find('li');
    var i=1;var b='';
    $changebtn.on('click',function(){
        b=-1000*i;
        $lbul.animate({left:b},1000)
        var qty=parseInt($liss.length/5);
        console.log(b)
        if(b<=((qty-1)*-1000)){
            b=-qty*1000;
            console.log(0)
            return;
        }
       i++;
    })
 var $btn1=$('#bottom h4').next();
 var $btn2=$btn1.next();

    $btn2.on('click',function(){
      var $liss=$lbul.find('li');

        var left=$lbul.offset().left;
        var qty=parseInt($liss.length/5);
        console.log($liss.length)
        console.log(qty)
        if(left<=((qty-1)*-1000)){
        
            return;
        }
        left=left-1000;
         $lbul.animate({left:left},1000)

   })
$btn1.on('click',function(){
      var $liss=$lbul.find('li');

        var left=$lbul.offset().left;
        console.log(left)
        if(left>=100){
            $lbul.animate({left:0},1000)
            return;
        }
        left=left+1000;
         $lbul.animate({left:left},1000)

   })


// var $tqty=$('.tqty');
// var $totals=$('.totals')
// var $ullls=$('.lbuls');
var $sbtn=$('.lbuls .sbtn');

$sbtn.on('click',function(){
    

                var currentLi =$(this).parent();
                var guid =currentLi.attr('data-id');
                console.log(guid)
                for(var i=0;i<carlists.length;i++){
                    if(carlists[i].guid === guid){
                        carlists.splice(i,1);
                        break;
                    }
                }

                document.cookie = 'carlists=' + JSON.stringify(carlists);


               






   $(this).parent().remove();
    jstotal();
})
var $allch=$('.inp');

$allch.on('click',function(){
    $(this).toggleClass('selected');
    $ullls.find(':checkbox').prop('checked',!$(this).hasClass('selected'))
    
    jstotal();
})
var $danjia=$('.danjia')


$ullls.on('change',function(){

   $danjia.each(function(i,item){

     var p=$(item).prev().val();
     var q=$(item).prev().prev().html()*1;



    var currentLi =$(this).parent();
    var guid =currentLi.attr('data-id');
   
  for(var i=0;i<carlists.length;i++){
     if(carlists[i].guid === guid){
            if(p<=0){
                p=0;
                $(item).prev().val(0)
                 $(item).parent().find(':checkbox').prop('checked',false)
            }
            carlists[i].qty=p;
          
             }
     }

     document.cookie = 'carlists=' + JSON.stringify(carlists);






     if(p<=0){
        p=0;$(item).prev().val(0)
        $(item).parent().find(':checkbox').prop('checked',false)
     }
     $(item).html(p*q);



   })
   // var $checked=$ullls.find(':checked');
   // $checked.each(function(i,item){
   //      console.log($(item))

   // })
   jstotal();

});

function jstotal(){
    var qtys=0;
    var ttprice=0;
    var $checked=$ullls.find(':checked');
    if($checked){
        $checked.each(function(i,item){
            var a=$(item).parent().children().eq(3).html();
            var b=$(item).parent().children().eq(4).val();
            ttprice+=a*b;
            qtys+=b*1;
        })
    } 
    if($checked.length==0){
         $tqty.html(0);
         $totals.html(0);
         
    }
        $tqty.html(qtys);
         $totals.html(ttprice);
}
    var $qkg=$('#qkg');
    
$qkg.on('click',function(){
        $tqty.html(0);
         $totals.html(0);
         $ullls.html('')
            cookie.remove('carlists')
            // var now = new Date();
            // now.setDate(now.getDate()-10)
            // document.cookie = 'carlists=x;expires='+now.toUTCString();

})
})(jQuery);