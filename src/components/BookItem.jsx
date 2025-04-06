function BookItem(props) {
    const {book} = props
    return(
        <div className="justify-center bg-amber-600 mb-2 py-12 rounded-2xl">
            <h4>{book.title} ({book.id})</h4>
            <p>{book.summaries}</p>
            <p>{book.languages}</p>
            <div>{book.authors.map((author, index) => 
            (<p key={index}> {author.name} {`${author.birth_year}–${author.death_year}`}</p>)
                )}</div>
            <div><h4>Shelf</h4>{book.bookshelves.map((shelf, index) => (<p key={index}>{shelf.Browsing}</p>))}</div>
            <div>{book.subjects.map((subject, index) => (<p key={index}>{subject}</p>))}</div>
            <p>Download count: {book.download_count}</p>
            <p>Copyright: {book.copyright ? 'Yes' : 'No'}</p>
            <p>Media type: {book.media_type}</p>
        </div>
    )
}
export default BookItem
