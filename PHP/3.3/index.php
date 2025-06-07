<?php
$result = '';

if (isset($_POST['num1'], $_POST['num2'], $_POST['operator'])) {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operator = $_POST['operator'];

    if ($operator == '+') {
        $result = $num1 + $num2;
    } elseif ($operator == '-') {
        $result = $num1 - $num2; 
    } elseif ($operator == '*') {
        $result = $num1 * $num2; 
    } elseif ($operator == '/') {
        if ($num2 == 0) {
            echo "Деление на 0 запрещено";
        } else {
            $result = $num1 / $num2; 
        }
    }

    if ($result !== '') {
        echo "<p>Результат: $result</p>";
    }
}

require('index.html');
?>