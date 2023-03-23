
const isEmail = (name) => {
    // return /^\w+@[a-zA-Z_]+?\[a-zA-Z]{2,3}$/.test(name)
    return String(name)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

}


// DESCRIPTION
function theLength(name){

    return name?.trim()?.length > Number(2)
}

export const ValtionMe = (name, key) => {
    switch (key) {

        case 'isEmail': return isEmail(name)
        case 'isLength': return theLength(name)

        
        default: return key




    }

}
