
import React from 'react'
import {WhoIsUs} from '../../Components/data/index'


export const OssScreen = () => {




    return (
        <div className='flex flexrow space-between align-items flexwrap '>

            <div className='firstwidth dev-size padding'>
                <span className='Title font-family opacityText' >{WhoIsUs.us}</span>
            </div>

            <div className='firstwidth dev-size padding'>
                <h1 className='Title font-family screenColor'>{WhoIsUs.title}</h1>

                <div className='margin-topandbottom '>
                    <span className='des font-family colordes'>
                        {WhoIsUs.des}
                    </span>

                </div>
            </div>

            <div className='firstwidth dev-size padding'>
                <span className='Title font-family screenColor' >{WhoIsUs.choose}</span>

                <div className='margin-topandbottom '>
                    <span className='des font-family colordes'>
                        {WhoIsUs.des2}
                    </span>

                </div>
            </div>




        </div>

    )
}