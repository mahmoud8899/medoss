
import React, { Fragment } from 'react'
import TheImage from '../../Components/TheImage'
import Contact from '../Contact'
import { AppMobile,  } from '../../Components/data/index'
import MetaDecorator from '../../Components/Header/index'
import { TheSlice } from '../../../Utils/Helps'
import MyImage from '../../Components/ImageLazy/index'




 const AppScreen = () => {

    return (
        <Fragment>

            <MetaDecorator
                title={`Med Oss -${AppMobile.title}`}
                description={TheSlice(AppMobile?.des, Number(165))}
                imageUrl={AppMobile?.image}
                imageAlt={AppMobile?.title}

            />
           

            <div className='padding'>

                <div className='flex flexrow space-between align-items flexwrap '>



                    <div className='firstwidth dev-size padding '>
                        <h1 className='Title font-family screenColor h1align'>{AppMobile.title}</h1>
                        <div className='margin-topandbottom '>
                            <span className='des font-family-des colordes'>
                                {AppMobile.des}
                            </span>

                        </div>
                    </div>


                    <div className='firstwidth dev-size padding flex align-items center order overflow'>
                        <MyImage
                            image={AppMobile.image}
                            className='Image objectcover Imageanimation'
                            alt={AppMobile.title}
                        />
                    </div>
                </div>
                <div className='margin-top-two LineX antherbackground' />

                <Contact />


            </div>
        </Fragment>
    )
}


export default AppScreen