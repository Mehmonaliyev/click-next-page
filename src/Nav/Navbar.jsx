import React from "react";
import { useState } from "react";
function Nav() {

    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);


    const handleChange = (event) => {
        setMessage(event.target.value);
    };
 

    const handleClick = () => {
        setUpdated(message);
    };

    // useEffect(() => {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`)
    //         .then(response => response.json())
    //         .then(json =>
    //             setSearch(json.meals)
    //         )
    // }, [])


    return (
        <nav className="navbar navbar-expand-lg bg-light">

            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" value={message} onChange={handleChange} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav;