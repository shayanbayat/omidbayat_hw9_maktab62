let author = require('fs')
function reader() {
    author.readFile('../from.txt',function (err , data) {
        if(err){
            console.log("not ok read 1")
            return 0
        }
        author.readFile('../apend.txt',function (err2,data2){
            if(err2){
                console.log( "not ok read 2")
                return 0
            }
            author.writeFile('../to.txt',data+"\n"+data2, function (err3){
                if (err3){
                    console.log("not ok Write")
                    return 0
                }
                console.log("write is ok")
            })
        })
    })
}

async function writer() {
 await reader()
}
writer().then()