let fs =require('fs')
try {
     fs.openSync('newfile.txt','w')
    console.log("created!")
}
catch (e) {
    console.log(e)
}
try{
    fs.accessSync('newfile.txt')
    console.log("is here")
}
catch (e) {
    console.log(e)
}