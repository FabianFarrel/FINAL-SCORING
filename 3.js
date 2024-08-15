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
    const odds = [];
    const evens = [];
    for (let i = 0; i < n; i++) {
        if (data[i] % 2 === 0) {
            evens.push(data[i]);
        } else {
            odds.push(data[i]);
        }
    }
    return {
        sortedArray: data,
        odds: odds,
        evens: evens
    };
}

const result = sortArray([2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11]);

console.log("Arrays:", result.sortedArray.join(", "));
console.log("Odd:", result.odds.join(", "));
console.log("Evens:", result.evens.join(", "));
