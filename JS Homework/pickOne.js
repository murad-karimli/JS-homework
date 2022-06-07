//6.pickOne adlı funksiya yazın. Funksiya bir ədəd array qəbul etməli və içərisindən
//ixtiyari bir elementi qaytarmalıdır:
function pickOne() {
    return arguments[Math.floor(Math.random() * arguments.length)];
}