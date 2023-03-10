
import React from 'react'
import TheImage from '../../Components/TheImage'
import Contact from '../Contact'
import {TheEmailMarketing} from '../../Components/data/index'

export const EmailMarketing = () => {







    return (
        <div className='padding'>

            {
                TheEmailMarketing.map((item,index)=>(
                    <div className='flex flexrow space-between align-items flexwrap' key={index}>

                    <div className='firstwidth dev-size padding '>
                        <h1 className='Title font-family screenColor FirstLetter'>{item.title}</h1>
                        <div className='margin-topandbottom '>
                            <span className='des font-family colordes'>
                                {item.des}
                            </span>
    
                        </div>
                    </div>
    
    
                    <div className={index === 1 ? '_idOrder firstwidth dev-size padding flex align-items center order overflow' :'firstwidth dev-size padding flex align-items center order overflow'}>
                        <TheImage
                            Url={item.image}
                            className='Image objectcover Imageanimation'
                        />
                    </div>

                    <div className='margin-top-two LineX antherbackground' />
                </div>
                ))
            }
   
         

            <Contact />


        </div>
    )
}