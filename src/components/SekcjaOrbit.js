import React from 'react'

import Programista from '../img/zdjęcia/programista.png'

import CssIcon from '../img/ikony/umiejętności/css.svg'
import DjangoIcon from '../img/ikony/umiejętności/django.svg'
import HtmlIcon from '../img/ikony/umiejętności/html.svg'
import JSIcon from '../img/ikony/umiejętności/js.svg'
import PythonIcon from '../img/ikony/umiejętności/python.svg'
import ReactIcon from '../img/ikony/umiejętności/react.svg'
import RestAPIIcon from '../img/ikony/umiejętności/restAPI.svg'
import SQLIcon from '../img/ikony/umiejętności/sql.svg'

import FigmaIcon from '../img/ikony/narzędzia/figma.svg'
import GitIcon from '../img/ikony/narzędzia/git.svg'
import GithubIcon from '../img/ikony/narzędzia/github.svg'
import RenderIcon from '../img/ikony/narzędzia/render.svg'
import VSCIcon from '../img/ikony/narzędzia/VSC.svg'


const Orbity = () => {
    let UmiejetnosciINarzedzia = [CssIcon, DjangoIcon, HtmlIcon, JSIcon, PythonIcon, 
        ReactIcon, RestAPIIcon, SQLIcon, FigmaIcon, GitIcon, GithubIcon, RenderIcon, VSCIcon]
    let UmiejCzyNarz = UmiejetnosciINarzedzia.map( (element, index) => {
        if (index <= 7) {return 'OrbitaUmiejetnosci'}
        else return 'OrbitaNarzedzia'
    })
  return (
    <div className='PolowniczyPojemnik PojemnikOrbit'> 
        <div className='PolowniczyLewa LewaOrbity'>
        <div className='NazywamSie KontrolaTekstu'>
        Nazywam się Bartosz Gurgul i jestem programistą stron internetowych (full-stack developer).
        <br/>
        Pasjonuje mnie tworzenie coraz lepszych witryn, zarówno pod względem funkcjonalności jak i wyglądu.
        Obecnie do pracy wykorzystuje głównie kombinacje frameworku <b>Django</b> i biblioteki <b>React</b>.
        </div>
        <div className='Zapraszam'>Zapraszam do przeglądu kilku przykładowych efektów mojej pracy</div>
        </div>
        <div className='PolowniczyPrawa PrawaOrbity'>     
            <div className="PojemnikWszystkichOrbit">
                {UmiejetnosciINarzedzia.map((element, index) => {return (
                    <div key={index} className={'n'+String(index)}>
                        <div className={UmiejCzyNarz[index]}>
                            <div className={'Pojem'+UmiejCzyNarz[index]}>
                                <div className="ElementOrbity">
                                    <div className="ElementOrbityWnetrze">
                                        <img src={element} alt={element} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )})}
                <img className='Programista' src={Programista} alt='Programista'/>
            </div>
        </div>   
    </div>
  )
}
export default Orbity
