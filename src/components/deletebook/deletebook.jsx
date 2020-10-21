import React, { Component } from 'react';

class DELETEBOOK extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container delete-book">
                <h2 className="col-md-12">Delete Book</h2>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label for="bookid">Book Id:</label>
                            <input type="number" className="form-control" id="bookid" placeholder="Enter bookid" name="bookid" />
                        </div>
                        <button type="submit" className="btn btn-default">Delete</button>
                        <button type="button" className="btn btn-default col-md-offset-1">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DELETEBOOK;