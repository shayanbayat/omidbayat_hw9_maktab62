let fs = require('fs')

let names = fs.readFileSync('names.txt')

names = names.toString().split('\r\n')

let numbers = fs.readFileSync('numbers.txt')
numbers = numbers.toString().split('\r\n')
numbers = numbers.map(e => e.split('-'))

names.map(function (e){
    e = e.split('-')
    let result = numbers.filter(index => index[0] === e[0])
    if(result.length === 0){
        console.log(`${e[1]} hasn't any phone number`)
    }
    else if(result.length === 1){
        console.log(`${e[1]} phone numer is ${result[0][1]}`)
    }
    else{
        let result2 = result.map(e => e[1]).join(",")
        console.log(`${e[1]} phone numers are ${result2}`)
    }
})


