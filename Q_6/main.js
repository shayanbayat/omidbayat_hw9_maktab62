let fs = require('fs')
fs.open('newfile.txt', 'w', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
fs.access('newfile.txt',function (err){
    if(err) throw err
    console.log("is here")
})