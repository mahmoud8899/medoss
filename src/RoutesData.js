import React from "react";
import App from './App'
const HomeLozy = React.lazy(() => import('./Screen/Pages/Home'))
const Webbdesign = React.lazy(() => import('./Screen/Pages/Webbdesign'))
const AppScreen = React.lazy(() => import('./Screen/Pages/AppScreen'))
const TheSEO = React.lazy(() => import('./Screen/Pages/SEO'))
const Design = React.lazy(() => import('./Screen/Pages/design'))
const EmailMarketing = React.lazy(() => import('./Screen/Pages/Email'))
const ContactScreen = React.lazy(() => import('./Screen/Pages/Contact/ContactScreen'))
const ServicesScreen = React.lazy(() => import('./Screen/Pages/OmOss/ServicesScreen'))
import TheLoading from "./Screen/Components/Login";






export const routersArray = [

    {
        element: <App.element />,
        path: '/',
        children: [
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <HomeLozy />
                </React.Suspense>,
                path: '/',
            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <Webbdesign />
                </React.Suspense>,
                path: '/web/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <AppScreen />
                </React.Suspense>,
                path: '/mobilapp/',

            },

            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <TheSEO />
                </React.Suspense>,
                path: '/seo/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <Design />
                </React.Suspense>,
                path: '/design/',

            },

            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <EmailMarketing />
                </React.Suspense>,
                path: '/e-postmarknadsforing/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>

                    <ContactScreen />

                </React.Suspense>,
                path: '/contact/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <ServicesScreen />
                </React.Suspense>,
                path: '/services/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <div>
                        error
                    </div>
                </React.Suspense>,
                path: '*',

            }
        ]
    }
]