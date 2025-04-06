import BookItem from "./bookItem"

function BookList(props) {
    const {books} = props
    return(
        <>
        <h3>
            Book
        </h3>
        {books?.map(book=><BookItem book={book} key={book.id}/>
        )}
      </>
    )
}

export default BookList