//1.sum adlı funksiya yazın. Funksiya ədədlərdən ibarət bir array i parametr kimi
//qəbul etməli və array ın bütün elementlərinin cəmini qaytarmalıdır:
function sum() {
    let sumOfElements = 0
    for (let i = 0; i < arguments.length; i++) {
        sumOfElements += arguments[i];
    }
    return sumOfElements;
}