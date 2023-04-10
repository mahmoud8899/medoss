import React, { Fragment } from 'react'
import OmOss from '../OmOss'
const FirstScreen = React.lazy(() => import('./FristScreen'))
import { OssScreen } from '../OssScreen'
import { SliderProjects } from '../SliderProjects'
import MetaDecorator from '../../Components/Header'
import Contact from '../Contact'
import TheLoading from '../../Components/Login'
import { data } from '../../Components/data/index'


const HomeScreen = () => {





    


    return (

        <Fragment>

            <MetaDecorator
                title='Med Oss - Professionell Webbyrå i sundsvall'
                description={data?.title}
                imageUrl={data?.image}
                imageAlt={data?.title}

            />



            <div className='padding' >

        



                <React.Suspense fallback={<TheLoading />}>
                    <FirstScreen />
                </React.Suspense>


                <div className='margin-bottomDev ' />
                <div className='margin-bottomDev LineX antherbackground' />


                <OmOss />

                <div className='margin-bottomDev ' />
                <div className='margin-bottomDev LineX antherbackground' />
                <OssScreen />
 
                <div className='margin-bottomDev LineX antherbackground' />

                <SliderProjects />


                <div className='margin-bottomDev LineX antherbackground' />

                <Contact />


            </div>

        </Fragment>




    )
}



export default HomeScreen


