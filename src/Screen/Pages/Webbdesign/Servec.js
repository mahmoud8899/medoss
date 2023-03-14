import React from 'react'
import {FirstPage} from '../../Components/data/index'

export const Services = () => {



    return (
        <div className='widthHalf'>
            <h2 className='Title font-family screenColor h1align'>{FirstPage.firstTitle}</h2>
            <div className='margin-topandbottomOne'>
                <span className='des font-family-des colordes'>
                    {FirstPage.des}
                </span>
            </div>

        </div>
    )
}