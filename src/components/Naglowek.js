import React from 'react'
import logo from '../img/zdjęcia/logoBGD.png'
import PasekKontaktu from './PasekKontaktu'
import ZamknijIkona from '../img/ikony/zamknijIkona.svg'
import MobileMenu from '../img/ikony/mobileMenu.svg'

const Naglowek = () => {
  function wysunMenu () {
    if (window.screen.width < 850.1) {
        document.getElementsByClassName('NavigationOptions')[0].style = 'right: 0px'
        document.getElementsByClassName('Header')[0].style = 'overflow-x: visible'
      }
    }
  function zamknijMenu () {
    if (window.screen.width < 850.1) {
      document.getElementsByClassName('NavigationOptions')[0].style = 'right: -80vw'
      document.getElementsByClassName('Header')[0].style = 'overflow-x: hidden'
    }
  }
  return (
    <div className='OtoczkaHeader'>
      <div className='Header'>
        <div className='LogoContainer'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='MobileMenu' onClick={wysunMenu}>
            <img src={MobileMenu} alt='Menu mobilne' />
        </div>
        <div className='NavigationOptions'>
          <div className='PojemnikZamknij' onClick={zamknijMenu}>
            <img src={ZamknijIkona} alt='Zamknij Ikona' />
          </div>
          <a href='#ProjektyLink'onClick={zamknijMenu}><span className='NavOption'><span className='NavNumber'>1.</span> PROJEKTY</span></a>
          <a href='#EduLink'onClick={zamknijMenu}><span className='NavOption'><span className='NavNumber'>2.</span> EDUKACJA</span></a>
          <a href='#UmiejLink'onClick={zamknijMenu}><span className='NavOption'><span className='NavNumber'>3.</span> UMIEJĘTNOŚCI</span></a>
          <a href='#FormularzLink'onClick={zamknijMenu}><span className='NavOption'><span className='NavNumber'>4.</span> KONTAKT</span></a>
          <PasekKontaktu id='MobilnyKontakt' onClick={zamknijMenu}/>
        </div>
      </div>
    </div>
  )
}

export default Naglowek

