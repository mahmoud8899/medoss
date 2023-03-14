import React, { Fragment } from 'react'
import Contact from "../Contact"
import { TheDesign, DesignTitle } from '../../Components/data/index'
import MetaDecorator from '../../Components/Header'
import { TheSlice } from '../../../Utils/Helps'
import MyImage from '../../Components/ImageLazy/index'


const Design = () => {


    return (
        <Fragment>
            <MetaDecorator
                title={`Med Oss -${TheDesign[0]?.title}`}
                description={TheSlice(DesignTitle?.des, Number(165))}
                imageUrl={DesignTitle?.image}
                imageAlt={DesignTitle?.title}

            />
            <div className="padding">

                <div className='flex  center align-items flexwrap' >
                    <h1 className='Title font-family screenColor FirstLetter h1align'>
                        {DesignTitle?.title}
                    </h1>
                    <div className='margin-topandbottomOne h1align'>
                        <span className='des font-family-des colordes'>
                            {DesignTitle.des}
                        </span>

                    </div>
                </div>


                {TheDesign.map((item, index) => (
                    <div className='flex flexrow space-between align-items flexwrap' key={index}>

                        <div className='firstwidth dev-size padding'>
                            <h2 className='Title font-family screenColor FirstLetter h1align'>{item.title}</h2>

                            <div className='margin-topandbottomOne '>
                                <span className='des font-family-des colordes'>
                                    {item.des}
                                </span>

                            </div>
                        </div>


                        <div className={index === 1 ? '_idOrder firstwidth dev-size padding flex align-items center order overflow' : 'firstwidth dev-size padding flex align-items center order overflow'} >
                            <MyImage
                                image={item.image}
                                className='Image objectcover  Imageanimation'
                                alt={item?.title}
                            />
                        </div>

                        <div className='margin-top-two LineX antherbackground' />

                    </div>
                ))}


                <div className='margin-top-two' />
                <Contact />

            </div>
        </Fragment>

    )
}


export default Design
