//Objective is, given an integer, to return an array of the number of 1's bits
//in each integer from 0 to that integer.

let n = 3


//O(n*k) solution where n and k are the number of integers and number of bits per integer respectively
//We use bit manipulation to find the number of 1's for each number

let result = []
    
for (let i = 0; i <= num; i++) {
    result.push(findCount(i))
}

function findCount(n) {
    let count

    //Remove the rightmost 1 every loop
    for (count = 0; n != 0; count++) {
        n &= n - 1
    }

    return count
}

return result