import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"

const Sidebar = () => {




    const [price, setprice] = useState([])

    const [color, setColor] = useState("")



    function handleprice() { }

    function handlecolor() { }


    return (
        <div>
            <div>
                <Button> Add Inventory</Button>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <h3 style={{ fontWeight: "600" }}>Filter by price</h3>
            <div>
                <input type='checkbox' value={"200000-300000"}
                    onChange={handleprice}
                    checked={price.includes("200000-300000")} />
                <label>2Lac-3Lac</label>
            </div>
            <div>
                <input type='checkbox' value={"300000-400000"}
                    onChange={handleprice}
                    checked={price.includes("300000-400000")} />
                <label>3Lac-4Lac</label>
            </div>
            <div>
                <input type='checkbox' value={"400000-500000"}
                    onChange={handleprice}
                    checked={price.includes("400000-500000")} />
                <label>4Lac-5Lac</label>
            </div>
            <div>
                <input type='checkbox' value={"500000-600000"}
                    onChange={handleprice}
                    checked={price.includes("500000-600000")} />
                <label>5Lac-6Lac</label>
            </div>
            <div>
                <input type='checkbox' value={"600000-800000"}
                    onChange={handleprice}
                    checked={price.includes("600000-800000")} />
                <label>6Lac-8Lac</label>
            </div>
            <div>
                <input type='checkbox' value={"800000-2000000"}
                    onChange={handleprice}
                    checked={price.includes("800000-200000")} />
                <label>8Lac+</label>
            </div>

            <br />
            <h3 style={{ fontWeight: "600" }}>Filter by color</h3>
            <div>
                <input type='checkbox' value={"red"}
                    onChange={handlecolor}
                    checked={price.includes("red")} />
                <label>Red</label>
            </div>
            <div>
                <input type='checkbox' value={"blue"}
                    onChange={handlecolor}
                    checked={price.includes("blue")} />
                <label>Blue</label>
            </div>
            <div>
                <input type='checkbox' value={"black"}
                    onChange={handlecolor}
                    checked={price.includes("black")} />
                <label>Black</label>
            </div>
            <div>
                <input type='checkbox' value={"grey"}
                    onChange={handlecolor}
                    checked={price.includes("grey")} />
                <label>Grey</label>
            </div>
            <div>
                <input type='checkbox' value={"white"}
                    onChange={handlecolor}
                    checked={price.includes("white")} />
                <label>White</label>
            </div>

            <div>
                <input type='checkbox' value={"Yes"}
                    onChange={handlecolor}
                    checked={price.includes("Yes")} />
                <label>Other</label>
            </div>

            <br />



        </div>
    )
}

export default Sidebar


// const DIV = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: baseline;
//   padding: 15px;
//   bcolor-right: 1px solid black;
//   min-height: 80vh;
// `