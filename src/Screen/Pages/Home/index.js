import React from 'react'
import OmOss from '../OmOss'
import { FirstScreen } from './FristScreen'
import { OssScreen } from '../OssScreen'
import { SliderProjects } from '../SliderProjects'



const HomeScreen = () => {


    // first page 
    // services --- > OmOss
    // contact OmOss


    return (

        <div className='padding' >




            <FirstScreen />

            <div className='margin-bottomDev ' />
            <div className='margin-bottomDev LineX antherbackground' />


            <OmOss />

            <div className='margin-bottomDev ' />
            <div className='margin-bottomDev LineX antherbackground' />
            <OssScreen />
            <div className='margin-bottomDev ' />
            <div className='margin-bottomDev LineX antherbackground' />

            <SliderProjects />

            <div className='margin-bottomDev ' />
            <div className='margin-bottomDev LineX antherbackground' />

            {/* 

        


            <Contact /> */}



        </div>




    )
}



export default HomeScreen


