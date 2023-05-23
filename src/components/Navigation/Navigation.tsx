import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import useMenuStore from '../../store'
import './styles.scss'

export default function Navigation() {
  const location = useLocation()
  const menuStatus = useMenuStore(state => state.menuStatus)
  const setMenuStatus = useMenuStore(state => state.setMenuStatus)

  const pagesList = [
    {
      title: 'ABOUT QRATES',
      path: '/about',
    },
    {
      title: 'CATALOG',
      path: '/catalog',
    }]

  const onPageChange = () => {
      window.innerWidth <= 1550 ? setMenuStatus() : null
  }

  return (
    <nav className={classNames('navigation', menuStatus && 'navigation_active')}>
      <b className='navigation__title'>
        Navigation
      </b>
      <ul className='navigation__list'>
        {pagesList.map((i, index) =>
          <li
            className={classNames('navigation__listItem', location.pathname == `${i.path}` && 'navigation__listItem_active')}
            key={index}>
            <Link to={i.path}
                  onClick={onPageChange}
                  className={classNames('navigation__link', location.pathname == `${i.path}` && 'navigation__link_active')}>
              {i.title}
            </Link>
          </li>,
        )}
      </ul>
    </nav>
  )
}