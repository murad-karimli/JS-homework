//11. union adlı funksiya yazın. Funksiya iki array i parametr kimi qəbul etməli və
//onların birləşməsini yeni array olaraq qaytarmalıdır:
function union(a = [], b = []) {
    let newArr = [];
    for (element in a) {
        newArr.push(a[element])
    }
    for (element in b) {
        newArr.push(b[element]);
    }
    return newArr;
}
