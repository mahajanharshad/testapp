import React, { Component } from 'react';

class ISSUEBOOK extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container issue-book">
                <h2 className="col-md-12">Issue Book</h2>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label for="bookid">Book Id:</label>
                            <input type="number" className="form-control" id="bookid" placeholder="Enter bookid" name="bookid" />
                        </div>
                        <div className="form-group">
                            <label for="bookid">Issued to:</label>
                            <input type="number" className="form-control" id="issuesto" placeholder="Issued to" name="issueid" />
                        </div>
                        <button type="submit" className="btn btn-default">Issue</button>
                        <button type="button" className="btn btn-default col-md-offset-1">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ISSUEBOOK;