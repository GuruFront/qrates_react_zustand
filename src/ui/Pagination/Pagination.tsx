import React from 'react'
import classNames from 'classnames'
import './styles.scss'

interface PaginationProps {
  pagesCount: number
}

const Pagination = ({ pagesCount }: PaginationProps) => {
  return (
    <ul className='pagination'>
      {new Array(pagesCount).fill(1).map((i, idx) =>
        <li key={idx} className={classNames('pagination__btn', idx === 1 && 'pagination__btn_active')}>
          {idx + 1}
        </li>,
      )}
    </ul>
  )
}

export default Pagination