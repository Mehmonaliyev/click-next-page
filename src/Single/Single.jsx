import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Single() {
    const { idP } = useParams()
    const [idPmeals , setPmeals] = useState({})

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idP}`)
            .then(response => response.json())
            .then(json =>
                setPmeals(json.meals[0])
            )
    }, [])
    console.log(idPmeals);
    return (
        <>
        {/* {idP} */}
            <div className='col-md-6 col-lg-4 mx-auto' >
                <div className="card my-2 shadow pb-3" >
                    <img src={idPmeals.strMealThumb} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center bg-secondary py-2 h3">{idPmeals.strCategory}</h5>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-outline-primary'>
                            <Link to='/'  >
                                Go Back
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single
