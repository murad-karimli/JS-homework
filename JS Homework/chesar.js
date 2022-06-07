//20. ceasarCipher adlı funksiya yazın. Funksiya bir ədəd string i və açar rəqəmi
//parametr kimi qəbul etməlidir. Verilən stringin ingilis hərflərindən ibarət bir cümlə
//olduğunu nəzərə alaraq, onu Sezar şifrəsi ilə şifrələyin və nəticəni başqa bir
//string kimi qaytarın.

function ceasarCipher(str, k) {
    let encrypted = "";
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let indexOfLetter;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (str[i] === alpha[j]) {
                encrypted += alpha[j + k];
            }
        }
    }
    return encrypted;

}