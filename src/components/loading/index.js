import React from 'react';
import LoadImg from './load.gif'
import './style.css'

const Loader = () => {
    return (
        <div class="text-center">
            <img className="load-img" src={LoadImg} alt="loading" />
        </div>
    )
}

export default Loader