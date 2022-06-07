//7.includes adlı funksiya yazın. Funksiya bir ədəd array və bir ədəd axtarış üçün
//dəyər qəbul etməlidir. Əgər həmin dəyər array in içərisində mövcuddursa, true
//əks halda false qaytarmalıdır:
function includes(array, num) {
    boolIncludes = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            boolIncludes = true;
            break;
        }
    }
    return boolIncludes;

}