
export const addBook = payload => ({
  type: 'ADD_BOOK',
  payload
})

export const returnBook = (bookid, bookList) => ({
    type: 'RETURN_BOOK',
    bookid,
    bookList
})