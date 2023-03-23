import axios from "axios"



// the object  
export const InilionState = {
    thehelp: '',
    theobject: '',
    email: '',
    message: '',
    error: false,
    change: false
}

export const MessageClose = (data, setData) => {
    setData({
        ...data,
        change: false
    })
}



// send data 

export async function sendData(data) {

    try {
        await axios.post(`https://medoss.se/api/send/`, data)
        // console.log('sussfuly', res)
    } catch (error) {
        return console.log('error')
    }
}