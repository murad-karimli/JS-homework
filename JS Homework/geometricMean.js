//4.geometricMean adlı funksiya yazın. Funksiyanız ədədlərdən ibarət bir array i
//parametr kimi qəbul etməli və array in elementlərinin həndəsi ortasını
//qaytarmalıdır:

function geometricMean() {
    let multiplicationOfElements = 1;
    for (let i = 0; i < arguments.length; i++) {
        multiplicationOfElements *= arguments[i];
    }
    return Math.pow(multiplicationOfElements, 1 / arguments.length);
}