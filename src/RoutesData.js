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
import EmptyScreen from "./Screen/Pages/EmptyScreen";






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
                path: '/ar?/',
            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <Webbdesign />
                </React.Suspense>,
                path: '/web/ar?/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <AppScreen />
                </React.Suspense>,
                path: '/mobilapp/ar?/',

            },

            {
                element: <React.Suspense fallback={<TheLoading />}>
                    <TheSEO />
                </React.Suspense>,
                path: '/seo/ar?/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <Design />
                </React.Suspense>,
                path: '/design/ar?/',

            },

            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <EmailMarketing />
                </React.Suspense>,
                path: '/e-postmarknadsforing/ar?/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>

                    <ContactScreen />

                </React.Suspense>,
                path: '/contact/ar?/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                    <ServicesScreen />
                </React.Suspense>,
                path: '/services/ar?/',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                   <EmptyScreen   />
                </React.Suspense>,
                path: '*',

            },
            {
                element: <React.Suspense fallback={<div className="devloading">
                    <TheLoading />
                </div>}>
                   <EmptyScreen   />
                </React.Suspense>,
                path: '/client/bundle?.js',

            }



         
        ]
    }
]