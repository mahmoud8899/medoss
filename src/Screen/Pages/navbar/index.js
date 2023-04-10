import React, { useState } from 'react'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { ListNavBar, InfoContact } from '../../Components/data/index'
import { useLocation } from 'react-router-dom'



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
    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/ar' || Match?.toString() === '/ar/' ? true : false

    return (
        <div className='background padding'>
            <div className='flex flexrow-reverse '>

                <span className='Name font-family-name opacity transition cursor'>
                    {InfoContact.telephone}
                </span>
                <span className='Name font-family-name margin'>
                    |
                </span>
                <span className='Name font-family-name opacity transition cursor'>
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
                                <li className='Name font-family-name'key={index} >
                                    <Link  to={condation ? item.link.AR : item.link.EN} className='Link whitecolor' >
                                        {condation ? item.name.AR : item.name.EN}
                                    </Link>
                                </li>
                            ))}


                        </ul>
                    </div>
                </div>

            </nav>

        </div>

    )
}


export default NavBar