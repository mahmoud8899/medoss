
import React from 'react'
import TheImage from '../../Components/TheImage/index'
import TheButtom from '../../Components/buttom'
import { Services } from '../Webbdesign/Servec'
import { Link } from 'react-router-dom'
import { TheServices } from '../../Components/data/index'
import { TheSlice } from '../../../Utils/Helps'
import MyImage from '../../Components/ImageLazy'



const OmOss = (props) => {

    const { condation } = props



    // options 
    // 1 Webbdesign 2- Webbutveckling 3-App Utveckling 4- SEO 5- ui and ux 6- email
    return (
        <div>
            <Services ChangeSprak={condation} />

            <div className='margin-bottomDev ' />
            <div className='flex flexrow  align-items flexwrap  widthNine marginAuto  space-between '>

                {TheServices.map((item, index) => (
                    <Link
                        to={condation ? item.link.AR : item?.link?.EN}
                        key={index}
                        className='Link flex flexcolumn align-items flexwrap  widthHalf padding  margin-text box-shadow border-raduisLeft'
                    >
                        <MyImage
                            image={item.image}
                            className='_iMage_box'
                            alt={condation ? item?.title?.AR : item?.title?.EN}
                        />

                        <div className=''>
                            <h2 className='Title font-family screenColor'>{condation ? item.title.AR : item.title?.EN}</h2>
                        </div>

                        <div className={condation ? 'text-align_right margin-text' : 'margin-text'} >
                            <span className='des font-family-des colordes'>
                                {TheSlice(condation ? item?.des.AR : item?.des?.EN)}
                            </span>



                            <div className=''>
                                <TheButtom
                                    Title={condation ? item.buttom.AR : item?.buttom?.EN}
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

