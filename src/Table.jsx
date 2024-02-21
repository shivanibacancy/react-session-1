import React from 'react'


function Table({ data }) {
    
  return (
    <table>
        <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {/* <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> */}
            
        </tbody>
    </table>
  )
}

export default Table



























{/* {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            ))} */}