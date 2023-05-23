import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Pagination from '../../ui/Pagination/Pagination'
import Input from '../../ui/Input/Input'
import CatalogItem from '../../components/CatalogItem/CatalogItem'
import useArticlesStore from './store'
import Loader from '../../assets/Loader/Loader'
import './style.scss'
import classNames from 'classnames'

const Catalog = () => {
  const articles = useArticlesStore(state => state.articles)
  const articlesLoading = useArticlesStore(state => state.isLoading)
  const fetchArticles = useArticlesStore(state => state.fetchArticles)
  const likeArticle = useArticlesStore(state => state.likeArticle)

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className='catalogWrap'>
      <Navigation />

      <div className='catalogContent'>
        {articlesLoading ? null :
          <div className='catalogContent__nav'>
            <div className='catalogContent__navLeft'>
              <Pagination pagesCount={3}></Pagination>
            </div>
            <div className='catalogContent__navRight'>
              <Input placeholder='Search...'></Input>
            </div>
          </div>
        }

        <div className={classNames('catalogItems', articlesLoading && 'catalogItems_loading')}>
          {articlesLoading ? <Loader /> :
            articles.map((i) =>
              <CatalogItem key={i.id}
                           id={i.id}
                           isLiked={i.isLiked}
                           onLikeHandle={likeArticle}
                           description={i.description}
                           imageUrl={i.image_url}
                           title={i.title} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Catalog