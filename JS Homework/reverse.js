//12. reverse adlı funksiya yazın. Funksiya bir ədəd array i parametr kimi qəbul etməli
//və onun tərsini yeni bir array kimi qaytarmalıdır:
function reverse(a = []) {
    let arr = []
    for (let i = a.length - 1; i >= 0; i--) {
        arr.push(a[i]);
    }
    return arr;
}