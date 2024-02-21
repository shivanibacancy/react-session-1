import './App.css';
import { Users } from './users';
import { useState } from 'react';
import Table from './Table';
import Pagination from './Pagination';

function App() {

  const [query, setQuery] = useState("");
  // console.log(query);

  //pagination- page and limit-> can be changed overtime, so managed by states here
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  //pagination 
  const getData = (page, limit) => {
    let pagedData = [];
    for(let i = (page-1)*limit; i < (page*limit); i++) {
      pagedData.push(Users[i]);
    }
    console.log(pagedData);
    return pagedData;
  }

  let totalPage = Math.ceil(Users.length / limit);

  let results = getData(page,limit);

  function handlePageChange(value) {
    console.log(value);
    if(value === "&laquo;" || value === "... ") {
      setPage(1);
    } else if (value === "&lasquo;") {
      if(page !== 1) {
        setPage(page-1);
      }
    } else if (value === "&rsaquo;") {
      if(page !== totalPage) {
        setPage(page+1);
      }
    } else if (value === "&raquo" || value === " ...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  const keys = ["first_name", "last_name", "email"];
  
  //we use some because it be in any key ||
  const search = (data) => {
    return data.filter((item) => 
      keys.some(key => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <input 
        type="text"
        placeholder='Search...' 
        className="search" 
        onChange={e => setQuery(e.target.value)}
      />

      <Table data={(search(results))}/>
      <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
