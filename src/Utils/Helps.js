export const TheSlice = (name, Mix = 200) => {

    if (name.length > Number(Mix)) {

        return name.slice(1, Mix) + '...'
    } else {

        return name
    }

}