import Navbar from './Navbar'
import React from 'react'
import Footer from './Footer'
import '../App.css'


const Layout = (props) => (
    <div>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
        <Footer />
    </div>
);

export default Layout;