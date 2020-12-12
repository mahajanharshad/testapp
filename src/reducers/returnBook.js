const returnBook = (state = [], action) => {
    console.log("******************", action);
    switch (action.type) {
        case 'RETURN_BOOK':
            return state;
            break;
        default:
            return state
    }
}

export default returnBook;