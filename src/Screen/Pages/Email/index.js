
import React, { Fragment } from 'react'
import TheImage from '../../Components/TheImage'
import Contact from '../Contact'
import { TheEmailMarketing, EmailTile } from '../../Components/data/index'
import MyImage from '../../Components/ImageLazy/index'
import MetaDecorator from '../../Components/Header'
import { TheSlice } from '../../../Utils/Helps'

const EmailMarketing = () => {







    return (
        <Fragment>

            <MetaDecorator
                title={`Med Oss -${EmailTile.title}`}
                description={EmailTile.des}
                imageUrl={EmailTile.image}
                imageAlt={EmailTile.title}

            />



            <div className='padding'>
                <div className='flex  center align-items flexwrap  margin-topandbottom h1align'>
                    <h1 className='Title font-family screenColor FirstLetter' >{EmailTile.h1title}</h1>

                </div>

                {
                    TheEmailMarketing.map((item, index) => (
                        <div className='flex flexrow space-between align-items flexwrap' key={index}>

                            <div className='firstwidth dev-size padding '>
                                <h2 className='Title font-family screenColor FirstLetter'>{item.title}</h2>
                                <div className='margin-topandbottom '>
                                    <span className='des font-family-des colordes'>
                                        {item.des}
                                    </span>

                                </div>
                            </div>


                            <div className={index === 1 ? '_idOrder firstwidth dev-size padding flex align-items center order overflow' : 'firstwidth dev-size padding flex align-items center order overflow'}>
                                <MyImage
                                    image={item.image}
                                    className='Image objectcover Imageanimation'
                                    alt={item.title}
                                />
                            </div>

                            <div className='margin-top-two LineX antherbackground' />
                        </div>
                    ))
                }



                <Contact />


            </div>

        </Fragment>

    )
}


export default EmailMarketing