import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import Router from '../Router';
import { Helmet } from 'react-helmet';
import Icon from './medoss.ico'





export default function Render(req) {


  const appString = renderToString(

      <StaticRouter location={req.url}  >
          <Router />
      </StaticRouter>

  )


  const helmet = Helmet.renderStatic()

  const html = `<!DOCTYPE html>
        <html lang='ar'>

        <head>
        <title>Med Oss</title>      
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="theme-color" content="#d8bc64" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">   
        <link rel="icon" href=${Icon} />
        <meta name="google-site-verification" content="MefkQMxS9LeayJ8MPstMgO85x8jW5Y6deeqVmA4DGGs" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="/css/main.css"  />
        <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NVP65MX');</script>
<!-- End Google Tag Manager -->

    </head>

    <body ${helmet.bodyAttributes.toString()}>
          <div id='medoss'>
             ${appString}
          </div>
          <script src="/client/bundle.js" defer ></script>
          <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NVP65MX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        </body>
      </html>
        `


  return html

}