import React, { Fragment } from 'react'
const Footer = React.lazy(() => import('./Screen/Pages/footer'))
const NavBar = React.lazy(() => import('./Screen/Pages/navbar/index'))
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Screen/css/index.css'
import TheLoading from './Screen/Components/Login'


const App = ({ route }) => {

    return (
        <Fragment>
            <React.Suspense fallback={<TheLoading />}>
                <NavBar />
            </React.Suspense>

            <Outlet />
            <React.Suspense fallback={<TheLoading />}>
                <Footer />
            </React.Suspense>



        </Fragment>
    )

}


App.propTypes = {
    route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
    route: null,
};

export default { element: App };
