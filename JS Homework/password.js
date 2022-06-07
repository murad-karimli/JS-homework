//19. generatePassword adlı funksiya yazın. Funksiya passwordLength adlı bir parametr
//götürməli və həmin uzunluqda şifrə generasiya etməlidir. Şifrə rəqəmlərdən,
//böyük və kiçik ingilis hərflərindən ibarət olmalıdır:
function generatePassword(count) {
    let passWord = "";
    const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 1; i <= count; i++) {
        passWord += characters[Math.floor((Math.random() * characters.length))]
    }
    return passWord;
}