import React from 'react'
import { data } from '../../Components/data/index'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import MyImage from '../../Components/ImageLazy'





const FirstScreen = (props) => {
    const {condation } = props


    
    return (
        <div className='flex flexrow space-between align-items flexwrap '>

            <div className='firstwidth dev-size padding '>
                <h1 className={condation ?'text-align_right Title font-family screenColor' : 'Title font-family screenColor'}>{condation ?  data.title.AR : data.title.EN }</h1>

                <div className={ condation ?'text-align_right margin-topandbottom ' : 'margin-topandbottom '} >
                    <span className='des font-family-des colordes'>
                        {condation ? data.des.AR : data.des.EN}
                    </span>

                </div>


                <div className='flex flexrow space-between align-items flexwrap margin-text'>


                    <Link to={condation ? '/services/ar/' :'/services/'} className='Link WidthButtom antherbackground flex flexrow space-between align-items padding border-radius'>
                        <span className='white Name font-family-name'>{condation ? data.Services.AR : data.Services.EN }</span>
                        <BiRightArrowAlt className='white _icons' />
                    </Link>

                    <Link to={condation ? '/contact/ar/': '/contact/'} className='Link WidthButtom screenback flex flexrow space-between align-items padding border-radius'>
                        <span className='white Name font-family-name'>{condation ? data.meet.AR : data.meet.EN }</span>
                        <BiRightArrowAlt className='white _icons' />
                    </Link>
                   

                </div>

            </div>
            <div className='firstwidth dev-size padding flex align-items center order overflow'>

                <MyImage
                    image={data.image}
                    className='Image objectcover Imageanimation'
                    beforeLoad={<div>loading.....</div>}
                    alt={condation ? data.title.AR : data.title.EN}
                />




            </div>

        </div>
    )
}


export default FirstScreen