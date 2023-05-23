import './style.scss'
import classNames from 'classnames'

interface MenuBtnProps {
  onMenuOpen: () => void
  menuStatus: boolean
}

const MenuBtn = ({ onMenuOpen, menuStatus }: MenuBtnProps) => {
  return <div className={classNames('menuBtn', menuStatus && 'menuBtn_active')} onClick={onMenuOpen}>
    <div className={classNames('menuBtn__line', menuStatus && 'menuBtn__line_active')}></div>
  </div>
}


export default MenuBtn