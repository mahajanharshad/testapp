import React, { Component } from 'react';

class ISSUEBOOK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookid: 0,
            issuedto: '',
            issuerList: [{ 'bookid': 1, 'issuedto': '' }],
        }
    }

    onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]: value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {bookid, issuedto, issuerList} = this.state;

        if(bookid.length && issuedto.length){
            var newItem = {'bookid': bookid, 'issuedto':issuedto};
            issuerList.push(newItem);
            this.setState({
                issuerList
            })
            var form = document.getElementById("IssueBookForm");
            form.reset();
        }
    }

    render() {
        return (
            <div className="container issue-book">
                <h2 className="col-md-12">Issue Book</h2>
                <div className="col-md-6">
                    <form id="IssueBookForm">
                        <div className="form-group">
                            <label htmlFor="bookid">Book Id:</label>
                            <input type="number" className="form-control" id="bookid" placeholder="Enter bookid" name="bookid" onChange={(e)=> this.onChangeHandler(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bookid">Issued to:</label>
                            <input type="text" className="form-control" id="issuesto" placeholder="Issued to" name="issuedto" onChange={(e)=> this.onChangeHandler(e)} />
                        </div>
                        <button type="submit" className="btn btn-default" onClick={(e)=>this.onSubmitHandler(e)}>Issue</button>
                        <button type="button" className="btn btn-default col-md-offset-1">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ISSUEBOOK;