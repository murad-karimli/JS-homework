//14. filter adlı funksiya yazın. Funksiya bir array i və bir funksiyanı parametr kimi
//qəbul etməli və geriyə yeni bir array qaytarmalıdır. Verilmiş callback funksiyası
//arrayin hər bir elementini yoxlamalı və onun true qaytardığı bütün elementlər
//yeni arrayə daxil edilməlidir:
function filter(a = [], fun) {
    let newArr = [];
    fun = function isEven(x) {
        if (x % 2 === 0) {
            return true;
        }

        return false;
    }

    for (let i = 0; i < a.length; i++) {
        newArr.push(fun(a[i]))
    }
    return newArr;
}