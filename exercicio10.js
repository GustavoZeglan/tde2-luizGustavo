function fatorial(num) {

    if (num <= 2) {
        return num * 1;
    }

    return num * fatorial(num-1);

}

console.log(fatorial(4));