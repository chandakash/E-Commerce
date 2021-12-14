import React from 'react'
import { CollectionItem } from '../collection-item/CollectionItem'

export const CollectionPreview = ({title,items}) => {
    return (
        <div>
             <div className="collection-preview">
                 <h1 className="title">
                     {title.toUpperCase()}
                 </h1>
                 <div className="preview">
                     {items.filter((item,idx) => idx<4).map(item => (
                         <div key = {item.id}>
                            <CollectionItem {...item}/>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
    )
}
