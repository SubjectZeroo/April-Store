
import SHOP_DATA from './shop.data'
import { Switch } from 'react-router-dom'

const INITAL_STATE = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITAL_STATE, ACTION) => {
  switch(ACTION.type) {
    default:
      return state
  }
}

export default shopReducer;