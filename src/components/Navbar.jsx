import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return (
            <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>ExerTracker</Link>
                <div className='navbar-collapse collapse'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link'>Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link'>Add Exercise Log</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='nav-link'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar