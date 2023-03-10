import React from 'react'
import TheImage from '../../Components/TheImage'
import Contact from '../Contact'
import {TheSEOdATA} from '../../Components/data/index'



export const TheSEO = () => {


    return (
        <div className="padding">
            <div className='flex flexrow space-between align-items flexwrap '>
                <div className='firstwidth dev-size padding '>
                    <h1 className='Title font-family screenColor'>{TheSEOdATA.title}</h1>
                    <div className='margin-topandbottom '>
                        <span className='des font-family colordes'>
                            {TheSEOdATA.des}
                        </span>

                    </div>
                </div>


                <div className='firstwidth dev-size padding flex align-items center order '>
                    <TheImage
                        Url={TheSEOdATA.image}
                        className='Image objectcover'
                    />
                </div>
            </div>
           
            <div className='margin-top-two LineX antherbackground' />
            <Contact />

        </div>
    )
}