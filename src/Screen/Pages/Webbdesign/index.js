
import React, { Fragment } from 'react'
import { Services } from './Servec'
import Contact from '../Contact/index'
import { FirstPage, Webdevelopment, WebTitle } from '../../Components/data/index'
import MyImage from '../../Components/ImageLazy/index'
import MetaDecorator from '../../Components/Header/index'
import { TheSlice } from '../../../Utils/Helps'

import { useLocation } from 'react-router-dom'

const Webbdesign = () => {


    /// [1]- ui [2] fast [3]- log  [4]- domen [5]- Webbhotell -[6] response size [8] - Support [9] ssl
    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/web/ar' || Match?.toString() === '/web/ar/' ? true : false

    console.log('Match', condation)
    return (
        <Fragment>
            <MetaDecorator
                title={condation ? WebTitle.title.AR : WebTitle.title.EN}
                description={TheSlice(condation ? FirstPage.des.AR : FirstPage.des.EN, 165)}
                imageUrl={Webdevelopment[3]?.image}
                imageAlt={TheSlice(condation ? FirstPage.des.AR : FirstPage.des.EN, 165)}

            />

            <div className='padding'>


                <div className='margin-screen' />

                <Services   ChangeSprak={condation} />
                <div className='margin-bottomDev' />

                <h1 className='margin-bottomDev Title font-family screenColor text-align'>{condation ? WebTitle.title.AR : WebTitle.title.EN}</h1>

                <div className='flex flexrow  align-items flexwrap  widthNine marginAuto space-between'>
                    {Webdevelopment?.map((item, index) => (
                        <div className='flex flexcolumn align-items flexwrap  widthHalf padding cursor  margin-text box-shadow border-raduisLeft' key={index}>
                            <MyImage
                                image={item.image}
                                className='_iMage_box marginAuto objectcover'
                                alt={condation ? WebTitle.title.AR : WebTitle.title.EN}
                            />
                            <div className='flex flexcolumn align-items height'>
                                <h2 className='screenColor Title font-family margin-topandbottomOne'>{condation ? item.title.AR : item.title.EN}</h2>
                                <span className='des font-family-des colordes text-align'>
                                    {condation ? item.des.AR : item.des.EN}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='margin-top-two LineX antherbackground' />
                <div className='margin-bottomDev' />

                <Contact ChangeSprak={condation} />





            </div>
        </Fragment>

    )
}

export default Webbdesign