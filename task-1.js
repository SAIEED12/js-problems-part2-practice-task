/* Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137]; */

const heights2 = [167, 190, 120, 165, 137];
let min = heights2[0];
for(const i of heights2){
    if(i<min){
        min = i;
    }
}
console.log(min);
