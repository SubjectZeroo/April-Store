import React from 'react';

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component {

  constructor() {
    super();
    this.state = {
      sections:[{
        title: 'Sombreros',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl:'sombreros'
      },
      {
        title: 'Chaquetas',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl:'chaquetas'
      },
      {
        title: 'Zapatos',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl:'zapatos'
      },
      {
        title: 'Damas',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl:'damas'
      },
      {
        title: 'Caballeros',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl:'caballeros'
      }
      ]
    }
  }

  render() {
    return( 
      <div className='directory-menu'>       
       
          {this.state.sections.map(({  id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))}  
      </div>
    );
  }
}

export default Directory;



// {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
//   <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
// ))}  