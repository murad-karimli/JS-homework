//10. flat2D adlı funksiya yazın. Funksiya bir ədəd iki ölçülü array i parametr kimi
//qəbul etməli və bir ölçülü yeni bir array qaytarmalıdır:
function flat2d(a = [[]]) {
    let newArr = [];
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a[i].length; j++) {
            newArr.push(a[i][j]);
        }
    }
    return newArr;
}