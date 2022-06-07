//16. some adlı funksiya yazın. Funksiya bir ədəd array i və bir funksiyanı parametr
//kimi qəbul etməli və geriyə Boolean tipli dəyər qaytarmalıdır. Verilmiş callback
//funksiyası arrayin hər bir elementini yoxlamalı və əgər ən azı bir element belə
//true nəticəsi versə, some funksiyasının cavabı true olmalıdır. Bütün digər
//hallarda some funksiyası false qaytarmalıdır:

function same(a = [], myFunc) {
    newArr = [];
    myFunc = function IsgraterThan20andEven(x) {
        if (x > 20 && x % 2 === 0) {
            return true;
        }
        return false;
    }

    for (let j = 0; j < a.length; j++) {
        newArr.push(myFunc(a[j]))
    }
    for (let k = 0; k < newArr.length; k++) {
        if (newArr[k] === true) {
            return true;
        }
    }
    return false;
}