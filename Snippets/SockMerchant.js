const ar = [6, 6, 2, 89, 50, 50, 20, 1, 89, 2, 89, 89, 7, 9, 7]
// n = number of socks in the pile
// ar= array with the colors of each sock

// crear variable con el length
const length = ar.length - 1
//crear total
let total = 0
// ordenar el arreglo
let arSorted = ar.sort()

console.log(arSorted)
for (let i = 0; i <= length; i++) {
    if (arSorted[i] === arSorted[i + 1]) {
        total++
        i = i + 1
    }
}

console.log(total)
