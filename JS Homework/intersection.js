//9. intersection adlı funksiya yazın. Funksiya iki array i parametr kimi qəbul etməli
//və onların kəsişməsini yeni array olaraq qaytarmalıdır:

function intersection(a = [], b = []) {
    let inter = [];
    let same;
    for (let i = 0; i < a.length; i++) {
        same = false;
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                same = true;
                break;
            }
        }
        if (same) {
            inter.push(a[i]);
        }
    }
    return inter;
}
