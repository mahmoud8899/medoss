import React, { Fragment } from 'react'
import OmOss from './index'
import Contact from '../Contact'
import MetaDecorator from '../../Components/Header'
import { FirstPage } from '../../Components/data/index'
import {TheSlice } from '../../../Utils/Helps'

const ServicesScreen = () => {


    return (
        <Fragment>

            <MetaDecorator
                title={`Med Oss -${FirstPage.firstTitle}`}
                description={TheSlice(FirstPage?.des,Number(165)) }
                imageUrl={FirstPage?.image}
                imageAlt={FirstPage?.title}

            />


            <div className='padding margin-topandbottom'>

                <div className='flex  center align-items flexwrap margin-topandbottom'>
                    <h1 className='Title font-family screenColor FirstLetter h1align'>Få hjälp med webbutveckling från erfaren webbyrå</h1>
                </div>
                <OmOss />
                <div className='margin-bottomDev' />
                <div className='margin-bottomDev LineX antherbackground' />
                <Contact />
            </div>
        </Fragment>

    )
}

export default ServicesScreen