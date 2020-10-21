import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class WRAPPER extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" >WELCOME TO MY LIBRARY</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a ><NavLink to={'addbook'}>ADD BOOK</NavLink></a></li>
                            <li><a ><NavLink to={'viewbook'}>VIEW BOOK</NavLink></a></li>
                            <li><a ><NavLink to={'issuebook'}>ISSUE BOOK</NavLink></a></li>
                            <li><a ><NavLink to={'returnbook'}>RETURN BOOK</NavLink></a></li>
                            <li><a ><NavLink to={'deletebook'}>DELETE BOOK</NavLink></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default WRAPPER;
