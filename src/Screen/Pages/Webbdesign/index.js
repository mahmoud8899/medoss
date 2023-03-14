
import React, { Fragment } from 'react'
import { Services } from './Servec'
import Contact from '../Contact/index'
import { FirstPage, Webdevelopment, WebTitle } from '../../Components/data/index'
import MyImage from '../../Components/ImageLazy/index'
import MetaDecorator from '../../Components/Header/index'
import {TheSlice} from '../../../Utils/Helps'


const Webbdesign = () => {


    /// [1]- ui [2] fast [3]- log  [4]- domen [5]- Webbhotell -[6] response size [8] - Support [9] ssl


    return (
        <Fragment>
            <MetaDecorator
                title={WebTitle.title}
                description={TheSlice(FirstPage.des, 165)}
                imageUrl={Webdevelopment[3]?.image}
                imageAlt={TheSlice(FirstPage.des, 165) }

            />

            <div className='padding'>


                <div className='margin-screen' />

                <Services />
                <div className='margin-bottomDev' />

                <h1 className='margin-bottomDev Title font-family screenColor text-align'>{WebTitle.title}</h1>

                <div className='flex flexrow  align-items flexwrap  widthNine marginAuto space-between'>
                    {Webdevelopment?.map((item, index) => (
                        <div className='flex flexcolumn align-items flexwrap  widthHalf padding cursor  margin-text box-shadow border-raduisLeft' key={index}>
                            <MyImage
                                image={item.image}
                                className='_iMage_box marginAuto objectcover'
                                alt={WebTitle.title}
                            />
                            <div className='flex flexcolumn align-items height'>
                                <h2 className='screenColor Title font-family margin-topandbottomOne'>{item.title}</h2>
                                <span className='des font-family-des colordes text-align'>
                                    {item.des}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='margin-top-two LineX antherbackground' />
                <div className='margin-bottomDev' />

                <Contact />





            </div>
        </Fragment>

    )
}

export default Webbdesign