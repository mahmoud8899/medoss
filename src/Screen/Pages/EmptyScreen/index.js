import React from "react"



const EmptyScreen = () => {

    return (

        <div className="flex flexcolumn align-items marginEmpty">
            <h1 className='Title font-family screenColor h1align'>
                Hoppsan! Den sidan kan inte hittas.
            </h1>
            <div className='margin-topandbottomOne h1align' >
                <span className='des font-family-des colordes'>
                    Det verkar som om inget hittades på denna plats.
                </span>
            </div>
        </div>

    )
}


export default EmptyScreen