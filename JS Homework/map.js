//13. map adlı funksiya yazın. Funksiya bir ədəd array i və bir ədəd funksiyanı
//parametr kimi qəbul etməli, funksiyanın nəticəsini arrayın hər bir elementinə
//tətbiq etməli və yeni bir array qaytarmalıdır:

function map(a = [], func) {

  let newarr = [];
  func =
    function IsPrime(a) {
      let flag = true;
      let m = a / 2;
      for (let i = 2; i <= m; i++) {
        if (a % i == 0) {
          flag = false;
          return false;
        }
      }
      if (flag) {
        return true;
      }
    }

  for (let j = 0; j < a.length; j++) {
    newarr.push(func(a[j]))
  }

  return newarr
}