import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category() {

    const [posts, setPosts] = useState([])
    const { name } = useParams()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            .then(response => response.json())
            .then(json =>
                setPosts(json.meals)
            )
    }, [])
    return (
        <div className='container'>
            <button className='btn btn-dark'><Link to='/'>Go Back</Link></button>

            <div className="row">
                {
                    posts?.map((value) => {
                        return (
                            <div className='col-md-6 col-lg-4' key={value.idMeal}>
                                <div className="card my-2 shadow pb-3" >
                                    <img src={value.strMealThumb} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-center bg-secondary py-2 h3">{value.strMeal}</h5>
                                    </div>

                                    <div className='text-center'>
                                        
                                        <button className='btn btn-outline-primary'>
                                            <Link to={'/single/'+ value.idMeal}  >
                                                Send
                                            </Link>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category
