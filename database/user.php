<?php
// Permite requisições de qualquer origem
header("Access-Control-Allow-Origin: *");

// Permite os métodos de requisição que você está utilizando
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Permite os cabeçalhos que você precisa para a requisição
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require 'database.php';
    if($_SERVER['REQUEST_METHOD'] === "POST"){
      $rawPostData = file_get_contents('php://input');
      $postData = json_decode($rawPostData, true);

      if($postData){
        $nome = $postData['nome'];
        $sobrenome = $postData['sobrenome'];
        $email = $postData['email'];
        $senha = $postData['senha'];

        $query = "INSERT INTO users (nome, sobrenome, email, senha) VALUES ('$nome','$sobrenome','$email','$senha')";

        if(mysqli_query($conn, $query)){
                 echo "data inserted succesfully";

      }
    }
}
?>