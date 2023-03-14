
import React from 'react'
import TheImage from '../../Components/TheImage/index'
import TheButtom from '../../Components/buttom'
import { Services } from '../Webbdesign/Servec'
import { Link } from 'react-router-dom'
import { TheServices } from '../../Components/data/index'
import { TheSlice } from '../../../Utils/Helps'
import MyImage from '../../Components/ImageLazy'

const OmOss = () => {


    // options 
    // 1 Webbdesign 2- Webbutveckling 3-App Utveckling 4- SEO 5- ui and ux 6- email
    return (
        <div>
            <Services />

            <div className='margin-bottomDev ' />
            <div className='flex flexrow  align-items flexwrap  widthNine marginAuto  space-between '>

                {TheServices.map((item, index) => (
                    <Link
                        to={item.link}
                        key={index}
                        className='Link flex flexcolumn align-items flexwrap  widthHalf padding  margin-text box-shadow border-raduisLeft'
                    >
                        <MyImage
                            image={item.image}
                            className='_iMage_box'
                            alt={item.title}
                        />

                        <div className=''>
                            <h2 className='Title font-family screenColor'>{item.title}</h2>
                        </div>

                        <div className='margin-text'>
                            <span className='des font-family-des colordes'>
                                {TheSlice(item.des)}
                            </span>



                            <div className=''>
                                <TheButtom
                                    Title={item.buttom}
                                    ClassBox='padding flex align-items margin-top-two  margin-bottomDev border-radius space-between cursor'
                                    TitleCss='Name font-family-name screenColor'
                                    IconCss='_icons screenColor ExtraHove'
                                />
                            </div>





                        </div>

                    </Link>

                ))}
            </div>


        </div>


    )
}


export default OmOss

