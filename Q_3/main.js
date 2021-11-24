let author = require('fs')
    try {
        let str = author.readFileSync('../from.txt','utf-8')
        try {
            author.writeFileSync('../to.txt', str)
        }
        catch (err){
            console.log(err)
        }
        console.log("ok")
    }
    catch (err){
        console.log(err)
    }

