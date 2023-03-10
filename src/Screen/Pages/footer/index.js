import React from 'react'
import {Logo} from '../navbar/Logo'
import TheInput from '../../Components/TheInput';
import TheButtom from '../../Components/buttom';
import { Link } from 'react-router-dom'
import { ListNavBar } from '../../Components/data/index'
import {InfoContact } from '../../Components/data/index'

const Footer = () => {


    return (
        <div className='flex flexrow flexwrap padding background space-between ' >

            <div className='widthThre  margin-text ' >
                <Logo />
            </div>

            <div className='widthThre  margin-text'>

                <ul >
                    {ListNavBar?.map((item, index) => (
                        <Link to={item.link} className='Link whitecolor' key={index}>
                            <li className='Name font-family margin-topandbottomOne'>
                                 {item.name}
                            </li>
                        </Link>
                    ))}


                </ul>
            </div>






            <div className='widthThre ExtraWidth margin-text'>
                <div className='flex flexcolumn'>
                    <span className='Name font-family'>{InfoContact.ask}</span>
                    <span className='Name font-family  opacity'>{InfoContact.answer}</span>
                </div>


                <div className='flex flexcolumn  margin-top-two '>
                    <TheInput
                        type='email'
                        placeholder='E-postadress*'
                        className='Input border-radius border placeholder Name font-family inputtest'

                    />
                </div>

                <div className='flex flexrow align-items margin-text'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='IconCheckBox margin-Right' />
                    <span className='Name font-family opacity'>{InfoContact.agree}</span>
                </div>




                <TheButtom />



            </div>





        </div>

    )
}


export default Footer