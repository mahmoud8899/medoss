
import React from 'react'
import TheImage from '../../Components/TheImage'
import Contact from '../Contact'
import {AppMobile} from '../../Components/data/index'




export const AppScreen = () => {

    return (
        <div className='padding'>

            <div className='flex flexrow space-between align-items flexwrap '>



                <div className='firstwidth dev-size padding '>
                    <h1 className='Title font-family screenColor'>{AppMobile.title}</h1>
                    <div className='margin-topandbottom '>
                        <span className='des font-family colordes'>
                            {AppMobile.des}
                        </span>

                    </div>
                </div>


                <div className='firstwidth dev-size padding flex align-items center order overflow'>
                    <TheImage
                        Url={AppMobile.image}
                        className='Image objectcover Imageanimation'
                    />
                </div>
            </div>
            <div className='margin-top-two LineX antherbackground' />
           
            <Contact />


        </div>
    )
}


