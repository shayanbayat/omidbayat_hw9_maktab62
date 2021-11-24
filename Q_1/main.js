function getName(cb) {
    let fName = prompt("enter first name")
    let lName = prompt("enter last name")
    return cb(fName, lName)
}

function cb(name, lName) {
    console.log(`welcome ${name} ${lName}`)
}
 getName(cb)