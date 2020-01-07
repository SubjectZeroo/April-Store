import React from 'react';
import './home.styles.scss';
const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Zapatos</h1>
          <span className='subtitle'>Comprar</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Chaquetas</h1>
          <span className='subtitle'>Comprar</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Sombrero</h1>
          <span className='subtitle'>Comprar</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Caballeros</h1>
          <span className='subtitle'>Comprar</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Damas</h1>
          <span className='subtitle'>Comprar</span>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage;