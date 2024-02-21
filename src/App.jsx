import './App.css';
import { Users } from './users';
import { useState } from 'react';
import Table from './Table';

function App() {

  const [query, setQuery] = useState("");
  // console.log(query);

  //pagination- page and limit-> can be changed overtime, so managed by states here
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(5);

  //pagination 
  // const getData = (page, limit) => {
  //   let pagedData = [];
  //   for(let i = (page-1)*limit; i < (page*limit); i++) {
  //     pagedData.push(Users[i]);
  //   }
  //   // console.log(pagedData);
  //   return pagedData;
  // }

  // getData(page,limit);

  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")))


  //To search in table

  const search = (data) => {
    return data.filter(item => 
      item.first_name.toLowerCase().includes(query) ||
      item.last_name.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) 
      );
  }

  //Make searching-optimise
  // console.log(Users[0]["last_name"]);

  const keys = ["first_name", "last_name", "email"];
  
  //we use some because it be in any key ||
  // const search = (data) => {
  //   return data.filter((item) => 
  //     keys.some(key => item[key].toLowerCase().includes(query))
  //   );
  // };

  return (
    <div className="app">
      <input 
        type="text"
        placeholder='Search...' 
        className="search" 
        onChange={e => setQuery(e.target.value)}
      />
      {/* <ul className='list'>
        {Users.filter((user) => 
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className='listItem'>{user.first_name}</li>
        ))}
      </ul> */}

      <Table />
      {/* <Table data={Users}/> */}
      {/* <Table data={search(Users)}/> */}
    </div>
  );
}

export default App;
