import React, { Component } from 'react';

class RETURNBOOK extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container return-book">
                <h2 className="col-md-12">Return Book</h2>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="bookid">Book Id:</label>
                            <input type="number" className="form-control" id="bookid" placeholder="Enter bookid" name="bookid" />
                        </div>
                        <button type="submit" className="btn btn-default">Return</button>
                        <button type="button" className="btn btn-default col-md-offset-1">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RETURNBOOK;