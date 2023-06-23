import React, { Fragment } from 'react'
import Contact from "../Contact"
import { TheDesign, DesignTitle } from '../../Components/data/index'
import MetaDecorator from '../../Components/Header'
import { TheSlice } from '../../../Utils/Helps'
import MyImage from '../../Components/ImageLazy/index'

import { useLocation } from 'react-router-dom'
  
const Design = () => {

    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/design/ar' || Match?.toString() === '/design/ar/' ? true : false

    return (
        <Fragment>
            <MetaDecorator
                title={`Med Oss -${condation ? TheDesign[0]?.title.AR : TheDesign[0]?.title.EN}`}
                description={TheSlice(condation ? DesignTitle?.des.AR : DesignTitle?.des.EN, Number(165))}
                imageUrl={DesignTitle?.image}
                imageAlt={condation ? DesignTitle?.title.AR : DesignTitle?.title.EN}

            />
            <div className="padding">

                <div className='flex flexcolumn center align-items flexwrap' >
                    <h1 className={condation ?'Title font-family screenColor ' :'Title font-family screenColor FirstLetter h1align'}>
                    {condation ? DesignTitle?.title.AR : DesignTitle?.title.EN}
                    </h1>
                    <div className='margin-topandbottomOne h1align'>
                        <span className='des font-family-des colordes'>
                            {condation ? DesignTitle?.des.AR : DesignTitle?.des.EN}
                        </span>

                    </div>
                </div>


                {TheDesign.map((item, index) => (
                    <div className='flex flexrow space-between align-items flexwrap' key={index}>

                        <div className='firstwidth dev-size padding'>
                            <h2 className={condation ? 'text-align_right Title font-family screenColor ':'Title font-family screenColor FirstLetter h1align'}>{condation ?item.title.AR : item.title.EN}</h2>

                            <div className={condation ? 'text-align_right margin-topandbottomOne' : 'margin-topandbottomOne h1align'}>
                                <span className='des font-family-des colordes'>
                                    {condation ? item.des.AR : item.des.EN}
                                </span>

                            </div>
                        </div>


                        <div className={index === 1 ? '_idOrder firstwidth dev-size padding flex align-items center order overflow' : 'firstwidth dev-size padding flex align-items center order overflow'} >
                            <MyImage
                                image={item.image}
                                className='Image objectcover  Imageanimation'
                                alt={condation ?item.title.AR : item.title.EN}
                            />
                        </div>

                        <div className='margin-top-two LineX antherbackground' />

                    </div>
                ))}


                <div className='margin-top-two' />
                <Contact  ChangeSprak={condation} />

            </div>
        </Fragment>

    )
}


export default Design
