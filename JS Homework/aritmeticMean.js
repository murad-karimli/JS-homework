//3.arithmeticMean adlı funksiya yazın. Funksiyanız ədədlərdən ibarət bir array i
//parametr kimi qəbul etməli və array in elementlərinin ədədi ortasını
//qaytarmalıdır:
function arithmeticMean() {
    let sumOfElements = 0
    for (let i = 0; i < arguments.length; i++) {
        sumOfElements += arguments[i];
    }
    return sumOfElements / arguments.length;
}