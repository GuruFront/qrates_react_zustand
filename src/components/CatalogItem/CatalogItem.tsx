import React from 'react'
import LikeIcon from '../../assets/likeIcon'
import './style.scss'

interface CatalogItemProps {
  description: string
  imageUrl: string
  title: string
  onLikeHandle: (id: number) => void
  id: number
  isLiked: boolean | undefined
}

const CatalogItem = ({ id, title, imageUrl, description, onLikeHandle, isLiked }: CatalogItemProps) => {
  return (
    <div className='catalogItem'>
      <figure className='catalogItem__imgWrap'>
        <img className='catalogItem__img'
             src={imageUrl}
             alt='' />

        <figcaption>
          <div className='catalogItem__content'>
            <p className='catalogItem__contentTitle'>
              {title}
            </p>
            <p className='catalogItem__contentText'>
              {description}
            </p>
            <div className='catalogItem__contentActions'>
              <div className='catalogItem__contentLike' onClick={(e) => onLikeHandle(id)}>
                <LikeIcon liked={isLiked ?? false} />
              </div>
            </div>
          </div>
        </figcaption>
      </figure>

    </div>
  )
}

export default CatalogItem