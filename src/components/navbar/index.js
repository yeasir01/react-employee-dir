import React from 'react';
import './style.css'

const Navbar = (props)=>{
    return(
        <nav className="navbar navbar-light bg-info mb-4 custom-nav">
            <div className="container">
                <h1 className="navbar-brand text-light display-4" href="/">Employee Directory</h1>
                <div className="form-inline">
                    <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search..." 
                    aria-label="Search" 
                    onChange={props.handleInput}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;