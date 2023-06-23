import React from "react";
import { Helmet } from "react-helmet";


let metaDecorator = {
  hostname: "https://medoss.se",
  twitterUsername: "@MedOss"
}



const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => {


  const condation = typeof window !== 'undefined' ? window.location.pathname + window.location.search : 'loading'

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:url"
        content={metaDecorator.hostname + condation}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content={metaDecorator.twitterUsername} />
      <meta property='og:type' content='https://medoss.se' />
      <meta name='keywords' 
      content='best website design,
       design website,
       best website building companies,
        website builder,
        website design companies,
         website design,
          website,
           webbyrå hemsida,
            webbyrå i sundsvall,
             webbdesign,
             app Utveckling,
              تصمیم
              , تصميم موقع
, تصميم مواقع الكترونية
,  تصميم متجر الكتروني
, شركة تصميم مواقع
,تصميم موقع ويب
, تصميم موقع احترافي'
      />
      <link rel="canonical" href={metaDecorator.hostname + condation} />

    </Helmet>
  )
}



export default MetaDecorator;
