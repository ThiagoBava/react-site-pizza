import React, {useState} from 'react';
import Navbar from '../NavBar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
                <HeroH1>Os Melhores Lanches</HeroH1>
                <HeroP>No melhor tempo!</HeroP>
                <HeroBtn>Compre Já!</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero;