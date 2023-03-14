import React, { Fragment } from 'react'
import { TheSlice } from '../../../Utils/Helps'
import MetaDecorator from '../../Components/Header'
import Contact from './index'
import { ListContact } from '../../Components/data/index'
import TheAddrss from './Address'

const ContactScreen = () => {


    return (
        <Fragment>
            <MetaDecorator
                title={`Med Oss -${ListContact.title}`}
                description={TheSlice(ListContact.des, Number(165))}
                imageUrl={ListContact?.image}
                imageAlt={ListContact?.title}

            />


            <div className='padding margin-topandbottom'>

            <h1 className='Title font-family screenColor text-align margin-topandbottom'>KONTAKT - MedOss </h1>
                <Contact />
                <TheAddrss />
            </div>

        </Fragment>

    )
}

export default ContactScreen
