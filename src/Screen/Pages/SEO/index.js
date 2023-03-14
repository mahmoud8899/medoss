import React, { Fragment } from 'react'
import Contact from '../Contact'
import { TheSEOdATA, TheseoTitle } from '../../Components/data/index'
import MetaDecorator from '../../Components/Header'
import MyImage from '../../Components/ImageLazy/index'
import {TheSlice} from '../../../Utils/Helps'


const TheSEO = () => {


    return (
        <Fragment>
            <MetaDecorator
                title={`Med Oss -${TheSEOdATA.title}`}
                description={TheSlice(TheSEOdATA.des,Number(165))}
                imageUrl={TheSEOdATA.image}
                imageAlt={TheSEOdATA.title}

            />

            <div className='flex  center align-items flexwrap  margin-topandbottom'>
                <h1 className='Title font-family screenColor FirstLetter'>{TheseoTitle.title}</h1>
            </div>
            <div className="padding">
                <div className='flex flexrow space-between align-items flexwrap '>
                    <div className='firstwidth dev-size padding '>
                        <h2 className='Title font-family screenColor'>{TheSEOdATA.title}</h2>
                        <div className='margin-topandbottom '>
                            <span className='des font-family-des colordes'>
                                {TheSEOdATA.des}
                            </span>

                        </div>
                    </div>


                    <div className='firstwidth dev-size padding flex align-items center order '>
                        <MyImage
                            image={TheSEOdATA.image}
                            className='Image objectcover'
                            alt={TheSEOdATA.title}
                        />
                    </div>
                </div>

                <div className='margin-top-two LineX antherbackground' />
                <Contact />

            </div>

        </Fragment>

    )
}


export default TheSEO