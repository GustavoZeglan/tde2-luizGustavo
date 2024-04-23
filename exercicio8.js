function menorNumero(num1, num2, num3) {
    let arr = [num1, num2, num3];

    let aux = Number.POSITIVE_INFINITY;
    for (const num of arr) {
        if (num < aux) {
            aux = num;
        }
    }

    return aux;
}

console.log(menorNumero(7,1,10));