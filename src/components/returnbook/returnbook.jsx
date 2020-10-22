import React, { Component } from 'react';

class RETURNBOOK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookid: 0,
            status: '',
            returnBookList: [{ 'bookid': 1, 'status': '' }],
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
        const {bookid, issuedto, returnBookList} = this.state;

        if(bookid.length){
            var newItem = {'bookid': bookid, 'status': 'Available'};
            returnBookList.push(newItem);
            this.setState({
                returnBookList
            })
            var form = document.getElementById("RetunBookForm");
            form.reset();
        }
    }

    render() {
        return (
            <div className="container return-book">
                <h2 className="col-md-12">Return Book</h2>
                <div className="col-md-6">
                    <form id="RetunBookForm">
                        <div className="form-group">
                            <label htmlFor="bookid">Book Id:</label>
                            <input type="number" className="form-control" id="bookid" placeholder="Enter bookid" name="bookid" onChange={(e)=> this.onChangeHandler(e)} />
                        </div>
                        <button type="submit" className="btn btn-default" onClick={(e)=>this.onSubmitHandler(e)}>Return</button>
                        <button type="button" className="btn btn-default col-md-offset-1">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RETURNBOOK;