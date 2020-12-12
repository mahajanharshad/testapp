import React, { Component } from 'react';
import { connect } from 'react-redux';

class VIEWBOOK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookslist: this.props.booksList.addedbooks
        }
    }

    render() {
        const { bookslist } = this.state; 

        return (
            <div className="container view-book">
                <h2 className="col-md-12">View Book</h2>
                <div className="table-responsive col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Book Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookslist && bookslist.map((bookData) => {
                                return (
                                    <tr>
                                        <td>{bookData.bookid}</td>
                                        <td>{bookData.title}</td>
                                        <td>{bookData.author}</td>
                                        <td>{bookData.status}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}


const mapStateToProps = function(state) {
    return {
        booksList: state 
    }
}

export default connect(mapStateToProps, null)(VIEWBOOK);