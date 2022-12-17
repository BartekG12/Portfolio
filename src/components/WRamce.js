import React from 'react'

import External from '../img/ikony/externalLink.png'
import Github from '../img/ikony/github.png'
import GithubPrzekreslony from '../img/ikony/githubPrzekreślony.png'

const WRamce = ({linki, techIcons, CzyGithub}) => {
  return (
    <div className='WRamce'>
        <div className='ZobaczStrone'>
            <div className='TekstLinki'>ZOBACZ STRONĘ</div>
            <div className='LinkiStrony'>
                <a href={linki[0]} target="_blank" rel="noopener noreferrer"><img src={External} /></a>
                {CzyGithub
                ? <a href={linki[1]} target="_blank" rel="noopener noreferrer"><img src={Github} /></a>
                : <a href={linki[1]} target="_blank" rel="noopener noreferrer"><img src={GithubPrzekreslony} /></a>
                }
            </div>
        </div>
        <div className='Separator'></div>
        <div className='GlowneTechnologie'>
            <div className='TekstTech'>GŁÓWNE TECHNOLOGIE</div>
            <div className='GlowneTechIkony'>
                {Array.from(techIcons).map((element, indeks) => {
                    return <img src={element} alt='Technologie' key={indeks}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default WRamce
