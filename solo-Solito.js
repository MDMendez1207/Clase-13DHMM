console.log("Porque toy soliiito, no hay nadie aquí a mi laaaaado");

function factorial(n) {
    if (n > 1) {
        return n*factorial(n-1)
    }
    return 1;

}

console.log(factorial(7))
console.log(factorial(5))