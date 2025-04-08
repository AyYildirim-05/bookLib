function BookItem(props) {
    const { book } = props;
    return (
        <div className="max-w-4xl mx-auto bg-amber-600 mb-6 py-8 px-6 rounded-2xl shadow-lg space-y-6">
            <div>
                <h4 className="text-2xl font-bold text-white">Title:</h4>
                <p className="text-white text-lg">{book.title} ({book.id})</p>
            </div>

            <div>
                <h5 className="text-lg font-bold text-white">Summary:</h5>
                <p className="text-sm text-gray-200">{book.summaries}</p>
            </div>

            <div>
                <h5 className="text-lg font-bold text-white">Languages:</h5>
                <p className="text-sm text-gray-200">{book.languages}</p>
            </div>

            <div>
                <h5 className="text-lg font-bold text-white">Authors:</h5>
                <div className="space-y-2">
                    {book.authors.map((author, index) => (
                        <p key={index} className="text-sm text-gray-200">
                            {author.name} {`${author.birth_year}–${author.death_year}`}
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <h5 className="text-lg font-bold text-white">Shelf:</h5>
                <div className="space-y-2">
                    {book.bookshelves.map((shelf, index) => (
                        <p key={index} className="text-sm text-gray-200">{shelf.Browsing}</p>
                    ))}
                </div>
            </div>

            <div>
                <h5 className="text-lg font-bold text-white">Subjects:</h5>
                <div className="space-y-2">
                    {book.subjects.map((subject, index) => (
                        <p key={index} className="text-sm text-gray-200">{subject}</p>
                    ))}
                </div>
            </div>

            <div>
                <h5 className="text-lg font-bold text-white">Details:</h5>
                <div className="text-sm text-gray-200 space-y-1">
                    <p>Download count: <span className="font-semibold">{book.download_count}</span></p>
                    <p>Copyright: <span className="font-semibold">{book.copyright ? 'Yes' : 'No'}</span></p>
                    <p>Media type: <span className="font-semibold">{book.media_type}</span></p>
                </div>
            </div>
        </div>
    );
}

export default BookItem;
