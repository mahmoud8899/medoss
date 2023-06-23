import React from 'react'
import { Logo } from '../navbar/Logo'
import TheInput from '../../Components/TheInput';
import TheButtom from '../../Components/buttom';
import { Link } from 'react-router-dom'
import { ListNavBar } from '../../Components/data/index'
import { InfoContact } from '../../Components/data/index'
import { useLocation } from 'react-router-dom'
import { FaFacebook, FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {


    let info = {
        phone: '+46709208520'
    }



    let Match = useLocation()?.pathname
    let condation = Match.indexOf('/ar') === -1 ? false : true

    return (
        <div className='flex flexrow flexwrap padding background space-between ' >

            <div className='widthThre  margin-text ' >
                <Logo condation={condation} />
            </div>

            <div className='widthThre  margin-text'>

                <ul >
                    {ListNavBar?.map((item, index) => (
                        <Link to={condation ? item.link.AR : item.link.EN} className='Link whitecolor' key={index}>
                            <li className='Name font-family-name margin-topandbottomOne'>
                                {condation ? item.name.AR : item.name.EN}
                            </li>
                        </Link>
                    ))}


                </ul>
            </div>

            <div className='widthThre ExtraWidth margin-text'>
                <div className='flex flexcolumn'>
                    <span className='Name font-family-name'>{InfoContact.ask}</span>
                    <span className='Name font-family-name  opacity'>{InfoContact.answer}</span>
                </div>


                <div className='flex flexcolumn  margin-top-two '>
                    <TheInput
                        type='email'
                        placeholder='E-postadress*'
                        className='Input border-radius border placeholder Name font-family-name inputtest'

                    />
                </div>

                <div className='flex flexrow align-items margin-text'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='IconCheckBox margin-Right' />
                    <span className='Name font-family-name opacity'>{InfoContact.agree}</span>
                </div>




                <TheButtom />



            </div>



            <div className='whatapp flex flexrow-reverse'>
                <div className='placeholder' >
                    <Link to={`https://wa.me/${info.phone}`} >
                        <FaWhatsappSquare className='_icons2 wahtappcolor cursor' />
                    </Link>
                </div>
                <div className='placeholder'>
                    <Link to='https://www.facebook.com/profile.php?id=100090706691806' >
                        <FaFacebook className='_icons2 feaccolor cursor' />
                    </Link>
                </div>
            </div>





        </div>

    )
}


export default Footer