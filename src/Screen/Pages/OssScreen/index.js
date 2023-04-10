
import React from 'react'
import { WhoIsUs } from '../../Components/data/index'

import { useLocation } from 'react-router-dom'




export const OssScreen = () => {


    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/ar' || Match?.toString() === '/ar/' ? true : false

    return (
        <div className='flex flexrow space-between align-items flexwrap '>

            <div className='firstwidth dev-size padding'>
                <h2 className='Title font-family opacityText h1align' >{condation ? WhoIsUs.us.AR : WhoIsUs.us.EN}</h2>
            </div>

            <div className='firstwidth dev-size padding'>
                <h2 className='Title font-family screenColor h1align'>{condation ? WhoIsUs.title.AR : WhoIsUs.title.EN}</h2>

                <div className={condation ? 'text-align_right margin-topandbottom' :'margin-topandbottom'}>
                    <span className='des font-family-des colordes'>
                        {condation ? WhoIsUs.des.AR : WhoIsUs.des.EN}
                    </span>

                </div>
            </div>

            <div className='firstwidth dev-size padding'>
                <h2 className='Title font-family screenColor h1align' >{condation ? WhoIsUs.choose.AR : WhoIsUs.choose.EN}</h2>

                <div className={condation ? 'text-align_right margin-topandbottom' :'margin-topandbottom'}>
                    <span className='des font-family-des colordes'>
                        {condation ? WhoIsUs.des2.AR :WhoIsUs.des2.EN}
                    </span>

                </div>
            </div>




        </div>

    )
}