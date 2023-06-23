import React, { Fragment } from 'react'
import Contact from '../Contact'
import { TheSEOdATA, TheseoTitle } from '../../Components/data/index'
import MetaDecorator from '../../Components/Header'
import MyImage from '../../Components/ImageLazy/index'
import { TheSlice } from '../../../Utils/Helps'

import { useLocation } from 'react-router-dom'





const TheSEO = () => {
    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/seo/ar' || Match?.toString() === '/seo/ar/' ? true : false


    return (
        <Fragment>
            <MetaDecorator
                title={`Med Oss -${condation ? TheSEOdATA.title.AR : TheSEOdATA.title.EN}`}
                description={TheSlice(condation ? TheSEOdATA.des.AR : TheSEOdATA.des.EN, Number(165))}
                imageUrl={TheSEOdATA?.image}
                imageAlt={condation ? TheSEOdATA.title.AR : TheSEOdATA.title.EN}

            />

            <div className='flex  center align-items flexwrap  margin-topandbottom'>
                <h1 className={condation ? 'Title font-family screenColor' : 'Title font-family screenColor FirstLetter'}>{condation ? TheSEOdATA.title.AR : TheSEOdATA.title.EN}</h1>
            </div>
            <div className="padding">
                <div className='flex flexrow space-between align-items flexwrap'>
                    <div className='firstwidth dev-size padding '>
                        <h2 className={condation ? 'text-align_right  Title font-family screenColor' : 'Title font-family screenColor'}>{condation ? TheSEOdATA.title.AR : TheSEOdATA.title.EN}</h2>
                        <div className={condation ? 'text-align_right margin-topandbottom' : 'margin-topandbottom'}>
                            <span className='des font-family-des colordes'>
                                {condation ? TheSEOdATA.des.AR : TheSEOdATA.des.EN}
                            </span>

                        </div>
                    </div>


                    <div className='firstwidth dev-size padding flex align-items center order '>
                        <MyImage
                            image={TheSEOdATA.image}
                            className='Image objectcover'
                            alt={condation ? TheSEOdATA.title.AR : TheSEOdATA.title.EN}
                        />
                    </div>
                </div>

                <div className='margin-top-two LineX antherbackground' />
                <Contact
                    ChangeSprak={condation}
                />

            </div>

        </Fragment>

    )
}


export default TheSEO