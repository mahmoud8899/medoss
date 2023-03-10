
import React from 'react'
import TheButtom from '../../Components/buttom'
import TheInput from '../../Components/TheInput'
import TheImage from '../../Components/TheImage'
import { UrlImage } from '../../../Utils/UrlImage'

const Contact = () => {



    let cont = {
        title: `
        Fyll i dina uppgifter nedan sà hör vi av oss och bokar ett möte`,
        des: `Vi är övertygade om att alla bra samarbeten börjar med ett möte. Orkar du inte vänta kan du alltid ringa oss pà`,
        telephone: '07327463'
    }


    return (
        <div>
            <div className='flex flexrow space-between align-items flexwrap' id="contact">

                <div className='firstwidth dev-size padding'>

                    <h1 className='Title font-family screenColor'>{cont.title}</h1>
                    <div className='margin-topandbottom '>
                        <span className='des font-family colordes'>
                            {cont.des} {cont.telephone}
                        </span>

                    </div>


                    <TheInput
                        type='Namn*'
                        placeholder='Telefon'
                        className='Input border-radius border placeholder Name font-family borderSolid'

                    />

                    <div className='margin-text' />
                    <TheInput
                        type='email'
                        placeholder='E-postadress*'
                        className='Input border-radius border placeholder Name font-family borderSolid'

                    />

                    <div className='margin-text' />
                    <TheInput
                        type='number'
                        placeholder='Telefon'
                        className='Input border-radius border placeholder Name font-family borderSolid'

                    />

                    <div className='margin-text' />
                    <TheInput
                        type='text'
                        placeholder='Meddelande'
                        className='Input border-radius border placeholder Name font-family borderSolid inputHeight'

                    />


                    <TheButtom />
                </div>

                <div className='firstwidth dev-size padding flex align-items center order'>

                    <TheImage
                        Url={UrlImage.TheContact}
                        className='Image objectcover'
                    />

                </div>

            </div>

        </div>
    )
}



export default Contact