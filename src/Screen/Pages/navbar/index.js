import React, { useState } from 'react'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { ListNavBar, InfoContact } from '../../Components/data/index'



const NavBar = () => {

    const [css, setCss] = useState({
        menubar: 'menu-btn',
        hidden: 'hidden'
    })

    const Change = () => {
        if (css.menubar === 'menu-btn') {
            setCss({
                ...css,
                menubar: 'menu-btn open',
                hidden: 'hidden open'
            })
        } else {
            setCss({
                ...css,
                menubar: 'menu-btn',
                hidden: 'hidden'
            })
        }
    }


    return (
        <div className='background padding'>
            <div className='flex flexrow-reverse '>

                <span className='Name font-family opacity transition cursor'>
                    {InfoContact.telephone}
                </span>
                <span className='Name font-family margin'>
                    |
                </span>
                <span className='Name font-family opacity transition cursor'>
                    <a href={`mailto:${InfoContact.email}`} className='Link whitecolor'>
                        {InfoContact.email}
                    </a>
                </span>

            </div>
            <nav className='flex flexrow align-items  flexwrap'>
                <div className='firstwidth dev-size flex flexrow align-items space-between'>

                    <Logo />
                    <div onClick={Change} className='widthbar flex  flexrow align-items' >
                        <div className={css.menubar}  >
                            <div className='menu-btn__burger' />
                        </div>
                    </div>

                </div>
                <div className={css.hidden}>
                    <div className='firstwidth Ul-Size'>
                        <ul className='flex flexrow space-between align-items text-transform cursor'>
                            {ListNavBar?.map((item, index) => (
                                <Link key={index} to={item.link} className='Link whitecolor' >

                                    <li className='Name font-family' >
                                        {item.name}
                                    </li>
                                </Link>
                            ))}


                        </ul>
                    </div>
                </div>

            </nav>

        </div>

    )
}


export default NavBar