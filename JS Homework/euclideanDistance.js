//5.euclideanDistance adlı funksiya yazın. Funksiya iki vektoru parametr kimi qəbul
//etməli və onlar arasındakı Evklid məsafəsini qaytarmalıdır. Vektor dedikdə
//içərisində iki element olan array dən söhbət gedir. Arrayin birinci elementi x
//ikinci elementi isə y i bildirir: [x, y] .

function euclideanDistance(p1, p2, q1, q2) {
    return Math.pow(Math.pow(Math.abs(p2 - q2), 2) + Math.pow(Math.abs(p1 - q1), 2), 1 / 2);
}