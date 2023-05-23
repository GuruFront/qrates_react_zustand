import React from 'react'
import './index.scss'
import Logo from '../../assets/Logo'
import MenuBtn from '../../ui/MenuBtn/MenuBtn'
import classNames from 'classnames'

interface HeaderProps {
  onMenuOpen: () => void
  menuStatus: boolean
}

export default function Header({ onMenuOpen, menuStatus }: HeaderProps) {
  return <div className={classNames('header', menuStatus && 'header_active')}>
    <div className='header__logo'>
      <Logo color={menuStatus ? 'white' : 'black'} />
    </div>

     <MenuBtn onMenuOpen={onMenuOpen} menuStatus={menuStatus} />
  </div>
}