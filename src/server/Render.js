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
        <html lang='sv'>

        <head>
        <title>Med Oss</title>      
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">   
        <link rel="icon" href=${Icon} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap" rel="stylesheet">

        <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@500&display=swap" rel="stylesheet">
    
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="/css/main.css"  />
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