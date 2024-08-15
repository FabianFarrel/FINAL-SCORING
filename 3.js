function recursiveBubbleSort(arr, n) {
    if (n === 1) return;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    recursiveBubbleSort(arr, n - 1);
}

function sortArray(data) {
    const n = data.length;
    recursiveBubbleSort(data, n);
    const ganjil = [];
    const genap = [];
    for (let i = 0; i < n; i++) {
        if (data[i] % 2 === 0) {
            genap.push(data[i]);
        } else {
            ganjil.push(data[i]);
        }
    }
    return {
        sortedArray: data,
        ganjil: ganjil,
        genap: genap
    };
}

const result = sortArray([2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11]);

console.log("Array:", result.sortedArray.join(", "));
console.log("Ganjil:", result.ganjil.join(", "));
console.log("Genap:", result.genap.join(", "));
