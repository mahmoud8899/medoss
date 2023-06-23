
import React from 'react'
import { MdOutlineMailOutline, MdPhonelinkRing, MdOutlineMap } from 'react-icons/md'

const TheAddrss = () => {


    let ContacTinfo = {

        email: 'info@medoss.se',
        Phone: '+46709208520',
        address: 'Trapetsvägen 20 A',
        city: '864 33 matfors'
    }


    return (
        <div className=''>

            <div className='flex flexrow align-items margin-topandbottomOne' >
                <MdOutlineMailOutline className='_icons screenColor' />
                <a href={`mailto:${ContacTinfo.email}`} className='Link whitecolor Name font-family-name onlymargin-left'>
                    {ContacTinfo.email}
                </a>
            </div>

            <div className='flex flexrow align-items margin-topandbottomOne' >
                <MdPhonelinkRing className='_icons screenColor' />
                <span className='Link whitecolor Name font-family-name onlymargin-left'>
                    {ContacTinfo.Phone}
                </span>
            </div>

            <div className='flex flexrow align-items margin-topandbottomOne' >
                <MdOutlineMap className='_icons screenColor' />
                <div className='flex flexcolumn  onlymargin-left '>
                    <span className='Link whitecolor Name font-family-name'>
                        {ContacTinfo.address}
                    </span>
                    <span className='Link whitecolor Name font-family-name'>
                        {ContacTinfo.city}
                    </span>

                </div>

            </div>




        </div>

    )
}


export default TheAddrss