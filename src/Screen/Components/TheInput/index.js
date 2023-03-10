import React from 'react'

const TheInput = (props) => {
    const {
        ...all
    } = props



    return (
        <input
           {...all}

        />
    )
}


export default TheInput