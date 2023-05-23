import { create } from 'zustand'

interface MenuStore {
  menuStatus: boolean
  setMenuStatus: () => void
}

const useMenuStore = create<MenuStore>((set, get) => ({
  menuStatus: false,
  setMenuStatus: () => {
    set(state => {
      return { ...state, menuStatus: !get().menuStatus }
    })
  },
}))

export default useMenuStore