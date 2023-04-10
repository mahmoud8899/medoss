import React from 'react'
import {FirstPage} from '../../Components/data/index'
import {useLocation} from 'react-router-dom'

export const Services = () => {


    let Match = useLocation()?.pathname
    let  condation =  Match?.toString() === '/ar' || Match?.toString() === '/ar/' ? true : false
    return (
        <div className='widthHalf'>
            <h2 className='Title font-family screenColor h1align'>{condation ? FirstPage.firstTitle.AR :FirstPage.firstTitle.EN }</h2>
            <div className={condation? 'margin-topandbottomOne text-align_right' : 'margin-topandbottomOne'}>
                <span className='des font-family-des colordes'>
                    {condation ? FirstPage.des.AR : FirstPage.des.EN }
                </span>
            </div>

        </div>
    )
}