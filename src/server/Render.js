import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import Router from '../Router';
import { Helmet } from 'react-helmet';
import Icon from './medoss.ico'
import {UrlImage} from '../Utils/UrlImage'




export default function Render(req) {


  const appString = renderToString(

      <StaticRouter location={req.url}  >
     
          <Router />

      </StaticRouter>

  )


  const helmet = Helmet.renderStatic()

  const html = `<!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
        <head>
        <title>Med Oss</title>         
        <meta property="og:description" content="Med Oss är en app- och webbyrå som hjälper dig designa och utveckla din webbplats, app eller ditt spel. Vi är en heltäckande digital byrå med mycket bred kompetens. Genom kundnära samarbete, agila arbetssätt och fokus på lönsamhet tar vi ditt projekt från idé till färdig produkt." />
        <meta property="og:image" content=${UrlImage.thepaper}  />
        <meta property="og:image:url"  content=${UrlImage.thepaper}   />
        <meta property="twitter:image" content=${UrlImage.thepaper}  />
        <link rel="icon" href=${Icon} />

        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="/css/main.css">
    </head>

    <body ${helmet.bodyAttributes.toString()}>
          <div id='medoss'>
             ${appString}
          </div>
          <script src="/client/bundle.js" defer ></script>
        </body>
      </html>
        `


  return html

}