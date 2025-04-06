const num = 5

const factorial = () => {
    let first = 1;
    for(let i = 2; i<=num; i++){
        first = first*i
    }
    return first
}
console.log(factorial())