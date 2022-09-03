let input = 'turpentine and turtles'
const vowels = ['a','e','i','o','u']
let resultArray = []

for (let i=0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++) {
        if ((input[i] === vowels[j]) && (input[i] === 'u' || input[i] === 'e')){
            resultArray.push(input[i].toUpperCase())
            resultArray.push(input[i].toUpperCase())
        } else if (input[i] === vowels[j]){
            resultArray.push(input[i].toUpperCase())

        }
        
    }
}
console.log(resultArray.join(''))


