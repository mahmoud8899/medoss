import React from 'react'
import MyImage from '../../Components/ImageLazy'
import './index.css'
import { UrlImage } from '../../../Utils/UrlImage'

export const SliderProjects = () => {



  let data = [
    {
      _id: 1,
      image: UrlImage.theimage1,
      name: 'The most beautiful design'
    },
    {
      _id: 2,
      image: UrlImage.theimage2,
      name: 'The most beautiful design'
    },
    {
      _id: 3,
      image: UrlImage.theimage3,
      name: 'The most beautiful design'
    },
    {
      _id: 4,
      image: UrlImage.theimage4,
      name: 'The most beautiful design'
    },

    {
      _id: 5,
      image: UrlImage.theimage6,
      name: 'The most beautiful design'
    },
    {
      _id: 6,
      image: UrlImage.theimage7,
      name: 'The most beautiful design'
    },
    {
      _id: 7,
      image: UrlImage.theimage8,
      name: 'The most beautiful design'
    },
    {
      _id: 8,
      image: UrlImage.theimage9,
      name: 'The most beautiful design'
    }
  ]

  return (

    <div className='padding overflow'>
      <div className="slider">
        <div className="slide-track">
          {data.map((item, Index) => (
            <div key={item._id}>
              <MyImage
                image={item.image}

                className='slide'
                alt={item?.name}
              />
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}