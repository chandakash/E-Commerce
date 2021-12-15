import React from 'react'
import { CollectionItem } from '../collection-item/CollectionItem'
import './CollectionPreview.scss'

export const CollectionPreview = ({title,items}) => {
    return (
        <div>
             <div className="collection-preview">
                 <h1 className="title">
                     {title.toUpperCase()}
                 </h1>
                 <div className="preview">
                     {items.filter((item,idx) => idx<4).map(({id, ...otherItemProps}) => (
                            <CollectionItem key = {id} {...otherItemProps}/>
                     ))}
                 </div>
             </div>
        </div>
    )
}
