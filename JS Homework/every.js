//17. every adlı funksiya yazın. Funksiya bir ədəd array i və bir funksiyanı parametr
//kimi qəbul etməli və geriyə Boolean tipli dəyər qaytarmalıdır. Verilmiş callback
//funksiyası arrayin hər bir elementini yoxlamalı və əgər bütün elementlər true
//nəticəsi versə, every funksiyasının nəticəsi true olmlalıdır. Qalan bütün hallarda
//every funksiyası false qaytarmalıdır:
function every(a = [], myFunc) {
    let newArr = [];
    myFunc = function IsCapitalize(x) {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (let i = 0; i < alphabet.length; i++) {
            if (x[0] === alphabet[i]) {
                return true;
            }
        }
        return false;
    }
    for (let j = 0; j < a.length; j++) {
        newArr.push(myFunc(a[j]));
    }
    for (let k = 0; k < newArr.length; k++) {
        if (!newArr[k] === true) {
            return false
        }
    }
    return true;
}