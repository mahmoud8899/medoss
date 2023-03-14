import React from 'react'
import TheButtom from '../../Components/buttom'
import TheInput from '../../Components/TheInput'
import { UrlImage } from '../../../Utils/UrlImage'
import MyImage from '../../Components/ImageLazy'
import {ListContact} from '../../Components/data/index'

const Contact = () => {






    return (
        <div>
            <div className='flex flexrow space-between align-items flexwrap' id="contact">

                <div className='firstwidth dev-size padding'>

                    <h2 className='Title font-family screenColor h1align'>{ListContact.title}</h2>
                    <div className='margin-topandbottomOne h1align'>
                        <span className='des font-family-des colordes'>
                            {ListContact.des} {ListContact.telephone}
                        </span>

                    </div>


                    <TheInput
                        type='Namn*'
                        placeholder='Telefon'
                        className='Input border-radius border placeholder Name font-family-name borderSolid'

                    />

                    <div className='margin-text' />
                    <TheInput
                        type='email'
                        placeholder='E-postadress*'
                        className='Input border-radius border placeholder Name font-family-name borderSolid'

                    />

                    <div className='margin-text' />
                    <TheInput
                        type='number'
                        placeholder='Telefon'
                        className='Input border-radius border placeholder Name font-family-name borderSolid'

                    />

                    <div className='margin-text' />
                    <TheInput
                        type='text'
                        placeholder='Meddelande'
                        className='Input border-radius border placeholder Name font-family-name borderSolid inputHeight'

                    />


                    <TheButtom />
                </div>

                <div className='firstwidth dev-size padding flex align-items center order'>

                    <MyImage
                        image={UrlImage.TheContact}
                        className='Image objectcover'
                        alt={ListContact.title}
                    />

                </div>

            </div>

        </div>
    )
}



export default Contact