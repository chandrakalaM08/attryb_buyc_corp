import { Button } from '@chakra-ui/react'
import React from 'react'


const Navbar
    = () => {
        return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <input placeholder='Search here...' />
                </div>
                <div><Button bg={'pink.100'} color={"blue.800"}>Login</Button></div>

            </div>
        )
    }

export default Navbar
