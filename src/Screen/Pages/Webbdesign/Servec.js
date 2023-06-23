import React from 'react'
import {FirstPage} from '../../Components/data/index'


export const Services = (props) => {

    const {ChangeSprak} = props


 
    return (
        <div className='widthHalf'>
            <h2 className={ChangeSprak ? 'text-align_right Title font-family screenColor ':'Title font-family screenColor h1align'}>{ChangeSprak ? FirstPage.firstTitle.AR :FirstPage.firstTitle.EN }</h2>
            <div className={ChangeSprak? 'text-align_right margin-topandbottomOne' : 'margin-topandbottomOne'}>
                <span className='des font-family-des colordes'>
                    {ChangeSprak ? FirstPage.des.AR : FirstPage.des.EN }
                </span>
            </div>

        </div>
    )
}