
import React from 'react'
import {WhoIsUs} from '../../Components/data/index'


export const OssScreen = () => {




    return (
        <div className='flex flexrow space-between align-items flexwrap '>

            <div className='firstwidth dev-size padding'>
                <h2 className='Title font-family opacityText h1align' >{WhoIsUs.us}</h2>
            </div>

            <div className='firstwidth dev-size padding'>
                <h2 className='Title font-family screenColor h1align'>{WhoIsUs.title}</h2>

                <div className='margin-topandbottom '>
                    <span className='des font-family-des colordes'>
                        {WhoIsUs.des}
                    </span>

                </div>
            </div>

            <div className='firstwidth dev-size padding'>
                <h2 className='Title font-family screenColor h1align' >{WhoIsUs.choose}</h2>

                <div className='margin-topandbottom '>
                    <span className='des font-family-des colordes'>
                        {WhoIsUs.des2}
                    </span>

                </div>
            </div>




        </div>

    )
}