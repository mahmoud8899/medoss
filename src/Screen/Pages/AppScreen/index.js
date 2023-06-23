
import React, { Fragment } from 'react'
import TheImage from '../../Components/TheImage'
import Contact from '../Contact'
import { AppMobile, } from '../../Components/data/index'
import MetaDecorator from '../../Components/Header/index'
import { TheSlice } from '../../../Utils/Helps'
import MyImage from '../../Components/ImageLazy/index'
import { useLocation } from 'react-router-dom'




const AppScreen = () => {

    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/mobilapp/ar' || Match?.toString() === '/mobilapp/ar/' ? true : false

    return (
        <Fragment>

            <MetaDecorator
                title={`Med Oss -${condation ? AppMobile.title.AR : AppMobile.title.EN}`}
                description={TheSlice(condation ? AppMobile?.des.AR : AppMobile.des.EN, Number(165))}
                imageUrl={AppMobile?.image}
                imageAlt={condation ? AppMobile.title.AR : AppMobile.title.EN}

            />


            <div className='padding'>

                <div className='flex flexrow space-between align-items flexwrap '>



                    <div className='firstwidth dev-size padding '>
                        <h1 className={condation ? 'text-align_right Title font-family screenColor ': 'Title font-family screenColor h1align'}>{condation ? AppMobile.title.AR : AppMobile.title.EN}</h1>
                        <div className={condation ? 'text-align_right margin-topandbottom' : 'margin-topandbottom'}>
                            <span className='des font-family-des colordes'>
                                {condation ? AppMobile.des.AR : AppMobile.des.EN}
                            </span>

                        </div>
                    </div>


                    <div className='firstwidth dev-size padding flex align-items center order overflow'>
                        <MyImage
                            image={AppMobile.image}
                            className='Image objectcover Imageanimation'
                            alt={condation ? AppMobile.title.AR : AppMobile.title.EN}
                        />
                    </div>
                </div>
                <div className='margin-top-two LineX antherbackground' />

                <Contact ChangeSprak={condation} />


            </div>
        </Fragment>
    )
}


export default AppScreen