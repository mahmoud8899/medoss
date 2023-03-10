import React from 'react'
import './Screen/css/index.css'
import Footer from './Screen/Pages/footer'
import NavBar from './Screen/Pages/navbar/index'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";

const App = ({ route }) => {



    return (
        <div>
            <Helmet>
                <title>Med oss</title>
            </Helmet>
            <NavBar />
            <Outlet />
            <Footer />

        </div>
    )

}


App.propTypes = {
    route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
    route: null,
};

export default { element: App };
