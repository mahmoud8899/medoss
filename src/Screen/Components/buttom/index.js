import React from 'react'
import { HiOutlineArrowSmRight } from "react-icons/hi";
const TheButtom = (props) => {
    const { Title, ClassBox ,TitleCss, IconCss } = props
    return (
        <div className={ClassBox ? ClassBox : 'antherbackground padding  flex align-items margin-top-two  margin-bottomDev border-radius space-between opacity transition cursor'}>
            <span className={TitleCss ? TitleCss : 'Name font-family white'}>{Title ? Title : 'Skicka'}</span>

            <HiOutlineArrowSmRight className={IconCss ? IconCss : 'white _icons'} />

        </div>
    )
}
export default TheButtom