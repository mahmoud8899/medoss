import React, { Fragment } from 'react'
import { TheSlice } from '../../../Utils/Helps'
import MetaDecorator from '../../Components/Header'
import Contact from './index'
import { ListContact } from '../../Components/data/index'
import TheAddrss from './Address'
import { useLocation } from 'react-router-dom'
  

const ContactScreen = () => {

    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/contact/ar' || Match?.toString() === '/contact/ar/' ? true : false


    return (
        <Fragment>
            <MetaDecorator
                title={`Med Oss -${condation ? ListContact.title.AR : ListContact.title.EN}`}
                description={TheSlice(condation ? ListContact.des.AR :ListContact.des.EN , Number(165))}
                imageUrl={ListContact?.image}
                imageAlt={condation ? ListContact?.title.AR :ListContact?.title.EN }

            />


            <div className='padding margin-topandbottom'>

            <h1 className='Title font-family screenColor text-align margin-topandbottom'>KONTAKT - MedOss </h1>
                <Contact ChangeSprak={condation} />
                <TheAddrss />
            </div>

        </Fragment>

    )
}

export default ContactScreen
