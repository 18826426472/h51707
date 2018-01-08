<?php
    include 'connect.php';
    $userid = isset($_GET['id']) ? $_GET['id'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    // echo $userid;
    // $password = md5($password);

    $sql1="select * from idss where tel='$userid'";
    $result1=$conn->query($sql1);
    if($result1->num_rows<=0){
        // $password = md5($password);

        /*
            password_hash()     //对密码加密.
                * PASSWORD_DEFAULT：Bcrypt加密算法，字段超过60个字符长度，
                * PASSWORD_BCRYPT：字符串长度总为60。
            password_verify()    //验证已经加密的密码，检验其hash字串是否一致.
         */
        $password = password_hash($password,PASSWORD_DEFAULT);

        $sql = "insert into idss (tel,password) values('$userid','$password')";
    $result = $conn->query($sql);

        if ($result) {
            echo json_encode("ok1");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }





    }

if($result1->num_rows>0){

 $password = password_hash($password,PASSWORD_DEFAULT);
   $sql="select * from idss where tel='$userid' and password='$password'";
   $result=$conn->query($sql);

   if($result->num_rows>0){
    echo json_encode('ok');
   }else{
    echo json_encode('fails');
   }
   $result->free();
   $conn->close();
    
}

?>