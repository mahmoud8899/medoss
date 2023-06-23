
import React, { Fragment } from 'react'
import TheImage from '../../Components/TheImage'
import Contact from '../Contact'
import { TheEmailMarketing, EmailTile } from '../../Components/data/index'
import MyImage from '../../Components/ImageLazy/index'
import MetaDecorator from '../../Components/Header'

import { useLocation } from 'react-router-dom'



const EmailMarketing = () => {


    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/e-postmarknadsforing/ar' || Match?.toString() === '/e-postmarknadsforing/ar/' ? true : false




    return (
        <Fragment>

            <MetaDecorator
                title={`Med Oss -${condation ? EmailTile.title.AR : EmailTile.title.EN}`}
                description={condation ? EmailTile.des.AR : EmailTile.des.EN}
                imageUrl={EmailTile.image}
                imageAlt={condation ? EmailTile.title.AR : EmailTile.title.EN}

            />



            <div className='padding'>
                <div className='flex center align-items flexwrap  margin-topandbottom h1align'>
                    <h1 className={condation ? 'Title font-family screenColor':'Title font-family screenColor FirstLetter'} >{condation ? EmailTile.h1title.AR : EmailTile.h1title.EN}</h1>

                </div>

                {TheEmailMarketing.map((item, index) => (
                        <div className='flex flexrow space-between align-items flexwrap' key={index}>

                            <div className='firstwidth dev-size padding '>
                                <h2 className={condation ? 'text-align_right Title font-family screenColor ' : 'Title font-family screenColor FirstLetter'}>{condation ? item.title.AR : item.title.EN}</h2>
                                <div className={condation ? 'text-align_right margin-topandbottom' : 'margin-topandbottom'}>
                                    <span className='des font-family-des colordes'>
                                        {condation ?item.des.AR : item.des.EN}
                                    </span>

                                </div>
                            </div>


                            <div className={index === 1 ? '_idOrder firstwidth dev-size padding flex align-items center order overflow' : 'firstwidth dev-size padding flex align-items center order overflow'}>
                                <MyImage
                                    image={item.image}
                                    className='Image objectcover Imageanimation'
                                    alt={condation ? item.title.AR : item.title.EN}
                                />
                            </div>

                            <div className='margin-top-two LineX antherbackground' />
                        </div>
                    ))
                }



                <Contact ChangeSprak={condation} />


            </div>

        </Fragment>

    )
}


export default EmailMarketing