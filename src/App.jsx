import { useEffect, useMemo, useState } from 'react'

import BookList from './components/BookList'

import './App.css'
import BookFilter from './components/BookFilter'

function App() {
  const [books,setBooks] =useState([])
  const [isLoading,setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    const fetcingBook= async ()=>{
      const books = await fetch('http://gutendex.com/books/')
      const response = await books.json()
      setBooks(response.results)
      setIsLoading(false)
    }
    fetcingBook()
  },[])

const [filterParam,setFilterParam] = useState('')
const filteredBooks = useMemo(()=> books?.filter(b => b.title.toLowerCase().includes( filterParam.toLowerCase())
),[filterParam])

  return (
    <>
      <BookFilter setFilterParam={setFilterParam} filterParam={filterParam}/>
      {isLoading ?  
        <p>Is loading</p>
        :     
        <BookList books={filteredBooks.length ===0 ? books:filteredBooks}/>
      }
    </>
  )
}

export default App
