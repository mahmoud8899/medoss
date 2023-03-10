import React from "react";
import App from './App'
import HomeScreen from "./Screen/Pages/Home";
import Webbdesign from "./Screen/Pages/Webbdesign";
import {AppScreen} from './Screen/Pages/AppScreen'
import { TheSEO } from './Screen/Pages/SEO'
import { Design } from './Screen/Pages/design'
import { EmailMarketing } from './Screen/Pages/Email'
import { ContactScreen } from './Screen/Pages/Contact/ContactScreen'
import { ServicesScreen } from './Screen/Pages/OmOss/ServicesScreen'





export const routersArray = [

    {
        element: <App.element />,
        path: '/',
        children: [
            {
                element: <HomeScreen />,
                path: '/',
            },
            {
                element : <Webbdesign.element />,
                path : '/web/',
            
            },
            {
                element : <AppScreen/>,
                path : '/mobilapp/',
            
            },
  
            {
                element : <TheSEO/>,
                path : '/seo/',
            
            },
            {
                element : <Design/>,
                path : '/design/',
            
            },
       
            {
                element : <EmailMarketing />,
                path : '/e-postmarknadsforing',
            
            },
            {
                element : <ContactScreen />,
                path : '/contact',
            
            },
            {
                element : <ServicesScreen />,
                path : '/services',
            
            },
        ]
    }
]