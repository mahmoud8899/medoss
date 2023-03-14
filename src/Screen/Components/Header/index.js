import React from "react";
import { Helmet } from "react-helmet";


let metaDecorator = {
  hostname: "http://localhost:4000",
  twitterUsername : "@MedOss"
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
      <meta property='og:type' content='http://localhost:4000/' />
      <link rel="canonical" href={metaDecorator.hostname + condation } />
    </Helmet>
  )
}



export default MetaDecorator;
