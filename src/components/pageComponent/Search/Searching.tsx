import React, {useState} from 'react'

const Searching = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="flex items-center space-x-4 relative">
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 rounded-lg pl-3 pr-16 py-2 focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button
            type='submit'
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 absolute right-2.5"
            onClick={handleSearch}
          >
            <svg aria-hidden="true" className="w-5 h-5 text-white-500 dark:text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          
        </div>
        

  )
}

export default Searching