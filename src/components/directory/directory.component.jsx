import React from 'react';

import './directory.styles.scss'


import { connect } from 'react-redux'

import { createStructuredSelector  } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';


const Directory = ({ sections }) =>  ( 
  <div className='directory-menu'>          
    {sections.map(({  id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}/>
    ))}  
  </div>
)


const mapStateProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateProps)(Directory);



// {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
//   <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
// ))}  