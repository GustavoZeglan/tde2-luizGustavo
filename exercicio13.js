function ehNegativoOuPositivo(saldo) {
    if(saldo < 0) {
        console.log("Número é negativo");
    } else if (saldo > 0) {
        console.log("Número é positivo");
    } else {
        console.log("Zero");
    }
}

ehNegativoOuPositivo(0)