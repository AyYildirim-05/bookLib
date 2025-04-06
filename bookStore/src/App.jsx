import { useEffect, useMemo, useState } from 'react'

import BookList from './components/BookList'

import './App.css'
import BookFilter from './components/BookFilter'

function App() {
  const [books,setBooks] =useState([])
  useEffect(()=>{
    const fetcingBook= async ()=>{
      const books = await fetch('http://gutendex.com/books/')
      const response = await books.json()
      setBooks(response.results)
    }
    fetcingBook()
  },[])

  // console.log(JSON.stringify(books,null,2))
const [filterParam,setFilterParam] = useState('')
// console.log(filterParam)
const filteredBooks = useMemo(()=> books?.filter(b => b.title.toLowerCase().includes( filterParam.toLowerCase())
),[filterParam])
console.log(filteredBooks)
  return (
    <>
      <BookFilter setFilterParam={setFilterParam} filterParam={filterParam}/>
      <BookList books={filteredBooks.length ===0 ? books:filteredBooks}/>
    
    </>
  )
}

export default App
