import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar
    = () => {
        return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <input placeholder='Search here...' style={{ border: "1px solid grey", padding: "5px", borderRadius: "5px" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div><Link to="/login">
                        <Button bg={'pink.100'} color={"blue.800"} marginRight={5}>Login</Button>
                    </Link></div>
                    <div><Link to="/signup">
                        <Button bg={'blue.100'} color={"blue.800"}>SignUp</Button>
                    </Link></div>
                </div>


            </div>
        )
    }


export const NavbarTwo
    = () => {
        return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <input placeholder='Search here...' style={{ border: "1px solid grey", padding: "5px", borderRadius: "5px" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div><Link to="">
                        <Button bg={'pink.100'} color={"blue.800"}>Add Inventory</Button>
                    </Link></div>

                </div>


            </div>
        )
    }

export default Navbar
