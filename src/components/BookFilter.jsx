import React from 'react'

export default function BookFilter({setFilterParam,filterParam}) {
  return (
    <div>
        <form>
          <label>Enter your task:
            <input type="text" 
            placeholder="Enter a new task" 
            onChange={(e)=>setFilterParam(e.target.value)}
            value={filterParam}
            />
          </label>
        </form>
    </div>
  )
}
