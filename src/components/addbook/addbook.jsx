import React, { Component } from 'react';

class ADDBOOK extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container add-book">
                <h2 className="col-md-12">Add Book</h2>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="bookid">Book Id:</label>
                            <input type="number" className="form-control" id="bookid" placeholder="Enter bookid" name="bookid" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Title:</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Author:</label>
                            <input type="text" className="form-control" id="author" placeholder="Enter author" name="author" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Status:</label>
                            <input type="text" className="form-control" id="status" placeholder="Enter status" name="status" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                        <button type="button" className="btn btn-default col-md-offset-1">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ADDBOOK;