//15. find adlı funksiya yazın. Funksiya bir ədəd array i və bir funksiyanı parametr
//kimi qəbul etməlidir. Verilmiş callback funksiyası arrayin hər bir elementini
//yoxlamalı və onun true qaytardığı ilk element find funksiyasını cavabı
//olmalıdır

function find(a = [], fun) {
    let newarr = [];
    fun = (x) => {
        return x % 3 === 0;
    };

    for (let i = 0; i < a.length; i++) {
        newarr.push(fun(a[i]));
    }
    return newarr;
}
