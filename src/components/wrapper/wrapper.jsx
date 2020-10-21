import React, { Component } from 'react';
import ADDBOOK from '../addbook/addbook';
import DELETEBOOK from '../deletebook/deletebook';
import ISSUEBOOK from '../issuebook/issuebook';
import RETURNBOOK from '../returnbook/returnbook';
import VIEWBOOK from '../viewbook/viewbook';

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
                            <a className="navbar-brand" href="#">WELCOME TO MY LIBRARY</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">ADD BOOK</a></li>
                            <li><a href="#">VIEW BOOK</a></li>
                            <li><a href="#">ISSUE BOOK</a></li>
                            <li><a href="#">RETURN BOOK</a></li>
                            <li><a href="#">DELETE BOOK</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default WRAPPER;
