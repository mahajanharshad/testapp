import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../actions';

class ADDBOOK extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            bookid: 0,
            title: '',
            author: '',
            status: '',
            bookslist: this.props.booksList.addedbooks
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
        const { bookid, title, author, status, bookslist } = this.state;

        if (bookid.length && title.length && author.length && status.length) {
            var newItem = { 'bookid': bookid, 'title': title, 'author': author, 'status': status };
            this.props.addBook(newItem)
            var form = document.getElementById("addForm");
            form.reset();
        }
    }

    render() {
        return (
            <div className="container add-book">
                <h2 className="col-md-12">Add Book</h2>
                <div className="col-md-6">
                    <form id="addForm">
                        <div className="form-group">
                            <label htmlFor="bookid">Book Id:</label>
                            <input type="number" className="form-control" id="bookid" placeholder="Enter bookid" name="bookid" onChange={(e) => this.onChangeHandler(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Title:</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" onChange={(e) => this.onChangeHandler(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Author:</label>
                            <input type="text" className="form-control" id="author" placeholder="Enter author" name="author" onChange={(e) => this.onChangeHandler(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Status:</label>
                            <input type="text" className="form-control" id="status" placeholder="Enter status" name="status" onChange={(e) => this.onChangeHandler(e)} />
                        </div>
                        <button type="submit" className="btn btn-default" onClick={(e) => this.onSubmitHandler(e)} >Submit</button>
                        <button type="button" className="btn btn-default col-md-offset-1">Cancel</button>
                    </form>
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

const mapDispatchToProps = {
    addBook
};

export default connect(mapStateToProps, mapDispatchToProps)(ADDBOOK);