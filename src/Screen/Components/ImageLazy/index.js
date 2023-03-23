import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = (props) => {
    const { image, alt ,className, key } = props
    return (
        <LazyLoadImage
            alt={alt}
            src={image} 
            className={className}
            effect="blur"
            width="xxx" 
            height="yyy"
            key={key}
           
        />
    )
}

export default MyImage;