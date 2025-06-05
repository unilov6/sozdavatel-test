<?php
function interestIncome($sum, $time, $percent) {
    return $sum * pow(1 + $percent / 100 / 12, $time);
}

?>