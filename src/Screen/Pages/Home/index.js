import React, { Fragment } from 'react'
import OmOss from '../OmOss'
const FirstScreen = React.lazy(() => import('./FristScreen'))
import { OssScreen } from '../OssScreen'
import { SliderProjects } from '../SliderProjects'
import MetaDecorator from '../../Components/Header'
import Contact from '../Contact'
import TheLoading from '../../Components/Login'
import { data } from '../../Components/data/index'
import { useLocation } from 'react-router-dom'
  

const HomeScreen = () => {


    let Match = useLocation()?.pathname
    let condation = Match?.toString() === '/ar' || Match?.toString() === '/ar/' ? true : false




    // const xp = window.onscroll = function () {

    //     // setAddTop('postion-top')
    //     // window.scrollY >= NavBarScroll?.current?.offsetTop ? setAddTop('newPox') : setAddTop('postion-top')

    //     // setHiddenNavBar(false)
    //     if (window.scrollY >= 30) {
    //         console.log(window.scrollY)
    //         // return setHiddenNavBar(true)
    //     } else {

    //         // return setHiddenNavBar(false)
    //     }
    // }

    // xp()
    


    return (

        <Fragment>

            <MetaDecorator
                title={`Med Oss - ${condation ? data.title.AR : 'Professionell Webbyrå i sundsvall'}`}
                description={condation ? data?.title?.AR :data?.title?.EN }
                imageUrl={data?.image}
                imageAlt={condation ? data?.title?.AR :data?.title?.EN }
            />



            <div className='padding' >

        



                <React.Suspense fallback={<TheLoading />}>
                    <FirstScreen condation={condation} />
                </React.Suspense>


                <div className='margin-bottomDev ' />
                <div className='margin-bottomDev LineX antherbackground' />


                <OmOss condation={condation} />

                <div className='margin-bottomDev ' />
                <div className='margin-bottomDev LineX antherbackground' />
                <OssScreen />
 
                <div className='margin-bottomDev LineX antherbackground' />

                <SliderProjects />


                <div className='margin-bottomDev LineX antherbackground' />

                <Contact ChangeSprak={condation} />


            </div>

        </Fragment>




    )
}



export default HomeScreen


