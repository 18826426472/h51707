;require(['config'],function(){
    require(['jquery'],function($){
        
;(function($){
var $telephone=$('#telephone');
$telephone.on('blur',function(){
    var tele=$telephone.val();
    tele=tele.replace(/^\s*|\s$/g,"");
   var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
    if(reg.test(tele)){
        console.log('666')
    }else{
        alert('手机号码格式不对');
    }  ; //true
})

   var $password=$('#pasword');

   var $password0=$password.prev().prev();

$password.on('blur',function(){
    var val1=$password.val();
    var val2=$password0.val();

    if(val1!=val2){
        alert('两次输入密码不对');
    }
    if(val1==val2){
    // console.log(1111111111111);
     var tele=$telephone.val();
      $.getJSON('http://localhost:1707/mailegou/src/api/login.php',{id:tele,password:val2},function(a){
        console.log(a)
        if(a=='ok1'){
            alert('恭喜注册成功');
        }
        if(a=='ok'){
            alert('成功登陆');
        }
        if(a=='fails'){
            alert('密码不正确');
        }
      });
            
    }
})









})($);


    })
});
















