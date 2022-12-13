import React from 'react'

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

const SekcjaUmiejNarz = () => {
  let Umiejetnosci = [DjangoIcon, ReactIcon, PythonIcon, CssIcon,  HtmlIcon, JSIcon, 
       RestAPIIcon, SQLIcon]
  let UmiejetnosciStr = ['Django', 'React', 'Python', 'Css',  'Html', 'JS',
         'Rest API', 'SQL']
  let Narzedzia = [FigmaIcon, GitIcon, GithubIcon, RenderIcon, VSCIcon]
  let NarzedziaStr = ['Figma', 'Git', 'Github', 'Render', 'VS Code']
  return (
    <div className='UmiejNarz'>
        <div id='UmiejLink' className='Lapacz'></div>
        <div className='Sekcja IntersekcjaPrawa'>
            <div className='PrzerywanaSekcji'></div>
            <div className='TytulSekcji'>UMIEJĘTNOŚCI</div>
            <div className='PrzerywanaSekcji'></div>
        </div>
        <div className='Umiejetnosci IntersekcjaPrawa'>
        {Umiejetnosci.map((element, indeks) => {return (
            <div key={indeks} className='PojUmiej'>
                <img src={element} alt='Umiejętność'/>
                {UmiejetnosciStr[indeks]}
            </div>
        )})}
        </div>
        <div className='Sekcja IntersekcjaLewa'>
            <div className='PrzerywanaSekcji'></div>
            <div className='TytulSekcji'>NARZĘDZIA</div>
            <div className='PrzerywanaSekcji'></div>
        </div>
        <div className='Narzedzia IntersekcjaLewa'>
        {Narzedzia.map((element, indeks) => {return (
            <div key={indeks} className='PojNarz'>
                <img src={element} alt='Narzędzie'/>
                {NarzedziaStr[indeks]}
            </div>
        )})}
        </div>
    </div>
  )
}

export default SekcjaUmiejNarz
