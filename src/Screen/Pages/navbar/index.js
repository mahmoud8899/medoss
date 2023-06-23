import React, { useState } from 'react'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { ListNavBar, InfoContact, language } from '../../Components/data/index'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdLanguage } from 'react-icons/md'



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
    let condation = Match.indexOf('/ar') === -1 ? false : true

    let navigation = useNavigate()



   

     // change language ...
    function ChangeLang(item) {

        if (item === '/ar/' || item === '/ar') {

            if (!condation) navigation(`${Match}ar/`)

        } else {

            let TheCondation = '/ar/' ? '/ar/' : '/ar'

            navigation(Match?.replace(TheCondation, '/'))
        }

    }


    return (
        <div className='background padding'>
            <div className='flex flexrow-reverse '>

                <span className='Name font-family-name opacity transition cursor'>
                    <a href={`tel:${InfoContact.telephone}`} className='Link whitecolor' >{InfoContact.telephone} </a>
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

            <div className='flex align-items  margin-topValdation'>
                <MdLanguage className='_icons screenColor' />
                {language?.map((item, index) => (
                    <span onClick={() => ChangeLang(item.link)} className='onlymargin-left Name font-family-name opacity transition cursor' key={index}> / {item.name}  </span>
                ))}
            </div>



            <nav className='flex flexrow align-items  flexwrap'>
                <div className='firstwidth dev-size flex flexrow align-items space-between'>

                    <Logo condation={condation} />
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
                                <li className='Name font-family-name' key={index} >
                                    <Link to={condation ? item.link.AR : item.link.EN} className='Link whitecolor' >
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