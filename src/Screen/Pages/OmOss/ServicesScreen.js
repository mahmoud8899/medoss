import React, { Fragment } from 'react'
import OmOss from './index'
import Contact from '../Contact'
import MetaDecorator from '../../Components/Header'
import { FirstPage,ServicesHeader } from '../../Components/data/index'
import { TheSlice } from '../../../Utils/Helps'
import { useLocation } from 'react-router-dom'


const ServicesScreen = () => {

    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/services/ar' || Match?.toString() === '/services/ar/' ? true : false

    return (
        <Fragment>

            <MetaDecorator
                title={`Med Oss -${condation ? FirstPage.firstTitle.AR : FirstPage.firstTitle.EN}`}
                description={TheSlice(condation ? FirstPage?.des.AR : FirstPage?.des.EN, Number(165))}
                imageUrl={FirstPage?.image}
                imageAlt={condation ? FirstPage?.title.AR : FirstPage?.title.EN}

            />


            <div className='padding margin-topandbottom'>

                <div className='flex  center align-items flexwrap margin-topandbottom'>
                    <h1 className={condation ? 'Title font-family screenColor  h1align' :'Title font-family screenColor FirstLetter h1align'}>{condation ? ServicesHeader.title.AR: ServicesHeader.title.EN}</h1>
                </div>
                <OmOss condation={condation} />
                <div className='margin-bottomDev' />
                <div className='margin-bottomDev LineX antherbackground' />
                <Contact ChangeSprak={condation} />
            </div>
        </Fragment>

    )
}

export default ServicesScreen