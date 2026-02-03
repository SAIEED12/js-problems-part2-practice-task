const height = [65,64,12,54,67,90,26];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

console.log(getMin(height));