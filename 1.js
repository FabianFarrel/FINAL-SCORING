function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function* generatePrimes() {
    let num = 2;
    while (true) {
        if (isPrime(num)) yield num;
        num++;
    }
}

function drawSikuSiku(baseHeight) {
    if (baseHeight <= 0 || baseHeight >= 10) {
        console.log("Panjang alas/tinggi harus antara 1 hingga 9.");
        return;
    }

    const primeGenerator = generatePrimes();
    let currentPrime = primeGenerator.next().value;

    for (let i = 1; i <= baseHeight; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += currentPrime + " ";
            currentPrime = primeGenerator.next().value; 
        }
        console.log(row.trim());
    }
}

drawSikuSiku(7);
