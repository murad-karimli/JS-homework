//18. reduce adlı funksiya yazın. Funksiya bir ədəd array və biri ədəd callback
//funksiyasını parametr kimi götürməli və geriyə yeni dəyər qaytarmalıdır. reduce
//funksiyasının necə işləməli olduğunu öyrənmək üçün reduce funksiyasının
//dokumentasiyasını oxuyun.

function reduce(arr = [], initial, myFunc) {
    let sum = 0;
    let result = 0;
    myFunc = function red(acc, curr) {
        return acc + curr;
    }

    for (let i = 0; i < arr.length; i++) {
        result += myFunc(sum, arr[i])
    }
    return result + initial;
}
