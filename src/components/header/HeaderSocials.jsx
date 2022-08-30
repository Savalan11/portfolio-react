import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/savalan-suleymanli-3998b645/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Savalan11" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/SAVALAN_S" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials