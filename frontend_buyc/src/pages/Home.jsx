import React from 'react'
import Navbar from '../components/Navbar'

import Inventory from '../components/Inventory'
import Sidebar from '../components/Sidebar'


const Home = () => {
    return (
        <div>
            <br />
            <h1 style={{ fontSize: "25px", fontWeight: "700" }}>Welcome to BUYC Corp</h1>
            <br />
            <Navbar />
            <br />
            <hr />
            <div style={{ display: "flex", margin: "20px" }}>
                <div style={{ width: "680px" }}> <Sidebar /> </div>

                <div><Inventory /></div>
            </div>
        </div>
    )
}

export default Home