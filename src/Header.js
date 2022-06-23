import React from 'react'

function Header() {
  return (
    <header>
      <div className='header'>
        <div className='header__logo'>
          <div className='header__logo-img'></div>
          <div className='header__logo-title'>Agency</div>
        </div>
        <nav className='menu'>
          <ul className='menu__list'>
            <li className='menu__list-item'>
              <a className='menu__list-link' href="#">About</a>
            </li>
            <li className='menu__list-item'>
              <a className='menu__list-link' href="#">Services</a>
            </li>
            <li className='menu__list-item'>
              <a className='menu__list-link' href="#">Pricing</a>
            </li>
            <li className='menu__list-item'>
              <a className='menu__list-link' href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <div className='header__concat'>
          <button className='header__concat-btn'>
            concat
          </button>
        </div>
      </div>
      <div className='description'>
        <h1 className='description__title'>Portfolio</h1>
        <h6 className='descriprion__agency'>Agency provides a full service range including teckhnical skills, design, business understanding.</h6>
      </div>
    </header>
  )
}

export default Header