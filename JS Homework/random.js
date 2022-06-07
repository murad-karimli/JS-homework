//2. random adlı funksiya yazın. Funksiya lower və upper adlı iki parametr qəbul
//etməli və həmin iki ədəd arasında (hər ikisi daxil olmlaqla) ixtiyari bir natural
//ədəd qaytarmalıdır:
function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}