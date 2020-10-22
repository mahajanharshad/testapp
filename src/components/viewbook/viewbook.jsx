import React, { Component } from 'react';

class VIEWBOOK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookslist: [{ 'bookid': 1, 'title': 'You Don`\`t know Javascript', 'author': 'Kyle Samson', 'status': 'issued' }],
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

export default VIEWBOOK;