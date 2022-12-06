import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Category from './Components/Category'
import Single from './Single/Single'







function App(props) {

    const setPos = (name)=>{
        setPos(name)
    }
    const [males, setMales] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(json =>
                setMales(json.categories)
            )
    }, [])

    return (
        <>
            <Nav
            setPos={setPos}
            />
            <h2>Updated: {props.updated}</h2>

            <Routes>
                <Route path='/' element={<Home males={males} />} />
                <Route path='/category/:name' element={<Category />} />
                <Route path='/single/:idP' element={<Single />} />
            </Routes>
        </>
    )
}

export default App
