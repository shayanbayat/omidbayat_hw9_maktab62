let author = require('fs')

function read(){
    author.readFile('../from.txt', 'utf8', function (err, data) {
        author.writeFile('../to.txt',data,(err)=>{
            if (err !== null){
                console.log(err)
                return "no"
            }
        })
    })
    return "ok"
}

async function writer() {
    let done = await read();
    return (done);
}

writer().then(console.log)
