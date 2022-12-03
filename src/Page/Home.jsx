import React from 'react'
import { Link } from 'react-router-dom'

function Home({males}) {
    return (
        <div className='container'>
 
            <div className='row'>
                {
                    males?.map((val) => {
                        return (
                            <div className='col-md-6 col-lg-4' key={val.idCategory}>
                                <div className="card my-2 shadow pb-3" >
                                    <img src={val.strCategoryThumb} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-center bg-secondary py-2 h3">{val.strCategory}</h5>
                                        <p className="card-text">{val.strCategoryDescription.slice(0, 45)} ...</p>
                                    </div>

                                    <div className='text-center'>
                                        
                                        <button className='btn btn-outline-primary'>
                                            <Link to={'/category/'+val.strCategory } >
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

export default Home
