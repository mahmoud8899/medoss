
import React from 'react'
import TheImage from '../../Components/TheImage/index'
import { Services } from './Servec'
import Contact from '../Contact/index'
import {Webdevelopment, WebTitle} from '../../Components/data/index'



const Webbdesign = () => {


    /// [1]- ui [2] fast [3]- log  [4]- domen [5]- Webbhotell -[6] response size [8] - Support [9] ssl





    


    return (
        <div className='padding'>

             
             <div className='margin-screen'   />
             
             <Services    />
             <div className='margin-bottomDev'   />

            <h1 className='margin-bottomDev Title font-family screenColor text-align'>{WebTitle.title}</h1>

            <div className='flex flexrow  align-items flexwrap  widthNine marginAuto space-between'>
                {Webdevelopment?.map((item, index) => (
                    <div className='flex flexcolumn align-items flexwrap  widthHalf padding cursor  margin-text box-shadow border-raduisLeft' key={index}>
                        <TheImage
                            Url={item.image}
                            className='_iMage_box marginAuto objectcover'
                        />
                        <div className='flex flexcolumn align-items height'>
                            <h1 className='screenColor Title font-family margin-topandbottomOne'>{item.title}</h1>
                            <span className='des font-family colordes text-align'>
                                {item.des}
                            </span>
                        </div>
                    </div>
                ))}

            </div>
            <div className='margin-top-two LineX antherbackground' />
            <div className='margin-bottomDev'   />

            <Contact     />





        </div>
    )
}

export default {
    element: Webbdesign,
};
