import React from 'react';
import './style.css'

const Navbar = ()=>{
    return(
        <nav className="navbar navbar-light bg-info mb-4 custom-nav">
            <div className="container">
                <h1 className="navbar-brand text-light" href="/">Employee Directory</h1>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search by name..." aria-label="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;