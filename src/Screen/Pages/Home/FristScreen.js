import React from 'react'
import { data } from '../../Components/data/index'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import MyImage from '../../Components/ImageLazy'




const FirstScreen = () => {

    
    return (
        <div className='flex flexrow space-between align-items flexwrap '>


            <div className='firstwidth dev-size padding '>
                <h1 className='Title font-family screenColor'>{data.title ? data.title : 'loading'}</h1>

                <div className='margin-topandbottom '>
                    <span className='des font-family-des colordes'>
                        {data.des ? data.des : 'loading'}
                    </span>

                </div>


                <div className='flex flexrow space-between align-items flexwrap margin-text'>


                    <Link to='/services' className='Link WidthButtom antherbackground flex flexrow space-between align-items padding border-radius'>
                        <span className='white Name font-family-name'>{data.Services ? data.Services : 'loading'}</span>
                        <BiRightArrowAlt className='white _icons' />
                    </Link>

                    <Link to='/contact' className='Link WidthButtom screenback flex flexrow space-between align-items padding border-radius'>
                        <span className='white Name font-family-name'>{data.meet ? data.meet : 'loading'}</span>
                        <BiRightArrowAlt className='white _icons' />
                    </Link>
                   

                </div>

            </div>
            <div className='firstwidth dev-size padding flex align-items center order overflow'>

                <MyImage
                    image={data.image}
                    className='Image objectcover Imageanimation'
                    beforeLoad={<div>loading.....</div>}
                    alt={data.title}
                />




            </div>

        </div>
    )
}


export default FirstScreen