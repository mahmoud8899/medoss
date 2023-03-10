import React from 'react'
import './index.css'

export const SliderProjects = () => {



    let data = [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2021/12/featured-image-living-room.jpeg',
        'https://static.dezeen.com/uploads/2017/04/ant-house-ma-style-architects-pinterest_roundups__architecture_houses_dezeen_sq-b.jpg',
   
    ]

    return (

        <div className='padding overflow'>
        <div className="slider">
            <div className="slide-track">
                {data.map((item) => (
                    <img src={item} className='slide' key={item} />
                ))}

            </div>
        </div>
        </div>
    )
}