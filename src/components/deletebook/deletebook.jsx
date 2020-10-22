import React, { Component } from 'react';

class DELETEBOOK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookid: 1,
            bookslist: [
                { 'bookid': 1, 'title': 'You Don`\`t know Javascript', 'author': 'Kyle Samson', 'status': 'issued' },
                { 'bookid': 2, 'title': 'You Don`\`t know Javascript', 'author': 'Kyle Samson', 'status': 'issued' }],
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
        const { bookid, bookslist } = this.state;
        var self= this;

        if (bookid.length) {
            let bookslistnew = bookslist.filter(function (e) {
                return e.bookid !== parseInt(self.state.bookid);
            });
            console.log(bookslistnew);

            this.setState({
                bookslist: bookslistnew
            })
            var form = document.getElementById("DeleteBookForm");
            form.reset();
        }
    }

    render() {
        return (
            <div className="container delete-book">
                <h2 className="col-md-12">Delete Book</h2>
                <div className="col-md-6">
                    <form id="DeleteBookForm">
                        <div className="form-group">
                            <label htmlFor="bookid">Book Id:</label>
                            <input type="number" className="form-control" id="bookid" placeholder="Enter bookid" name="bookid" onChange={(e)=> this.onChangeHandler(e)} />
                        </div>
                        <button type="submit" className="btn btn-default" onClick={(e)=>this.onSubmitHandler(e)}>Delete</button>
                        <button type="button" className="btn btn-default col-md-offset-1">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DELETEBOOK;