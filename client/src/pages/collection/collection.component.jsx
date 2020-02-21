import React from 'react';
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component';


import { selectCollection} from '../../redux/shop/shop.selectors'

import {CollectionPages, Title, Items, CollectionItems } from './collection.styles'



const CollectionPage = ({ collection }) => {
  const { title, items} = collection;
  return(
    <CollectionPages>
      <Title>{ title} </Title>
      <Items>
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </Items>
    </CollectionPages>
  );
};



const mapStateProps = ( state, ownProps ) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateProps)(CollectionPage);