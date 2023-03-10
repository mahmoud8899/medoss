import React from 'react'
export const Services = () => {

    let FirstPage = {
        title: 'Hemsida som håller dina kunder inlåsta',
        firstTitle: 'Våra tjänster',
        des: `med oss  härligaste webbyrå. Vi har sedan starten 2022, hjälpt företag med deras online närvaro och profil. Vi erbjuder tjänster som webbutveckling, grafisk design, SEO, och mycket mer.`

    }

    return (
        <div className='widthHalf'>
            <h1 className='Title font-family screenColor'>{FirstPage.firstTitle}</h1>
            <div className='margin-topandbottomOne'>
                <span className='des font-family colordes'>
                    {FirstPage.des}
                </span>
            </div>

        </div>
    )
}