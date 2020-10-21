import React, { Component } from 'react';

class VIEWBOOK extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container view-book">
                <h2 className="col-md-12">View Book</h2>
                <div className="table-responsive col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Anna</td>
                                <td>Pitt</td>
                                <td>35</td>
                                <td>New York</td>
                                <td>USA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default VIEWBOOK;