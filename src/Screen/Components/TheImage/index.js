import React from 'react'




const TheImage = (props) => {
    const { Url, className } = props


    return (
        <img
            src={Url}
            className={className}
        />
    )
}


export default TheImage