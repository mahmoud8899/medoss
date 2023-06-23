import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = (props) => {
    const { condation } = props


    return (
        <Link to={condation ? '/ar/' : '/'} className='Link'>
            <h2 className='Title font-family whitecolor'>
                med <span>oss</span>

            </h2>
        </Link>

    )
}


