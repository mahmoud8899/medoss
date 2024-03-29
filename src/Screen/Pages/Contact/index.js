import React, { useState } from 'react'
import TheButtom from '../../Components/buttom'
import TheInput from '../../Components/TheInput'
import { UrlImage } from '../../../Utils/UrlImage'
import MyImage from '../../Components/ImageLazy'
import { ListContact } from '../../Components/data/index'
import { TheSelection } from '../../Components/data/index'
import { ValtionMe } from '../../Components/Validation/index'
import { IoClose, } from 'react-icons/io5'
import { InilionState, MessageClose, sendData } from './response'




const Contact = (props) => {

    const { ChangeSprak } = props



    const [data, setData] = useState(InilionState)




    // send data...
    const ValdationButtom = () => {

        setData({
            ...data,
            error: false
        })


        if (ValtionMe(data?.email, 'isEmail') &&
            ValtionMe(data?.thehelp, 'isLength') &&
            ValtionMe(data?.theobject, 'isLength') &&
            ValtionMe(data?.message, 'isLength')) {
            setData({
                ...data,
                change: true
            })
            sendData(data)
        } else {

            setData({
                ...data,
                error: true
            })
        }

    }




    const TheDom = () => <p className='margin-topValdation'>Obligatorisk</p>



    // close message
    let theclose = () => MessageClose(data, setData)



    return <div className='flex flexrow space-between align-items flexwrap' id="contact">



        <div className='firstwidth dev-size padding'>

            <h2 className={ChangeSprak ? 'text-align_right  Title font-family screenColor' : 'Title font-family screenColor h1align'}> {ChangeSprak ? ListContact.title.AR : ListContact.title.EN}</h2>
            <div className={ChangeSprak ? 'text-align_right margin-topandbottomOne' : 'margin-topandbottomOne h1align'}>
                <span className='des font-family-des colordes'>
                    {ChangeSprak ? ListContact.des.AR : ListContact.des.EN} {ListContact.telephone}
                </span>

            </div>


            {data.change ?
                (<div onClick={theclose} className='firstwidth flex flexcolumn alrt padding center  border-radius cursor dev-size'>

                    <div className='close'>
                        <IoClose className='_icons whitecolor' />
                    </div>

                    <div className=''>
                        <h1 className='Title font-family white'>Tack!</h1>
                        <p className='des font-family-des white'>
                            {ChangeSprak ? 'تم إرسال رسالتك الآن ، وسنعاود الاتصال بك في أقرب وقت ممكن ' : 'Ditt meddelande är nu skickat, vi återkommer så snart vi kan :)'}
                        </p>
                    </div>
                </div>
                ) :
                (
                    <>
                        <select
                            onChange={(e) => setData({ ...data, thehelp: e.target.value })}
                            className='Input border-radius border placeholder  borderSolid Name font-family-name'>
                            {TheSelection?.map((item) => (
                                <option key={item?._id} value={ChangeSprak ? item?.name.AR : item?.name?.EN}
                                >{ChangeSprak ? item.name.AR : item?.name.EN}</option>
                            ))}

                        </select>


                        {data?.error && !ValtionMe(data?.thehelp, 'isLength') ? TheDom() : null}



                        <div className='margin-text' />
                        <TheInput
                            type='email'
                            placeholder={ChangeSprak ? 'عنوان البريد الإلكتروني' : 'E-postadress*'}
                            className='Input border-radius border placeholder Name font-family-name borderSolid'
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}

                        />
                        {data?.error && !ValtionMe(data?.email, 'isEmail') ? TheDom() : null}
                        <div className='margin-text' />
                        <TheInput
                            type='text'
                            placeholder={ChangeSprak ? 'عنوان' : 'Rubrik '}
                            className='Input border-radius border placeholder Name font-family-name borderSolid'
                            value={data.theobject}
                            onChange={(e) => setData({ ...data, theobject: e.target.value })}

                        />

                        {data?.error && !ValtionMe(data?.theobject, 'isLength') ? TheDom() : null}

                        <div className='margin-text' />
                        <textarea
                            className='widthonly border-radius border placeholder Name font-family-name borderSolid'
                            value={data.message}
                            rows="9"
                            placeholder={ChangeSprak ? "رسالة" : "Meddelande"}
                            onChange={(e) => setData({ ...data, message: e.target.value })}

                        >

                        </textarea>

                        {data?.error && !ValtionMe(data?.message, 'isLength') ? TheDom() : null}
                        <TheButtom onClick={ValdationButtom} />
                    </>
                )
            }











        </div>

        <div className='firstwidth dev-size padding flex align-items center order'>

            <MyImage
                image={UrlImage.TheContact}
                className='Image objectcover'
                alt={ListContact.title}
            />

        </div>









    </div >

}



export default Contact