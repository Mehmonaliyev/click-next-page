import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Category from './Components/Category'
import Single from './Single/Single'

function App(props) {

    const [males, setMales] = useState([])
    // const [idP, setIdP] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(json =>
                setMales(json.categories)
            )
    }, [])

    // console.log(males);
    return (
        <Routes>
            <Route path='/' element={<Home males={males} />} />
            <Route path='/category/:name' element={<Category   />} />
            <Route path='/single/:idP' element={<Single  />} />
        </Routes>
    )
}

export default App
