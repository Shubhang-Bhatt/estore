import React from "react";
import './_top-nav.scss'
const TopNav = () => {
    return (
        <div>
            <div className='header bg-dark'>
                <div className='row top-nav-row'>
                    <div className='brand my-1'>
                        <h1>eStore</h1>
                    </div>
                    <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
                        <div className='dropdown p-0 m-0'>
                            <select className='select-btn w-100 m-0 p-0'>
                                <option>Men</option>
                                <option>Women</option>
                                <option>Kids</option>
                            </select>
                        </div>
                        <input placeholder='Search...' className='form-control' />
                        <button>
                            <i className='fa fa-search'></i>
                        </button>
                    </div>
                    <div className='login-container p-0'>
                        <i className='fa fa-user-circle user-icon ' />
                        <h5><a href='#'>Login</a></h5>/
                        <h5><a href='#'>Register</a></h5>
                    </div>
                    <div className='cart-whishlist'>
                        <ul className='p-0'>
                            <li className='list-icon'>
                                <i className='fa fa-heart' />
                            </li>
                            <li className='list-icon'>
                                <i className='fa fa-cart-shopping' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav