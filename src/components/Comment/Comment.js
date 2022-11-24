
let comment = []

let stars = [2, 3, 4, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 8, 8, 8, 8, 8,]
let suma = 0;

for (let i = 0; i < stars.length; i++) {
    suma = suma + stars[i]
}
let num = 0

if (suma === 0) {
    num = 0
    console.log(num)
}
else {
    num = (suma / stars.length)
    console.log(stars)
    console.log(suma)
    console.log(num)
}
let prom = Math.round(suma / stars.length)
console.log(prom)