let author = require('fs')

function writer() {
    let data1,data2
    try {
         data1 = author.readFileSync('../from.txt')
    }
    catch (err){
        console.log(err)
    }
    try {
         data2 = author.readFileSync('../apend.txt')
    }
    catch (err){
        console.log(err)
    }
    try {
        author.writeFileSync('../to.txt',data1+"\n"+data2)
    }
    catch (e) {
        console.log(e)
    }
}


writer()