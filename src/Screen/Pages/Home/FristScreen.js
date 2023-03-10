import React from 'react'
import { data } from '../../Components/data/index'
import { BiRightArrowAlt } from 'react-icons/bi'
import TheImage from '../../Components/TheImage'
import { Link } from 'react-router-dom'


export const FirstScreen = () =>{


    return (
        <div className='flex flexrow space-between align-items flexwrap '>

        <div className='firstwidth dev-size padding '>
            <h1 className='Title font-family screenColor'>{data.title}</h1>

            <div className='margin-topandbottom '>
                <span className='des font-family colordes'>
                    {data.des}
                </span>

            </div>


            <div className='flex flexrow space-between align-items flexwrap margin-text'>


                <Link to='/services' className='Link WidthButtom antherbackground flex flexrow space-between align-items padding border-radius'>
                    <span className='white Name font-family'>{data.Services}</span>
                    <BiRightArrowAlt className='white _icons' />
                </Link>

                <Link to='/contact' className='Link WidthButtom screenback flex flexrow space-between align-items padding border-radius'>
                    <span className='white Name font-family'>{data.meet}</span>
                    <BiRightArrowAlt className='white _icons' />
                </Link>

            </div>

        </div>
        <div className='firstwidth dev-size padding flex align-items center order overflow'>
            <TheImage
                Url={data.image}
                className='Image objectcover Imageanimation'
            />
        </div>

    </div>
    )
}