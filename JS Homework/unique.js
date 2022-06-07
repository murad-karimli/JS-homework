//8.unique adlı funksiya yazın. Funksiya bir ədəd array i parametr kim qəbul etməli,
//içərisində təkrar elementlər olmayan yeni bir array qaytarmalıdır: ?????????????????????

function unique(a = []) {
    let unique;
    let newA = [];
    for (let i = 0; i < a.length; i++) {
        unique = true;
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                unique = false;
                break
            }

        }
        if (unique) {
            newA.push(a[i]);
        }
    }

    return newA;
}