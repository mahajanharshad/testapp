const addedbooks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            var newItem = { 'bookid': action.payload.bookid, 'title': action.payload.title, 'author': action.payload.author, 'status': action.payload.status };
            state.push(newItem)
            return state;
            break;
        default:
            return state
    }
}

export default addedbooks;