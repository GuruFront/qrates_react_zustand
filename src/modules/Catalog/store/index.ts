import { create } from 'zustand'
import MockData from '../../MockData'

interface Article {
  id: number
  title: string
  description: string
  image_url: string
  isLiked?: boolean | undefined
}

interface ArticlesState {
  articles: Article[]
  fetchArticles: () => Promise<void>
  likeArticle: (id: number) => void
  isLoading: boolean
}

const useArticlesStore = create<ArticlesState>((set, get) => ({
  isLoading: false,
  likeArticle: (id: number) => {
    const newArticles = get().articles.map(i => {
      if (i.id === id) i.isLiked = !i.isLiked
      return i
    })

    set(state => ({
      ...state,
      articles: newArticles,
    }))
  },
  articles: [],
  fetchArticles: async () => {
    set(state => ({
      ...state,
      isLoading: true,
    }))

    const response : any = await new Promise((resolve) => setTimeout(() => {
      resolve(MockData())
    }, 1000))

    set(state => ({
      ...state,
      isLoading: false,
      articles: response.cards
    }))
  }
}))

export default useArticlesStore