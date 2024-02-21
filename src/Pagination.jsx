import React from 'react'
import { returnPaginationRange } from './utils/appUtils'

function Pagination(props) {
  let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings);
  return (
    <ul className="pagination pagination-md justify-content-end">
        <li className="page-item"><span onClick={() => props.onPageChange("&laquo;")} className="page-link" href="#">&laquo;</span></li>
        <li className="page-item"><span onClick={() => props.onPageChange("&lsaquo;")} className="page-link" href="#">&lsaquo;</span></li>
        {array.map(value => {
          if (value === props.page) {
            return (
              <li key={value} className='page-item active'><span className='page-link' onClick={() => props.onPageChange(value)}>{value}</span></li>
            )
          } else {
            return (
              <li key={value} className='page-item'>
                <span className='page-link' onClick={() => props.onPageChange(value)}>{value}</span>
              </li>
            )
          }
        })}
        <li className="page-item"><span className="page-link" href="#" onClick={() => props.onPageChange("&rsaquo;")}>&rsaquo;</span></li>
        <li className="page-item"><span className="page-link" href="#" onClick={() => props.onPageChange("&raquo;")}>&raquo;</span></li>
    </ul>
  )
}

export default Pagination